"use client";

import { useState } from "react";
import { Phone, User, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
const [isMenuOpen, setIsMenuOpen] = useState(false);

return (
    <nav className="w-full shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 bg-gradient-to-r from-teal-400 to-blue-500 py-4">
            <div className="flex items-center justify-between h-16">
            {/* User Info */}
            <div className="flex items-center">
                <User className="h-8 w-8 text-black" />
                <div className="hidden md:block ml-3">
                <div className="text-base font-bold text-black">Rangga Toyota</div>
                <div className="flex items-center text-sm text-gray-300">
                    <Phone className="h-4 w-4 mr-1 text-black" />
                    <span className="text-black">+62 819 9400 7734</span>
                </div>
                </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center gap-1">
                <Link
                href="#"
                className="text-base font-medium text-white bg-red-700 shadow-red-700 px-4 py-2 rounded-md shadow-md flex items-center gap-2 transition-all duration-300 hover:bg-red-800"
                >
                <Phone className="h-4 w-4 text-white shadow-lg" />
                Contact Us
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white"
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
                >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>
            </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
            <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-r from-teal-400 to-blue-500">
                {/* User Info */}
                <div className="text-base font-bold text-black block px-3 py-2">
                Rangga Toyota
                </div>
                <div className="flex items-center text-sm text-gray-300 px-3 py-2">
                <Phone className="h-4 w-4 mr-1 text-black" />
                <span className="text-black">+62 819 9400 7734</span>
                </div>

                {/* Contact Us Button */}
                <Link
                href="#"
                className="w-full text-center bg-red-700 shadow-md shadow-red-700 text-white rounded-md px-4 py-2 mt-4 flex items-center gap-2 justify-center transition-all duration-300 hover:bg-red-800 hover:outline hover:outline-gray-800"
                >
                <Phone className="h-4 w-4 text-white shadow-lg" />
                Contact Us
                </Link>
            </div>
            </div>
        )}
    </nav>
);
}
