import { Bitcoin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {

    return(
        <footer className="mt-20 px-4 pb-8 ">
            <div className="max-w-7xl mx-auto">
                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                        <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
                            <Bitcoin className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-xl font-bold text-white">Crypto Tracker</span>
                        </div>
                        <p className="text-white/70 text-sm">
                        Your trusted companion for tracking cryptocurrency prices and market trends.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Navigation</h3>
                        <div className="flex flex-col space-y-2">
                        <Link to='/'
                            className="text-white/70 hover:text-white transition-all duration-300 text-sm"
                        >
                            Home
                        </Link>
                        <Link to='/price'
                            className="text-white/70 hover:text-white transition-all duration-300 text-sm"
                        >
                            Price
                        </Link>
                        <Link to=''
                            className="text-white/70 hover:text-white transition-all duration-300 text-sm"
                        >
                            Converter
                        </Link>
                        </div>
                    </div>

                    {/* Developer Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Developer</h3>
                        <div className="space-y-2">
                        <p className="text-white/60 font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
                            Aldino Khalifah
                        </p>
                        </div>
                    </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="mt-8 pt-6 border-t border-white/20">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-white/60 text-sm">
                        © {new Date().getFullYear()} Crypto Tracker. All rights reserved.
                        </p>
                        <div className="flex items-center justify-center flex-col md:flex-row space-x-4 text-white/60 text-sm">
                            <span>Made with React & Tailwind CSS</span>
                            <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                            <span>Aldino Khalifah</span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}