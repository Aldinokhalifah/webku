'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Instagram, Youtube, Phone, Music } from 'lucide-react'
import Button from './ui/Button'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="bg-blue-900 shadow-sm">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-white">Rangga Toyota</Link>
                <div className="md:hidden">
                    <Button variant="outline" size="icon" className="text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X /> : <Menu />}
                    </Button>
                </div>
                <ul className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:space-x-4 absolute md:relative top-16 md:top-0 left-0 right-0 bg-blue-950 md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 z-20`}>
                    <li><Link href="#instagram" className="block py-2 md:py-0 text-white hover:text-red-500">
                    <div className="group flex relative">
                        <p className='text-sm  absolute -top-6 left-1/2 transform -translate-x-1/2 hidden group-hover:block  text-red-500  rounded-lg transition-all duration-700 shadow-sm'>Instagram</p>
                        <Instagram className="w-6 h-6 md:w-5 md:h-5" />
                    </div>
                    </Link></li>
                    <li><Link href="#Youtube" className="block py-2 md:py-0 text-white hover:text-red-500">
                    <div className="group flex relative">
                        <p className='text-sm  absolute -top-6 left-1/2 transform -translate-x-1/2 hidden group-hover:block  text-red-500  rounded-lg transition-all duration-700 shadow-sm'>Youtube</p>
                        <Youtube className="w-6 h-6 md:w-5 md:h-5" />
                    </div>
                    </Link></li>
                    <li><Link href="#WhatsApp" className="block py-2 md:py-0 text-white hover:text-red-500">
                    <div className="group flex relative">
                        <p className='text-sm  absolute -top-6 left-1/2 transform -translate-x-1/2 hidden group-hover:block  text-red-500  rounded-lg transition-all duration-700 shadow-sm'>WhatsApp</p>
                        <Phone className="w-6 h-6 md:w-5 md:h-5" />
                    </div>
                    </Link></li>
                    <li><Link href="#Tiktok" className="block py-2 md:py-0 text-white hover:text-red-500">
                    <div className="group flex relative">
                        <p className='text-sm  absolute -top-6 left-1/2 transform -translate-x-1/2 hidden group-hover:block  text-red-500  rounded-lg transition-all duration-700 shadow-sm'>Tiktok</p>
                        <Music className="w-6 h-6 md:w-5 md:h-5" />
                    </div>
                    </Link></li>
                </ul>
            </nav>
        </header>
    )
}
