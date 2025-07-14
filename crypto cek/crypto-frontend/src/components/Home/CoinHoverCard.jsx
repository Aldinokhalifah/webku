const CoinHoverCard = ({ data, position }) => {
    if (!data) return null;

    return (
        <div
            className="fixed z-10 animate-in fade-in-0 zoom-in-95 duration-200"
            style={{ 
                top: Math.max(10, position.top), 
                left: Math.min(position.left, window.innerWidth - 320),
                transform: 'translateY(-50%)'
            }}
        >
            {/* Popup Container */}
            <div className="relative backdrop-blur-md bg-white/10 border border-white/20  rounded-2xl p-6 shadow-2xl w-80">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl -z-10"></div>
                
                {/* Arrow Pointer */}
                <div className="absolute left-0 top-1/2 transform -translate-x-2 -translate-y-1/2">
                    <div className="w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-white/10"></div>
                </div>

                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">
                                {data.symbol?.slice(0, 2)}
                            </span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white">
                                {data.name}
                            </h3>
                            <p className="text-sm text-gray-400 uppercase">
                                {data.symbol}
                            </p>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-xs text-gray-400">Rank</div>
                        <div className="text-lg font-bold text-blue-400">#{data.rank}</div>
                    </div>
                </div>

                {/* Price Section */}
                <div className="mb-4 p-3 bg-gray-800/50 rounded-lg border border-gray-700/30">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-white mb-1">
                            ${Number(data.priceUsd || 0).toLocaleString('en-US', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 6,
                            })}
                        </div>
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                            Number(data.changePercent24Hr) >= 0 
                                ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                                : 'bg-red-500/20 text-red-400 border border-red-500/30'
                        }`}>
                            <span className="mr-1">
                                {Number(data.changePercent24Hr) >= 0 ? '↗' : '↘'}
                            </span>
                            {Math.abs(Number(data.changePercent24Hr || 0)).toFixed(2)}%
                        </div>
                    </div>
                </div>

                {/* Market Data */}
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">Market Cap</span>
                        <span className="text-white font-semibold">
                            ${Number(data.marketCapUsd || 0).toLocaleString('en-US', {
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0,
                            })}
                        </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">24h Volume</span>
                        <span className="text-white font-semibold">
                            ${Number(data.volumeUsd24Hr).toLocaleString('en-US', {
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0,
                            })}
                        </span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">Supply</span>
                        <span className="text-white font-semibold">
                            {Number(data.supply).toLocaleString('en-US', {
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0,
                            })}
                        </span>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-4 pt-4 border-t border-gray-700/30">
                    <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-300">
                            Live Price Data
                        </div>
                        <div className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-xs text-green-500">Real-time</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoinHoverCard;