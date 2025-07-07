import React from 'react';
import { Search, BookOpen, Volume2, Star, Globe, Zap, Users, Award } from 'lucide-react';

export default function Hero() {
    return (
        <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-40 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
            </div>
            
            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
                {/* Glassmorphism card */}
                <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 max-w-4xl w-full">
                    {/* Icon with glow effect */}
                    <div className="mb-6 relative">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full shadow-lg">
                            <BookOpen className="w-10 h-10 text-white" />
                        </div>
                        <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-lg opacity-50 mx-auto"></div>
                    </div>
                    
                    {/* Main heading */}
                    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-4">
                        Dictionary App
                    </h1>
                    
                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Kamus Bahasa Inggris Gratis & Praktis 
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                            <Volume2 className="w-4 h-4 text-purple-300" />
                            <span className="text-white/90 text-sm">Audio Pronunciation</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                            <Star className="w-4 h-4 text-yellow-300" />
                            <span className="text-white/90 text-sm">Synonyms & Antonyms</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                            <Globe className="w-4 h-4 text-blue-300" />
                            <span className="text-white/90 text-sm">Fast & Responsive</span>
                        </div>
                    </div>
                    
                    {/* CTA Button */}
                    <div className="relative inline-block">
                        <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                            <span className="flex items-center gap-2">
                                <Search className="w-5 h-5" />
                                Mulai Pencarian
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                    </div>
                </div>
                
                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}