import  { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bitcoin } from 'lucide-react';

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation(); // dapatkan lokasi saat ini

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Helper untuk menentukan apakah link aktif
    const isActive = (path) => location.pathname === path;

    return(
        <>
            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
                <div className="max-w-7xl mx-auto">
                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-6 py-4 shadow-2xl">
                    <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
                        <Bitcoin className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-xl font-bold text-white">Crypto Tracker</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to='/'
                        className={`text-white/90 transition-all duration-300 font-medium relative group ${
                            isActive('/') ? 'text-white font-bold' : 'hover:text-white'
                        }`}
                        >
                        Home
                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 ${
                            isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}></span>
                        </Link>
                        <Link to='/price'
                        className={`text-white/90 transition-all duration-300 font-medium relative group ${
                            isActive('/price') ? 'text-white font-bold' : 'hover:text-white'
                        }`}
                        >
                        Price
                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 ${
                            isActive('/price') ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}></span>
                        </Link>
                        <Link to='/converter'
                        className={`text-white/90 transition-all duration-300 font-medium relative group ${
                            isActive('/converter') ? 'text-white font-bold' : 'hover:text-white'
                        }`}
                        >
                        Converter
                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 ${
                            isActive('/converter') ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}></span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
                    >
                        {isMenuOpen ? (
                        <X className="h-6 w-6 text-white" />
                        ) : (
                        <Menu className="h-6 w-6 text-white" />
                        )}
                    </button>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`md:hidden overflow-hidden transition-all duration-300 ${
                    isMenuOpen ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="flex flex-col space-y-4 pt-4 border-t border-white/20">
                        <Link to='/'
                        className={`text-white/90 hover:text-white transition-all duration-300 font-medium hover:bg-white/10 px-4 py-2 rounded-lg ${
                            isActive('/') ? 'bg-white/10 ' : ''
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                        >
                        Home
                        </Link>
                        <Link to='/price'
                        className={`text-white/90 hover:text-white transition-all duration-300 font-medium hover:bg-white/10 px-4 py-2 rounded-lg ${
                            isActive('/price') ? 'bg-white/10 ' : ''
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                        >
                        Price
                        </Link>
                        <Link to='/converter'
                        className={`text-white/90 hover:text-white transition-all duration-300 font-medium hover:bg-white/10 px-4 py-2 rounded-lg ${
                            isActive('/converter') ? 'bg-white/10 ' : ''
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                        >
                        Converter
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
            </nav>
        </>
    );
}