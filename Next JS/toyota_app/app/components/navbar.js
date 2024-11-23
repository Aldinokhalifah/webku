"use client";

import { useState } from "react";
import { Phone, User, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
const [isMenuOpen, setIsMenuOpen] = useState(false);

return (
    <nav className="w-full shadow-lg shadow-indigo-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 bg-indigo-700">
            <div className="flex items-center justify-between h-16">
            {/* User Info */}
            <div className="flex items-center">
                <User className="h-8 w-8 text-white" />
                <div className="hidden md:block ml-3">
                <div className="text-base font-bold text-white">Rangga Toyota</div>
                <div className="flex items-center text-sm text-gray-300">
                    <Phone className="h-4 w-4 mr-1 text-white" />
                    <span className="text-white">+62 819 9400 7734</span>
                </div>
                </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
                <Link
                href="#"
                className="text-base font-medium text-white bg-black px-4 py-2 rounded-md shadow-lg flex items-center gap-1 transition-all duration-300 hover:bg-gray-800"
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-indigo-700">
                {/* User Info */}
                <div className="text-base font-bold text-white block px-3 py-2">
                Rangga Toyota
                </div>
                <div className="flex items-center text-sm text-gray-300 px-3 py-2">
                <Phone className="h-4 w-4 mr-1 text-white" />
                <span className="text-white">+62 819 9400 7734</span>
                </div>

                {/* Contact Us Button */}
                <Link
                href="#"
                className="w-full text-center bg-black text-white rounded-md px-4 py-2 mt-4 flex items-center gap-1 justify-center transition-all duration-300 hover:bg-gray-800 hover:outline hover:outline-gray-800"
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
