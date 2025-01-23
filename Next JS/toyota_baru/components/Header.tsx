'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Instagram, Youtube, Phone, Mail } from 'lucide-react'
import Button from './ui/Button'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function kirimPesan()  {
        const url = 'https://wa.me/6281994007734?text=Halo%20Rangga%20Toyota%2C%20saya%20tertarik%20dengan%20mobil%20yang%20Anda%20jual';
        window.open(url, '_blank');
    }

    const ContactButton = () => {
        const emailAddress = 'ranggacars20@gmail.com'; // Ganti dengan alamat email tujuan
        const subject = 'Halo Rangga Toyota'; // Tambahkan subjek jika diinginkan
        const body = 'Rangga Toyota saya tertarik dengan mobil yang anda jual.'; // Tambahkan isi pesan jika diinginkan

        const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailURL, '_blank'); // Buka email client
    }
    
    return (
        <header className="bg-blue-900 shadow-sm">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-white">Rangga Toyota</Link>
                <div className="md:hidden">
                    <Button variant="outline" size="icon" className="text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X /> : <Menu />}
                    </Button>
                </div>
                <ul className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:space-x-4 absolute md:relative top-16 md:top-0 left-0 right-0 bg-blue-950 md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 z-20 gap-1`}>
                    <li><Link href="https://www.instagram.com/rangga_toyota20?igsh=M3NpMThyNzFwNnc1" className="block py-2 md:py-0 text-white hover:text-red-500">
                    <div className="group flex relative">
                        <p className='text-sm  absolute -top-6 left-1/2 transform -translate-x-1/2 hidden lg:group-hover:block  text-red-500  rounded-lg transition-all duration-700 shadow-sm'>Instagram</p>
                        <Instagram className="w-6 h-6 md:w-5 md:h-5" />
                    </div>
                    </Link></li>
                    <li><Link href="#Youtube" className="block py-2 md:py-0 text-white hover:text-red-500">
                    <div className="group flex relative">
                        <p className='text-sm  absolute -top-6 left-1/2 transform -translate-x-1/2 hidden lg:group-hover:block  text-red-500  rounded-lg transition-all duration-700 shadow-sm'>Youtube</p>
                        <Youtube className="w-6 h-6 md:w-5 md:h-5" />
                    </div>
                    </Link></li>
                    <li><Link href="#" className="block py-2 md:py-0 text-white hover:text-red-500">
                    <div className="group flex relative" onClick={kirimPesan}>
                        <p className='text-sm  absolute -top-6 left-1/2 transform -translate-x-1/2 hidden lg:group-hover:block  text-red-500  rounded-lg transition-all duration-700 shadow-sm'>WhatsApp</p>
                        <Phone className="w-6 h-6 md:w-5 md:h-5" />
                    </div>
                    </Link></li>
                    <li><Link href="#" onClick={ContactButton} className="block py-2 md:py-0 text-white hover:text-red-500">
                    <div className="group flex relative">
                        <p className='text-sm  absolute -top-6 left-1/2 transform -translate-x-1/2 hidden lg:group-hover:block  text-red-500  rounded-lg transition-all duration-700 shadow-sm'>Email</p>
                        <Mail className="w-6 h-6 md:w-5 md:h-5" />
                    </div>
                    </Link></li>
                </ul>
            </nav>
        </header>
    )
}
