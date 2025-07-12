import { useEffect, useState, useRef } from "react";
import { Search, TrendingUp, AlertCircle, Loader2 } from "lucide-react";
import axios from "axios";
import CoinChart from "./CoinChart"; // Import CoinChart component

export default function SearchPrice() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchChart, setSearchChart] = useState('');
    const [chartCoins, setChartCoins] = useState([]); // State untuk CoinChart
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const cacheRef = useRef(new Map());

    useEffect(() => {
        // Using in-memory cache instead of localStorage
        const cached = cacheRef.current.get('searchChart');
        const cachedCoins = cacheRef.current.get('chartCoins');
        const cachedTime = cacheRef.current.get('searchChartTimestamp');
        
        const isCacheValid = cached && cachedTime && (Date.now() - cachedTime < 5 * 60 * 1000); // 5 minutes
        
        if (isCacheValid) {
            setSearchChart(cached);
            setChartCoins(cachedCoins || []);
            return;
        }
    }, []);

    const handleSearch = async () => {
        if (!searchTerm.trim()) {
            setError('Please enter a cryptocurrency name');
            return;
        }

        setIsLoading(true);
        setError('');

        try {
            const res = await axios.get(`http://localhost:3000/api/price/${searchTerm}`);
            
            setSearchChart({
                id: searchTerm,
                chartData: res.data.data
            });

            // Transform data untuk CoinChart
            const coinChartData = {
                id: searchTerm.toLowerCase(),
                chartData: res.data.data.map(item => ({
                    time: item.date || item.time || new Date().toISOString(),
                    priceUsd: item.price || item.priceUsd || 0
                }))
            };

            // Set data untuk CoinChart
            setChartCoins([coinChartData]);
            
            // Store in memory cache
            cacheRef.current.set('searchChart', {
                id: searchTerm,
                chartData: res.data.data
            });
            cacheRef.current.set('chartCoins', [coinChartData]);
            cacheRef.current.set('searchChartTimestamp', Date.now());
            
        } catch (error) {
            console.error('Error fetching coin price:', error.message);
            setError('Coin not found! Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="min-h-screen p-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white mb-2 flex items-center justify-center gap-3">
                        <TrendingUp className="text-yellow-400" size={40} />
                        Crypto Price Search
                    </h1>
                    <p className="text-gray-300 text-lg">Search for cryptocurrency prices and charts</p>
                </div>

                {/* Search Section */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20 mb-8">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Enter cryptocurrency name (e.g., bitcoin, ethereum)"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyPress={handleKeyPress}
                                className="w-full pl-12 pr-4 py-4 bg-white/20 backdrop-blur-sm text-white placeholder-gray-300 rounded-xl border border-white/30 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                                disabled={isLoading}
                            />
                        </div>
                        <button
                            onClick={handleSearch}
                            disabled={isLoading || !searchTerm.trim()}
                            className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="animate-spin" size={20} />
                                    Searching...
                                </>
                            ) : (
                                <>
                                    <Search size={20} />
                                    Search
                                </>
                            )}
                        </button>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-2">
                            <AlertCircle className="text-red-400" size={20} />
                            <span className="text-red-300">{error}</span>
                        </div>
                    )}
                </div>

                {/* Results Section */}
                {searchChart && (
                    <div className="space-y-8">
                        {/* Price Info Card */}
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20 animate-fade-in">
                            <div className="text-center mb-6">
                                <h2 className="text-2xl font-bold text-white mb-2">
                                    {searchChart.id ? searchChart.id.charAt(0).toUpperCase() + searchChart.id.slice(1) : 'Cryptocurrency'} Price Info
                                </h2>
                                <p className="text-gray-300">Latest price data and trends</p>
                            </div>

                            {/* Price Stats */}
                            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                                    <div className="text-center">
                                        <p className="text-gray-400 text-sm">Current Price</p>
                                        <p className="text-2xl font-bold text-green-400">
                                            ${searchChart.chartData?.price?.toLocaleString() || 
                                            searchChart.chartData?.current_price?.toLocaleString() || 
                                            'N/A'}
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-gray-400 text-sm">24h Change</p>
                                        <p className={`text-2xl font-bold ${
                                            (searchChart.chartData?.price_change_percentage_24h || 0) >= 0 
                                                ? 'text-green-400' 
                                                : 'text-red-400'
                                        }`}>
                                            {searchChart.chartData?.price_change_percentage_24h 
                                                ? `${searchChart.chartData.price_change_percentage_24h.toFixed(2)}%`
                                                : 'N/A'}
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-gray-400 text-sm">Market Cap</p>
                                        <p className="text-2xl font-bold text-blue-400">
                                            ${searchChart.chartData?.market_cap?.toLocaleString() || 'N/A'}
                                        </p>
                                    </div>
                                </div>

                                {/* Additional Info */}
                                <div className="text-center">
                                    <p className="text-gray-400 text-sm">
                                        Data cached for 5 minutes • Last updated: {new Date().toLocaleTimeString()}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Chart Section */}
                        {chartCoins.length > 0 && (
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20 animate-fade-in">
                                <div className="text-center mb-6">
                                    <h2 className="text-2xl font-bold text-white mb-2">
                                        Price Chart
                                    </h2>
                                    <p className="text-gray-300">Interactive price visualization</p>
                                </div>
                                <CoinChart chartCoins={chartCoins} />
                            </div>
                        )}
                    </div>
                )}

                {/* Instructions */}
                {!searchChart && !isLoading && (
                    <div className="text-center text-gray-400">
                        <p className="text-lg mb-2">👆 Search for any cryptocurrency above</p>
                        <p className="text-sm">Try searching for popular coins like Bitcoin, Ethereum, or Dogecoin</p>
                    </div>
                )}
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out;
                }
            `}</style>
        </div>
    );
}