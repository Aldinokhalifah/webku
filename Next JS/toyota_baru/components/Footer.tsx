'use client'

import Image from 'next/image'

export default function Footer() {

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
        <footer className="bg-blue-900 text-white py-8">
            <div className="container mx-auto px-4"></div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Logo Section */}
                <div className="flex flex-col items-center md:items-start ml-1">
                    <Image
                        src={"/img/tunas_toyota2.png"}
                        alt="Tunas Toyota"
                        width={200}
                        height={50}
                        className='bg-white p-2 rounded-full'
                    />
                </div>

                {/* Contact Information */}
                <div className="flex flex-col gap-3 text-center md:text-left">
                <h3 className="font-bold text-lg">Contact Us</h3>
                <a href="" onClick={kirimPesan} className="hover:text-gray-300 flex items-center justify-center md:justify-start gap-2">
                    <i className="fab fa-whatsapp"></i>
                    +62 819-9400-7734
                </a>
                <a href="" onClick={ContactButton} className="hover:text-gray-300 flex items-center justify-center md:justify-start gap-2">
                    <i className="far fa-envelope"></i>
                    ranggacars20@gmail.com
                </a>
                <a href="https://www.instagram.com/rangga_toyota20?igsh=M3NpMThyNzFwNnc1" className="hover:text-gray-300 flex items-center justify-center md:justify-start gap-2">
                    <i className="fab fa-instagram"></i>
                    @rangga_toyota20
                </a>
                </div>

                {/* Location */}
                <div className="w-full md:w-1/3">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63467.9582650488!2d106.78321594753318!3d-6.164574499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5e38ed917d7%3A0xdc95f7ac5e8fdfdc!2sTunas%20Toyota%20Pecenongan!5e0!3m2!1sid!2sid!4v1738543603660!5m2!1sid!2sid" 
                width="70%" 
                height="200" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className='rounded-lg shadow-xl mx-auto'
                ></iframe>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-6 pt-6 border-t border-blue-800">
                <p className="text-sm md:text-base font-bold">&copy; {new Date().getFullYear()} Rangga Toyota - Sales Mobil Profesional. All rights reserved.</p>
            </div>
        </footer>
    )
}