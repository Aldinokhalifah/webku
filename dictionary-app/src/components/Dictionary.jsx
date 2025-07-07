'use client';

import React, { useState } from 'react';
import { Search, Volume2, BookOpen, AlertCircle, Play, Pause, Loader2, Hash, Quote, List, Globe } from 'lucide-react';

export default function Dictionary() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [audioPlaying, setAudioPlaying] = useState(false);

    const searchWord = async () => {
        if (!input.trim()) return;
        
        setLoading(true);
        try {
            const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error('Word not found');
            }
            
            const data = await response.json();
            setResult(data[0]);
            setError('');
        } catch (error) {
            setResult(null);
            setError(`Kata "${input}" tidak ditemukan. Periksa ejaan dan coba lagi.`);
        } finally {
            setLoading(false);
        }
    };

    const playAudio = (audioUrl) => {
        if (audioUrl) {
            const audio = new Audio(audioUrl);
            setAudioPlaying(true);
            audio.play();
            audio.onended = () => setAudioPlaying(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            searchWord();
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Search Section */}
                <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20 mb-8">
                    <div className="flex flex-col items-center text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full shadow-lg mb-4">
                            <Search className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-2">
                            Cari Kata
                        </h2>
                        <p className="text-white/70">Masukkan kata bahasa Inggris untuk melihat definisi lengkap</p>
                    </div>

                    {/* Search Input */}
                    <div className="relative max-w-2xl mx-auto">
                        <input
                            type="text"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Masukkan kata bahasa Inggris..."
                            className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                        />
                        <button
                            onClick={searchWord}
                            disabled={loading || !input.trim()}
                            className="absolute right-2 top-2 bottom-2 px-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl hover:from-purple-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center gap-2"
                        >
                            {loading ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                <Search className="w-5 h-5" />
                            )}
                            <span className="hidden sm:inline">Cari</span>
                        </button>
                    </div>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="backdrop-blur-md bg-red-500/10 border border-red-500/30 rounded-2xl p-6 mb-8">
                        <div className="flex items-center gap-3">
                            <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
                            <p className="text-red-200 text-lg">{error}</p>
                        </div>
                    </div>
                )}

                {/* Results Section */}
                {result && (
                    <div className="space-y-6">
                        {/* Word Header */}
                        <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <div className="flex-1">
                                    <h2 className="text-4xl font-bold text-white mb-2">{result.word}</h2>
                                    {result.phonetic && (
                                        <p className="text-xl text-purple-300 font-mono">/{result.phonetic}/</p>
                                    )}
                                </div>
                                
                                {/* Audio Controls */}
                                <div className="flex gap-3">
                                    {result.phonetics?.map((phonetic, idx) => (
                                        phonetic.audio && (
                                            <button
                                                key={idx}
                                                onClick={() => playAudio(phonetic.audio)}
                                                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg"
                                            >
                                                {audioPlaying ? (
                                                    <Pause className="w-5 h-5" />
                                                ) : (
                                                    <Play className="w-5 h-5" />
                                                )}
                                                <Volume2 className="w-4 h-4" />
                                                <span className="hidden sm:inline text-sm">
                                                    {phonetic.text || 'Play'}
                                                </span>
                                            </button>
                                        )
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Meanings */}
                        <div className="space-y-4">
                            {result.meanings?.map((meaning, idx) => (
                                <div key={idx} className="backdrop-blur-md bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20">
                                    {/* Part of Speech */}
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
                                            <Hash className="w-5 h-5 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white capitalize">
                                            {meaning.partOfSpeech}
                                        </h3>
                                    </div>

                                    {/* Definitions */}
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 mb-4">
                                            <List className="w-5 h-5 text-purple-300" />
                                            <h4 className="text-lg font-semibold text-white">Definisi:</h4>
                                        </div>
                                        
                                        <div className="space-y-3">
                                            {meaning.definitions?.map((def, i) => (
                                                <div key={i} className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                                                    <div className="flex items-start gap-3">
                                                        <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                                                            {i + 1}
                                                        </span>
                                                        <div className="flex-1">
                                                            <p className="text-white/90 leading-relaxed mb-2">
                                                                {def.definition}
                                                            </p>
                                                            {def.example && (
                                                                <div className="flex items-start gap-2 mt-3 p-3 bg-white/5 rounded-lg">
                                                                    <Quote className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                                                                    <p className="text-yellow-200 italic text-sm">
                                                                        "{def.example}"
                                                                    </p>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Synonyms */}
                                    {meaning.synonyms?.length > 0 && (
                                        <div className="mt-6 p-4 bg-white/5 rounded-xl">
                                            <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                                <Globe className="w-5 h-5 text-green-400" />
                                                Sinonim:
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {meaning.synonyms.slice(0, 6).map((synonym, i) => (
                                                    <span key={i} className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">
                                                        {synonym}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Antonyms */}
                                    {meaning.antonyms?.length > 0 && (
                                        <div className="mt-4 p-4 bg-white/5 rounded-xl">
                                            <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                                <Globe className="w-5 h-5 text-red-400" />
                                                Antonim:
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {meaning.antonyms.slice(0, 6).map((antonym, i) => (
                                                    <span key={i} className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm border border-red-500/30">
                                                        {antonym}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Source Information */}
                        {result.sourceUrls && (
                            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 shadow-xl border border-white/20">
                                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                    <BookOpen className="w-5 h-5 text-blue-400" />
                                    Sumber:
                                </h4>
                                <div className="space-y-2">
                                    {result.sourceUrls.map((url, idx) => (
                                        <a
                                            key={idx}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-300 hover:text-blue-200 underline decoration-blue-300/50 hover:decoration-blue-200 transition-colors duration-300 text-sm block"
                                        >
                                            {url}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Loading State */}
                {loading && (
                    <div className="backdrop-blur-md bg-white/10 rounded-3xl p-12 shadow-2xl border border-white/20">
                        <div className="flex flex-col items-center gap-4">
                            <Loader2 className="w-12 h-12 text-purple-400 animate-spin" />
                            <p className="text-white/70 text-lg">Mencari kata...</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}