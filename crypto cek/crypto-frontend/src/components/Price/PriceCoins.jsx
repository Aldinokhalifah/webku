import axios from "axios";
import { useEffect, useState } from "react";
import CoinChart from "./CoinChart";

export default function PriceCoins() {
    const [coins, setCoins] = useState([]);
    const [chartCoins, setChartCoins] = useState(null);
    const [loading, setLoading] = useState(true);

    // Cache configuration
    const CACHE_DURATION = 10 * 60 * 1000; // 10 menit dalam milliseconds
    const CACHE_KEYS = {
        COINS: 'crypto_coins_cache',
        CHART: 'crypto_chart_cache'
    };

    // Utility functions untuk cache
    const getCacheData = (key) => {
        try {
            const cached = localStorage.getItem(key);
            if (!cached) return null;
            
            const { data, timestamp } = JSON.parse(cached);
            const now = Date.now();
            
            // Check apakah cache sudah expired
            if (now - timestamp > CACHE_DURATION) {
                localStorage.removeItem(key);
                return null;
            }
            
            return data;
        } catch (error) {
            console.error('Error reading cache:', error);
            localStorage.removeItem(key);
            return null;
        }
    };

    const setCacheData = (key, data) => {
        try {
            const cacheObject = {
                data,
                timestamp: Date.now()
            };
            localStorage.setItem(key, JSON.stringify(cacheObject));
        } catch (error) {
            console.error('Error setting cache:', error);
        }
    };

    // Function untuk fetch coins dari API
    const fetchCoins = async () => {
        const dataCoins = 'http://localhost:3000/api/top';
        const res = await axios.get(dataCoins);
        return res.data.data;
    };

    // Function untuk fetch chart data dari API
    const fetchChartData = async (coinIds) => {
        const response = await Promise.all(
            coinIds.map(id => axios.get(`http://localhost:3000/api/price/${id}`))
        );

        return response.map((res, idx) => ({
            id: coinIds[idx],
            name: res.data.data[0]?.name || coinIds[idx],
            symbol: res.data.data[0]?.symbol || coinIds[idx],
            chartData: res.data.data
        }));
    };

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                setLoading(true);
                
                // Coba ambil data dari cache dulu
                const cachedCoins = getCacheData(CACHE_KEYS.COINS);
                const cachedChart = getCacheData(CACHE_KEYS.CHART);
                
                if (cachedCoins && cachedChart) {
                    // Jika ada cache yang valid, gunakan cache
                    console.log('📦 Using cached data');
                    setCoins(cachedCoins);
                    setChartCoins(cachedChart);
                    setLoading(false);
                    return;
                }

                // Jika tidak ada cache atau sudah expired, fetch dari API
                console.log('🌐 Fetching fresh data from API');
                
                // Fetch coins data
                const coinsData = await fetchCoins();
                setCoins(coinsData);
                setCacheData(CACHE_KEYS.COINS, coinsData);

                // Fetch chart data
                const coinIds = coinsData.map(coin => coin.id);
                const chartData = await fetchChartData(coinIds);
                setChartCoins(chartData);
                setCacheData(CACHE_KEYS.CHART, chartData);

            } catch (error) {
                console.error('Error fetching coins:', error);
                
                // Jika terjadi error, coba gunakan cache yang expired sebagai fallback
                const cachedCoins = localStorage.getItem(CACHE_KEYS.COINS);
                const cachedChart = localStorage.getItem(CACHE_KEYS.CHART);
                
                if (cachedCoins && cachedChart) {
                    try {
                        const coinsData = JSON.parse(cachedCoins).data;
                        const chartData = JSON.parse(cachedChart).data;
                        setCoins(coinsData);
                        setChartCoins(chartData);
                        console.log('⚠️ Using expired cache as fallback');
                    } catch (cacheError) {
                        console.error('Error parsing cached data:', cacheError);
                    }
                }
            } finally {
                setLoading(false);
            }
        };

        fetchCoins();
    }, []);

    // Function untuk refresh data manual
    const refreshData = async () => {
        // Clear cache
        localStorage.removeItem(CACHE_KEYS.COINS);
        localStorage.removeItem(CACHE_KEYS.CHART);
        
        // Fetch fresh data
        setLoading(true);
        try {
            console.log('🔄 Refreshing data...');
            const coinsData = await fetchCoins();
            setCoins(coinsData);
            setCacheData(CACHE_KEYS.COINS, coinsData);

            const coinIds = coinsData.map(coin => coin.id);
            const chartData = await fetchChartData(coinIds);
            setChartCoins(chartData);
            setCacheData(CACHE_KEYS.CHART, chartData);
        } catch (error) {
            console.error('Error refreshing data:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-96">
                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto"></div>
                    <p className="text-white/70 mt-4 text-center">Loading chart data...</p>
                </div>
            </div>
        );
    }

    return(
        <div className="max-w-7xl mx-auto px-4 py-8 my-20">
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
                <div className="mb-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-2">
                                Top 10 Cryptocurrency <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Price Chart</span>
                            </h2>
                            <p className="text-white/70">
                                Historical price movements of the top 10 cryptocurrencies
                            </p>
                        </div>
                        
                        {/* Cache Status & Refresh Button */}
                        <div className="flex flex-col items-end space-y-2">
                            <div className="flex items-center space-x-3">                                
                                {/* Refresh Button */}
                                <button
                                    onClick={refreshData}
                                    disabled={loading}
                                    className="px-3 py-1 bg-white/10 hover:bg-white/20 disabled:bg-white/5 disabled:cursor-not-allowed border border-white/20 rounded-lg text-white text-sm transition-all duration-200 flex items-center space-x-2"
                                >
                                    <svg 
                                        className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2} 
                                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
                                        />
                                    </svg>
                                    <span>Refresh</span>
                                </button>
                            </div>
                            
                            {/* Cache Info */}
                            <div className="text-xs text-white/40">
                                Auto-refresh every 5 minutes
                            </div>
                        </div>
                    </div>
                </div>
                
                {chartCoins && (
                    <CoinChart 
                        chartCoins={chartCoins}
                    />
                )}
            </div>
        </div>
    );
}