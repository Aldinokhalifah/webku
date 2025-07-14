import { useState, useEffect } from 'react';

export default function SubHeading() {
    const [isVisible, setIsVisible] = useState(false);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    
    const highlightWords = ['cryptocurrencies', 'real-time', 'instant'];
    
    useEffect(() => {
        setIsVisible(true);
        
        const interval = setInterval(() => {
            setCurrentWordIndex((prev) => (prev + 1) % highlightWords.length);
        }, 3000);
        
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative py-32 text-center overflow-hidden">
            
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
                <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-40"></div>
                <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse opacity-50"></div>
                <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-bounce opacity-30"></div>
            </div>
            
            {/* Main content */}
            <div className={`relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="relative inline-block mb-8">
                    <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
                        Instantly convert between{' '}
                        <span className="relative inline-block">
                            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
                                cryptocurrencies
                            </span>
                            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transform scale-x-0 animate-pulse"></div>
                        </span>
                    </h1>
                    
                    {/* Decorative elements */}
                    <div className="absolute -top-6 -right-6 w-12 h-12 border-2 border-purple-400/30 rounded-full animate-spin"></div>
                    <div className="absolute -bottom-4 -left-4 w-8 h-8 border-2 border-blue-400/30 rounded-lg animate-pulse"></div>
                </div>
                
                <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Type the coin name, enter the amount, and get the{' '}
                        <span className="relative inline-block">
                            <span className="text-emerald-400 font-semibold">accurate conversion</span>
                            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-400 rounded-full animate-pulse"></div>
                        </span>
                        {' '}—{' '}
                    </p>
                </div>
                
                {/* Call to action hint */}
                <div className={`mt-12 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-400">Real-time rates active</span>
                    </div>
                </div>
            </div>
        </div>
    );
}