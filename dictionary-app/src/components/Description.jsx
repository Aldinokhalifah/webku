import React from 'react';
import { Search, BookOpen, Volume2, Star, Globe, Zap, Users, Award } from 'lucide-react';

export default function Description() {

    const features = [
        {
            id: 1,
            icon: <Search className="w-6 h-6" />,
            title: "Pencarian Cepat",
            description: "Temukan definisi kata dalam hitungan detik dengan algoritma pencarian yang optimal."
        },
        {
            id: 2,
            icon: <Volume2 className="w-6 h-6" />,
            title: "Audio Pronunciation",
            description: "Dengarkan cara pengucapan yang benar dengan audio berkualitas tinggi."
        },
        {
            id: 3,
            icon: <Star className="w-6 h-6" />,
            title: "Sinonim & Antonim",
            description: "Perluas kosakata dengan daftar sinonim dan antonim yang lengkap."
        },
    ];

    const stats = [
        { id: 1,icon: <BookOpen className="w-8 h-8" />, value: "500K+", label: "Kata dalam Database" },
        { id: 2,icon: <Award className="w-8 h-8" />, value: "99.9%", label: "Tingkat Akurasi" },
        { id: 3,icon: <Zap className="w-8 h-8" />, value: "<1s", label: "Waktu Respons" }
    ];

    return (
        <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Main description card */}
                <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 mb-12">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6">
                            Tentang Dictionary App
                        </h2>
                        <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                            Dictionary App adalah solusi modern untuk pembelajaran bahasa Inggris yang memiliki desain antarmuka yang elegan dan user-friendly.
                        </p>
                    </div>
                    
                    {/* Features grid */}
                    <div className="flex flex-col md:flex-row gap-6 mb-12 justify-center items-center">
                        {features.map((feature, index) => (
                            <div key={index} className="group backdrop-blur-sm bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                                        <p className="text-white/70">{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Stats section */}
                    <div className="flex flex-col md:flex-row justify-center items-center mb-8 gap-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center p-4 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 w-full">
                                <div className="text-purple-300 flex justify-center mb-2">
                                    {stat.icon}
                                </div>
                                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-sm text-white/60">{stat.label}</div>                                
                            </div>
                        ))}
                    </div>

                </div>
                
                {/* Additional decorative elements */}
                <div className="relative">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
                </div>
            </div>
        </section>
    );
}