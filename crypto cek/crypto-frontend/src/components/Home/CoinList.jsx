import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CoinHoverCard from './CoinHoverCard'; // Make sure to import your CoinHoverCard component

export default function CoinList() {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCoin, setSelectedCoin] = useState(null);
    const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const url = 'http://localhost:3000/api/top';
                const response = await axios.get(url);
                setCoins(response.data.data);
            } catch (error) {
                console.error('Failed to fetch top coins:', error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchCoins();
    }, []);

    // Handle row click
    const handleRowClick = (coin, event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setPopupPosition({
            top: rect.top + rect.height / 2,
            left: rect.right + 10 // Position popup to the right of the row
        });
        setSelectedCoin(coin);
    };

    // Handle click outside to close popup
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectedCoin && !event.target.closest('.coin-popup')) {
                setSelectedCoin(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [selectedCoin]);

    if (loading) return <div className="text-white text-center font-bold">Loading Top Coins...</div>;

    return(
        <div className="max-w-6xl mx-auto mt-12 px-4 relative">
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl">
                {/* Header Section */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white mb-2">
                        Market Overview
                    </h2>
                    <p className="text-white/70">
                        Real-time cryptocurrency prices and market data 
                    </p>
                </div>

                {/* Table Container */}
                <div className="overflow-x-auto rounded-2xl">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="p-4 text-left text-white/80 font-semibold text-sm uppercase tracking-wider">
                                    Rank
                                </th>
                                <th className="p-4 text-left text-white/80 font-semibold text-sm uppercase tracking-wider">
                                    Coin
                                </th>
                                <th className="p-4 text-left text-white/80 font-semibold text-sm uppercase tracking-wider">
                                    Price
                                </th>
                                <th className="p-4 text-left text-white/80 font-semibold text-sm uppercase tracking-wider">
                                    Market Cap
                                </th>
                                <th className="p-4 text-left text-white/80 font-semibold text-sm uppercase tracking-wider">
                                    24h Change
                                </th>
                                <th className="p-4 text-left text-white/80 font-semibold text-sm uppercase tracking-wider">
                                    Volume (24h)
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {coins.map((coin, index) => (
                                <tr 
                                    key={coin.id} 
                                    className="border-b border-white/5 hover:bg-white/5 transition-all duration-300 group cursor-pointer"
                                    onClick={(event) => handleRowClick(coin, event)}
                                >
                                    {/* Rank */}
                                    <td className="p-4">
                                        <div className="flex items-center">
                                            <span className="text-white/60 font-medium text-sm">
                                                #{index + 1}
                                            </span>
                                        </div>
                                    </td>
                                    
                                    {/* Coin Info */}
                                    <td className="p-4">
                                        <div className="flex items-center space-x-3">
                                            <div>
                                                <div className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                                                    {coin.name}
                                                </div>
                                                <div className="text-white/50 text-sm uppercase">
                                                    {coin.symbol}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    
                                    {/* Price */}
                                    <td className="p-4">
                                        <div className="text-white font-bold text-lg">
                                            {Number(coin.priceUsd).toLocaleString('en-US', {
                                                style: 'currency',
                                                currency: 'USD',
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 6,
                                            })}
                                        </div>
                                    </td>
                                    
                                    {/* Market Cap */}
                                    <td className="p-4">
                                        <div className="text-white/80">
                                            {Number(coin.marketCapUsd).toLocaleString('en-US', {
                                                style: 'currency',
                                                currency: 'USD',
                                                minimumFractionDigits: 0,
                                                maximumFractionDigits: 0,
                                            })}
                                        </div>
                                    </td>
                                    
                                    {/* 24h Change */}
                                    <td className="p-4">
                                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                                            Number(coin.changePercent24Hr) >= 0 
                                                ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                                                : 'bg-red-500/20 text-red-400 border border-red-500/30'
                                        }`}>
                                            <span className="mr-1">
                                                {Number(coin.changePercent24Hr) >= 0 ? '↗' : '↘'}
                                            </span>
                                            {Math.abs(Number(coin.changePercent24Hr)).toFixed(2)}%
                                        </div>
                                    </td>
                                    
                                    {/* Volume (placeholder since not in original data) */}
                                    <td className="p-4">
                                        <div className="text-white/60">
                                            ${(Math.random() * 1000000000).toLocaleString('en-US', {
                                                minimumFractionDigits: 0,
                                                maximumFractionDigits: 0,
                                            })}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Coin Hover Card Popup */}
            {selectedCoin && (
                <div className="coin-popup">
                    <CoinHoverCard 
                        data={{
                            ...selectedCoin,
                            rank: coins.findIndex(c => c.id === selectedCoin.id) + 1
                        }} 
                        position={popupPosition} 
                    />
                </div>
            )}
        </div>
    );
}