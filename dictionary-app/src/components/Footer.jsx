import React from 'react';
import { Github, Linkedin, Mail, BookOpen, Globe } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16 pb-8">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 left-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4">
                {/* Main Footer Content */}
                <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 mb-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Brand Section */}
                        <div className="md:col-span-1">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg">
                                    <BookOpen className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                                    Dictionary App
                                </h3>
                            </div>
                            <p className="text-white/70 leading-relaxed mb-4">
                                Kamus Bahasa Inggris modern dengan desain yang elegan dan fitur lengkap untuk membantu pembelajaran bahasa Inggris.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="md:col-span-1">
                            <h4 className="text-lg font-semibold text-white mb-4">Fitur Utama</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                    <span>Pencarian Cepat</span>
                                </li>
                                <li className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                    <span>Audio Pronunciation</span>
                                </li>
                                <li className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    <span>Sinonim & Antonim</span>
                                </li>
                                <li className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300">
                                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                    <span>Contoh Kalimat</span>
                                </li>
                            </ul>
                        </div>

                        {/* Developer Info */}
                        <div className="md:col-span-1">
                            <h4 className="text-lg font-semibold text-white mb-4">Developer</h4>
                            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white font-semibold">
                                        AK
                                    </div>
                                    <div>
                                        <h5 className="font-semibold text-white">Aldino Khalifah</h5>
                                        <p className="text-sm text-white/60">Full Stack Developer</p>
                                    </div>
                                </div>
                                
                                {/* Social Links */}
                                <div className="flex gap-2">
                                    <a href="https://github.com/Aldinokhalifah" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300 group">
                                        <Github className="w-4 h-4 text-white/70 group-hover:text-white" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/aldino-khalifah" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300 group">
                                        <Linkedin className="w-4 h-4 text-white/70 group-hover:text-white" />
                                    </a>
                                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtDmBvjrTzKGrZkWxRPwZPgMkqtgGLHSvrSnJPzWtfqwcbRxNWNbJpPtVkDtrvzGGvShRbPl" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300 group">
                                        <Mail className="w-4 h-4 text-white/70 group-hover:text-white" />
                                    </a>
                                    <a href="https://portfolio-aldino.vercel.app/" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300 group">
                                        <Globe className="w-4 h-4 text-white/70 group-hover:text-white" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

               {/* Bottom Copyright Bar */}
                <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-4 sm:p-6 border border-white/10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                        {/* Copyright Section */}
                        <div className="flex flex-col sm:flex-row items-center gap-2 text-white/70 text-center sm:text-left">
                            <div className="flex items-center gap-2">
                                <span className="text-sm sm:text-base">© {currentYear} Dictionary App.</span>
                                <span className="hidden sm:inline">•</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm sm:text-base">Dibuat </span>
                                <span className="text-sm sm:text-base">oleh</span>
                                <span className="font-semibold text-white text-sm sm:text-base">Aldino Khalifah</span>
                            </div>
                        </div>
                        
                        {/* Tech & Links Section */}
                        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs sm:text-sm text-white/60">
                            <a 
                                href="https://dictionaryapi.dev/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="hover:text-white/80 transition-colors duration-300 underline decoration-white/30 hover:decoration-white/60"
                            >
                                API Reference
                            </a>
                            <span className="hidden sm:inline">•</span>
                            <span className="text-center">Made with Next & Tailwind CSS</span>
                        </div>
                    </div>
                </div>

                {/* Decorative Bottom Element */}
                <div className="flex justify-center mt-8">
                    <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
                </div>
            </div>
        </footer>
    );
}