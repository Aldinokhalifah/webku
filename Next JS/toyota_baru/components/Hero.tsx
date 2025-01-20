import Button from './ui/Button'

export default function Hero() {
    return (
        <section id="tentang" className="py-12 md:py-20 bg-blue-900 text-white">
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
                        <Button variant="primary" size="lg" className="bg-white text-blue-900 hover:bg-gray-300  shadow-lg">
                            Hubungi Saya
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

