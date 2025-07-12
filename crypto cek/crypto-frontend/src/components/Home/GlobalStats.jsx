import { useEffect, useState,useRef } from 'react';
import axios from 'axios';

export default function GlobalStats()  {
    const [stats, setStats] = useState(null);
    const cacheRef = useRef(null);

    useEffect(() => {
        const cached = localStorage.getItem('globalStats');
        const cachedTime = localStorage.getItem('globalStatsTimestamp');

        const isCacheValid = cached && cachedTime && (Date.now() - cachedTime < 5 * 60 * 1000); // 5 menit

        if (isCacheValid) {
            setStats(JSON.parse(cached));
            cacheRef.current = JSON.parse(cached);
        return;
        }

        const fetchStats = async () => {
        try {
            const response = await axios.get('https://api.coingecko.com/api/v3/global');
            setStats(response.data.data);
            cacheRef.current = response.data.data;

            // Simpan di localStorage
            localStorage.setItem('globalStats', JSON.stringify(response.data.data));
            localStorage.setItem('globalStatsTimestamp', Date.now());
        } catch (error) {
            console.error('Failed to fetch global stats:', error);
        }
        };

        fetchStats();
    }, []);

    if (!stats) return <div className="text-white text-center font-bold">Loading Global Stats...</div>;

    return(
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-8 mt-10 max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2 text-white">
                Global <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>Crypto</span> Market
                </h2>
                <p className="text-white/70">Real-time market overview and statistics</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Active Cryptocurrencies */}
                <div className="group hover:bg-white/5 shadow-lg transition-all duration-300 rounded-2xl p-6 border border-white/5">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                    <span className="text-2xl">🪙</span>
                    </div>
                    <div className="text-right">
                    <div className="text-sm text-white/60 uppercase tracking-wider">Active Coins</div>
                    <div className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {stats.active_cryptocurrencies.toLocaleString()}
                    </div>
                    </div>
                </div>
                <div className="text-white/70 text-sm">
                    Total cryptocurrencies in the market
                </div>
                </div>

                {/* Total Market Cap */}
                <div className="group hover:bg-white/5 shadow-lg transition-all duration-300 rounded-2xl p-6 border border-white/5">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                    <span className="text-2xl">💰</span>
                    </div>
                    <div className="text-right">
                    <div className="text-sm text-white/60 uppercase tracking-wider">Market Cap</div>
                    <div className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                        {Number(stats.total_market_cap.usd).toLocaleString('en-US', { 
                        style: 'currency', 
                        currency: 'USD',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                        })}
                    </div>
                    </div>
                </div>
                <div className="text-white/70 text-sm">
                    Total market capitalization
                </div>
                </div>

                {/* 24h Volume */}
                <div className="group hover:bg-white/5 shadow-lg transition-all duration-300 rounded-2xl p-6 border border-white/5">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl">
                    <span className="text-2xl">🔄</span>
                    </div>
                    <div className="text-right">
                    <div className="text-sm text-white/60 uppercase tracking-wider">24h Volume</div>
                    <div className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                        {Number(stats.total_volume.usd).toLocaleString('en-US', { 
                        style: 'currency', 
                        currency: 'USD',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                        })}
                    </div>
                    </div>
                </div>
                <div className="text-white/70 text-sm">
                    Total trading volume (24h)
                </div>
                </div>

                {/* BTC Dominance */}
                <div className="group hover:bg-white/5 shadow-lg transition-all duration-300 rounded-2xl p-6 border border-white/5">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl">
                    <span className="text-2xl">₿</span>
                    </div>
                    <div className="text-right">
                    <div className="text-sm text-white/60 uppercase tracking-wider">BTC Dominance</div>
                    <div className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                        {stats.market_cap_percentage.btc.toFixed(2)}%
                    </div>
                    </div>
                </div>
                <div className="text-white/70 text-sm">
                    Bitcoin market dominance
                </div>
                <div className="mt-3 w-full bg-white/10 rounded-full h-2">
                    <div 
                    className="bg-gradient-to-r from-yellow-400 to-orange-400 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${stats.market_cap_percentage.btc}%` }}
                    ></div>
                </div>
                </div>

                {/* ETH Dominance */}
                <div className="group hover:bg-white/5 shadow-lg transition-all duration-300 rounded-2xl p-6 border border-white/5">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl">
                    <span className="text-2xl">Ξ</span>
                    </div>
                    <div className="text-right">
                    <div className="text-sm text-white/60 uppercase tracking-wider">ETH Dominance</div>
                    <div className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {stats.market_cap_percentage.eth.toFixed(2)}%
                    </div>
                    </div>
                </div>
                <div className="text-white/70 text-sm">
                    Ethereum market dominance
                </div>
                <div className="mt-3 w-full bg-white/10 rounded-full h-2">
                    <div 
                    className="bg-gradient-to-r from-blue-400 to-indigo-400 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${stats.market_cap_percentage.eth}%` }}
                    ></div>
                </div>
                </div>

                {/* Market Cap Change 24h */}
                <div className="group hover:bg-white/5 shadow-lg transition-all duration-300 rounded-2xl p-6 border border-white/5">
                <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${
                    stats.market_cap_change_percentage_24h_usd >= 0 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                        : 'bg-gradient-to-r from-red-500 to-pink-500'
                    }`}>
                    <span className="text-2xl">
                        {stats.market_cap_change_percentage_24h_usd >= 0 ? '📈' : '📉'}
                    </span>
                    </div>
                    <div className="text-right">
                    <div className="text-sm text-white/60 uppercase tracking-wider">24h Change</div>
                    <div className={`text-2xl font-bold transition-colors ${
                        stats.market_cap_change_percentage_24h_usd >= 0 
                        ? 'text-green-400 group-hover:text-green-300' 
                        : 'text-red-400 group-hover:text-red-300'
                    }`}>
                        {stats.market_cap_change_percentage_24h_usd >= 0 ? '+' : ''}
                        {stats.market_cap_change_percentage_24h_usd.toFixed(2)}%
                    </div>
                    </div>
                </div>
                <div className="text-white/70 text-sm">
                    Market cap change (24h)
                </div>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
                <p className="text-white/60 text-sm">
                    Last updated: {new Date().toLocaleString()}
                </p>
                <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm">Live Data</span>
                </div>
                </div>
            </div>
        </div>
    );
}