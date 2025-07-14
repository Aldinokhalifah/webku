import React, { useState, useEffect } from 'react';
import { ArrowRightLeft, TrendingUp, Zap, DollarSign, Bitcoin } from 'lucide-react';
import Swal from 'sweetalert2'

export default function ConverterPage() {
  const [fromCoin, setFromCoin] = useState('');
  const [toCoin, setToCoin] = useState('');
  const [amount, setAmount] = useState(1);
  const [conversionResult, setConversionResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cacheStatus, setCacheStatus] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const formatCoinName = (name) => name.trim().toLowerCase().replace(/\s+/g, '-');

  // Cache management functions
  const getCacheKey = (from, to) => {
    return `crypto_rate_${formatCoinName(from)}_${formatCoinName(to)}`;
  };

  
  const getCachedRate = (from, to) => {
    const cacheKey = getCacheKey(from, to);
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      const { rate, timestamp } = JSON.parse(cached);
      const fiveMinutes = 5 * 60 * 1000;
      if (Date.now() - timestamp < fiveMinutes) {
        return rate;
      } else {
        localStorage.removeItem(cacheKey);
      }
    }
    return null;
  };


  const setCachedRate = (from, to, rate) => {
    const cacheKey = getCacheKey(from, to);
    const cacheData = {
      rate,
      timestamp: Date.now()
    };
    localStorage.setItem(cacheKey, JSON.stringify(cacheData));
  };

  const handleConvert = async () => {
    if (!fromCoin || !toCoin || amount <= 0) return;
    setIsLoading(true);
    setCacheStatus('');
    
    try {
      // Check cache first
      const from = formatCoinName(fromCoin);
      const to = formatCoinName(toCoin);
      const cachedRate = getCachedRate(from, to);
            
      if (cachedRate) {
        setConversionResult(cachedRate * amount);
        setCacheStatus('cached');
        setIsLoading(false);
        return;
      }

      
      // If not cached, fetch from API
      setCacheStatus('fetching');
      
      // Actual API call to your backend
      const res = await fetch(`http://localhost:3000/api/rates/${from}/${to}`);
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.message || 'Conversion failed');
      }
      
      const rate = parseFloat(data.conversion);
      
      // Cache the result
      setCachedRate(from, to, rate);
      
      setConversionResult(rate * amount);
      setCacheStatus('fresh');
    } catch (error) {
      console.error('Conversion failed:', error.message);
      Swal.fire({
        title: 'Error!',
        text: 'Conversion failed. Please check coin names and try again.',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    } finally {
      setIsLoading(false);
    }
  };

  const swapCoins = () => {
    setFromCoin(toCoin);
    setToCoin(fromCoin);
    setConversionResult(null);
    setCacheStatus('');
  };

  return (
    <div className="relative">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 border border-blue-400/20 rounded-full animate-spin"></div>
        <div className="absolute bottom-40 right-16 w-12 h-12 border border-purple-400/20 rounded-lg animate-pulse"></div>
        <div className="absolute top-40 right-20 w-8 h-8 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full animate-bounce"></div>
      </div>

      {/* Main converter form */}
      <div className={`relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl max-w-2xl mx-auto mt-12 border border-white/10 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Convert Cryptocurrency
              </h2>
            </div>
            <p className="text-gray-400 text-sm">
              Real-time conversion with live market rates
            </p>
          </div>

          {/* Input Section */}
          <div className="space-y-6">
            {/* From Coin */}
            <div className="relative group">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                From
              </label>
              <div className="relative">
                <Bitcoin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter coin name (e.g. bitcoin)"
                  value={fromCoin}
                  onChange={(e) => setFromCoin(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 text-white placeholder-white/50 border border-white/20 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 hover:bg-white/15"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>

            {/* Amount Input */}
            <div className="relative group">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Amount
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  placeholder="1"
                  value={amount}
                  onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 text-white placeholder-white/50 border border-white/20 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 hover:bg-white/15"
                />
              </div>
            </div>

            {/* Swap Button */}
            <div className="flex justify-center">
              <button
                onClick={swapCoins}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 transition-all duration-300 group"
              >
                <ArrowRightLeft className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:rotate-180 transition-all duration-300" />
              </button>
            </div>

            {/* To Coin */}
            <div className="relative group">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                To
              </label>
              <div className="relative">
                <Bitcoin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter coin name (e.g. ethereum)"
                  value={toCoin}
                  onChange={(e) => setToCoin(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 text-white placeholder-white/50 border border-white/20 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 hover:bg-white/15"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>

            {/* Convert Button */}
            <button
              onClick={handleConvert}
              disabled={isLoading || !fromCoin || !toCoin || amount <= 0}
              className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Converting...
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5" />
                  Convert Now
                </>
              )}
            </button>
          </div>

          {/* Result Section */}
          {conversionResult !== null && (
            <div className="flex flex-wrap justify-center items-center mt-8 p-6 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-xl border border-emerald-500/20 animate-in fade-in duration-500">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 mb-3">
                  <div className={`w-2 h-2 rounded-full animate-pulse ${
                    cacheStatus === 'cached' ? 'bg-blue-400' : 
                    cacheStatus === 'fresh' ? 'bg-emerald-400' : 'bg-yellow-400'
                  }`}></div>
                  <span className={`text-sm font-medium ${
                    cacheStatus === 'cached' ? 'text-blue-400' : 
                    cacheStatus === 'fresh' ? 'text-emerald-400' : 'text-yellow-400'
                  }`}>
                    {cacheStatus === 'cached' ? 'Cached Result (5min)' : 
                    cacheStatus === 'fresh' ? 'Fresh Market Data' : 'Conversion Result'}
                  </span>
                </div>
                <div className="text-2xl font-bold text-white mb-2">
                  {amount} {fromCoin.toUpperCase()} 
                  <span className="mx-3 text-gray-400">≈</span>
                  <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    {conversionResult.toFixed(2)}
                  </span> {toCoin.toUpperCase()}
                </div>
                <p className="text-sm text-gray-400">
                  {cacheStatus === 'cached' ? 'Data from cache • Updated within 5 minutes' : 
                  cacheStatus === 'fresh' ? 'Rate updated • Live market data' : 
                  'Live market data'}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}