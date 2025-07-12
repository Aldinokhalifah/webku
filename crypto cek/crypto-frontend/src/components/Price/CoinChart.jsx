import { Line } from 'react-chartjs-2';
import { 
    Chart as ChartJS, 
    LineElement, 
    CategoryScale, 
    LinearScale, 
    LogarithmicScale, 
    PointElement, 
    Tooltip, 
    Legend, 
    Filler 
} from 'chart.js';
import { useState, useRef, useEffect } from 'react';

// Register semua komponen termasuk LogarithmicScale
ChartJS.register(
    LineElement, 
    CategoryScale, 
    LinearScale, 
    LogarithmicScale, 
    PointElement, 
    Tooltip, 
    Legend, 
    Filler
);

export default function CoinChart({ chartCoins }) {
    const [selectedCoins, setSelectedCoins] = useState(
        chartCoins ? chartCoins.slice(0, 5).map(coin => coin.id) : []
    );
    
    // Tambahkan ref untuk handle chart cleanup
    const chartRef = useRef(null);

    // Cleanup chart saat component unmount
    useEffect(() => {
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []);

    if (!chartCoins || chartCoins.length === 0) return null;

    // Color palette for different coins
    const colorPalette = [
        { border: '#f59e0b', bg: 'rgba(245, 158, 11, 0.1)' }, // Bitcoin - Orange
        { border: '#3b82f6', bg: 'rgba(59, 130, 246, 0.1)' }, // Ethereum - Blue  
        { border: '#10b981', bg: 'rgba(16, 185, 129, 0.1)' }, // Green
        { border: '#ef4444', bg: 'rgba(239, 68, 68, 0.1)' },  // Red
        { border: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.1)' }, // Purple
        { border: '#f97316', bg: 'rgba(249, 115, 22, 0.1)' }, // Orange
        { border: '#06b6d4', bg: 'rgba(6, 182, 212, 0.1)' },  // Cyan
        { border: '#84cc16', bg: 'rgba(132, 204, 22, 0.1)' }, // Lime
        { border: '#ec4899', bg: 'rgba(236, 72, 153, 0.1)' }, // Pink
        { border: '#6366f1', bg: 'rgba(99, 102, 241, 0.1)' }  // Indigo
    ];

    // Filter and prepare data for selected coins
    const visibleChartCoins = chartCoins.filter(coin => selectedCoins.includes(coin.id));

    // Find the longest dataset to use as base labels
    const longestDataset = visibleChartCoins.reduce((longest, current) => 
        current.chartData.length > longest.chartData.length ? current : longest
    , visibleChartCoins[0] || { chartData: [] });

    const data = {
        labels: longestDataset.chartData.map(item => 
            new Date(item.time).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric' 
            })
        ),
        datasets: visibleChartCoins.map((coin, index) => ({
            label: coin.id.charAt(0).toUpperCase() + coin.id.slice(1),
            data: coin.chartData.map(item => Number(item.priceUsd)),
            borderColor: colorPalette[index % colorPalette.length].border,
            backgroundColor: colorPalette[index % colorPalette.length].bg,
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 6,
            borderWidth: 2,
            fill: false
        }))
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: '#ffffff',
                    font: {
                        size: 12,
                        weight: 'bold'
                    },
                    padding: 20,
                    usePointStyle: true,
                    pointStyle: 'circle'
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: '#ffffff',
                bodyColor: '#ffffff',
                borderColor: 'rgba(255, 255, 255, 0.2)',
                borderWidth: 1,
                cornerRadius: 8,
                displayColors: true,
                callbacks: {
                    label: function(context) {
                        return `${context.dataset.label}: $${Number(context.parsed.y).toLocaleString('en-US', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 6
                        })}`;
                    }
                }
            }
        },
        scales: {
            y: {
                type: 'logarithmic', // Sekarang ini akan bekerja
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                    drawBorder: false
                },
                ticks: {
                    color: '#ffffff',
                    font: {
                        size: 11
                    },
                    callback: function(value) {
                        return '$' + Number(value).toLocaleString('en-US', {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0
                        });
                    }
                },
                title: {
                    display: true,
                    text: 'Price (USD)',
                    color: '#ffffff',
                    font: {
                        size: 12,
                        weight: 'bold'
                    }
                }
            },
            x: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                    drawBorder: false
                },
                ticks: {
                    color: '#ffffff',
                    font: {
                        size: 11
                    },
                    maxTicksLimit: 8
                },
                title: {
                    display: true,
                    text: 'Date',
                    color: '#ffffff',
                    font: {
                        size: 12,
                        weight: 'bold'
                    }
                }
            }
        }
    };

    const toggleCoin = (coinId) => {
        setSelectedCoins(prev => 
            prev.includes(coinId) 
                ? prev.filter(id => id !== coinId)
                : [...prev, coinId]
        );
    };

    return (
        <div className="space-y-6">
            {/* Coin Selection */}
            <div className="space-y-4">
                <h3 className="text-white font-semibold text-lg">Select Cryptocurrencies:</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {chartCoins.map((coin, index) => (
                        <button
                            key={coin.id}
                            onClick={() => toggleCoin(coin.id)}
                            className={`p-3 rounded-xl border transition-all duration-300 ${
                                selectedCoins.includes(coin.id)
                                    ? 'bg-white/10 border-white/30 text-white'
                                    : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                            }`}
                        >
                            <div className="flex items-center space-x-2">
                                <div 
                                    className="w-4 h-4 rounded-full"
                                    style={{ backgroundColor: colorPalette[index % colorPalette.length].border }}
                                ></div>
                                <span className="text-sm font-medium capitalize">
                                    {coin.id}
                                </span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Chart Container */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg">
                <div className="h-96">
                    <Line 
                        ref={chartRef} 
                        data={data} 
                        options={options}
                        key={selectedCoins.join(',')} // Force re-render saat coins berubah
                    />
                </div>
            </div>

            {/* Chart Info */}
            <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-white/60 space-y-2 sm:space-y-0">
                <div className="flex items-center space-x-4">
                    <span>Showing {selectedCoins.length} of {chartCoins.length} coins</span>
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span>Live Data</span>
                    </div>
                </div>
                <div className="text-right">
                    <span>Logarithmic scale • Historical data</span>
                </div>
            </div>
        </div>
    );
}