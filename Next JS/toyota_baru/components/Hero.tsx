'use client'

import Button from './ui/Button'

export default function Hero() {

    function kirimPesan()  {
        const url = 'https://wa.me/6281994007734?text=Halo%20Rangga%20Toyota%2C%20saya%20tertarik%20dengan%20mobil%20yang%20Anda%20jual';
        window.open(url, '_blank');
    }

    return (
        <section id="tentang" className="py-12 md:py-20 text-white bg-blue-900">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Rangga Toyota - Sales Mobil Profesional</h1>
                    <p className="text-lg md:text-xl mb-8">Membantu Anda menemukan mobil impian dengan pelayanan terbaik dan harga kompetitif</p>
                    <div className="flex gap-4 md:gap-8 flex-col md:flex-row items-center justify-center">
                        <ul className="text-left mb-8 inline-block">
                            <li className="mb-2 text-sm md:text-base">✓ Konsultasi gratis sesuai kebutuhan Anda</li>
                            <li className="mb-2 text-sm md:text-base">✓ Penawaran khusus dan diskon menarik</li>
                            <li className="mb-2 text-sm md:text-base">✓ Proses cepat dan mudah</li>
                            <li className="text-sm md:text-base">✓ Layanan purna jual terpercaya</li>
                        </ul>
                        <Button onClick={kirimPesan} variant="primary" size="lg" className="bg-white text-blue-900 hover:bg-gray-300  shadow-lg">
                            Hubungi Saya
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

