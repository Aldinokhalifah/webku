'use client'

import Image from 'next/image'
import Button from './ui/Button'


const cars = [
    { id: 1, name: 'Agya', image: '/img/agya.png', text: '178.400.000' },
    { id: 2, name: 'Avanza', image: '/img/avanza.png', text: '239.700.000' },
    { id: 3, name: 'Fortuner', image: '/img/fortuner.png', text: '663.200.000' },
    { id: 4, name: 'Zenix', image: '/img/zenix.png', text: '430.400.000'},
    { id: 5, name: 'Rush', image: '/img/rush.png', text: '284.400.000' },
    { id: 6, name: 'Calya', image: '/img/calya.png', text: '170.200.000' },
]

export default function CarGallery() {

    function kirimPesan()  {
        const url = 'https://wa.me/6281382039103?text=Halo%20Aldino%20saya%20tertarik%20dengan%20mobil%20yang%20Anda%20jual';
        window.open(url, '_blank');
    }

    return (
        <section id="mobil" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-blue-900">Pilihan Mobil Terbaik</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 justify-items-center">
                {cars.map((car, index) => (
                    <div 
                        key={car.id} 
                        className="w-full max-w-sm relative flex flex-col rounded-xl bg-gradient-to-br from-white to-gray-50 bg-clip-border text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        data-aos="fade-up" 
                        data-aos-delay={index * 100}
                        >
                        <div className="relative mx-4 -mt-6 h-48 overflow-hidden rounded-xl bg-clip-border shadow-lg group">
                            <Image 
                                src={car.image || "/placeholder.svg"} 
                                alt={car.name} 
                                fill
                                className="object-cover transition-transform duration-300 transform scale-100 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-6">
                            <div className="mb-2">
                                <span className="rounded-full px-3 py-1 bg-blue-400/10 text-blue-500 text-sm">
                                    Tersedia
                                </span>
                            </div>
                            <h3 className="mb-2 font-sans text-xl font-semibold leading-snug text-gray-900">
                                {car.name}
                            </h3>
                            <p className="font-sans text-base font-light leading-relaxed text-gray-700">
                                {car.text || 'Kualitas terbaik dengan harga bersaing'}
                            </p>
                        </div>
                        <div className="p-6 pt-0">
                            <Button 
                                onClick={kirimPesan}
                                variant="primary"
                                size="md"
                                className="group relative w-full inline-flex items-center justify-center px-6 py-3 font-bold text-white rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5"
                            >
                                <span className="relative flex items-center gap-2">
                                    Hubungi Saya
                                    <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-5 h-5 transform transition-transform group-hover:translate-x-1">
                                        <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
                                    </svg>
                                </span>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </section>
    )
}

