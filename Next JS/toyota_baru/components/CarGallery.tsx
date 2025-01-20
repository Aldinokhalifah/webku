import Image from 'next/image'
import Button from './ui/Button'

const cars = [
    { id: 1, name: 'Agya', image: '/img/agya.png', text: '178.400.000' },
    { id: 2, name: 'Avanza', image: '/img/avanza.png', text: '239.700.000' },
    { id: 3, name: 'Hatchback Sporty', image: '/placeholder.svg?height=200&width=300' },
    { id: 4, name: 'MPV Keluarga', image: '/placeholder.svg?height=200&width=300' },
    { id: 5, name: 'Sport Mewah', image: '/placeholder.svg?height=200&width=300' },
    { id: 6, name: 'Limosin', image: '/placeholder.svg?height=200&width=300' },
]

export default function CarGallery() {
    return (
        <section id="mobil" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Pilihan Mobil Terbaik</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {cars.map((car, index) => (
                    <div key={car.id} className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:shadow-slate-300" data-aos="fade-up" data-aos-delay={index * 100}>
                        <Image src={car.image || "/placeholder.svg"} alt={car.name} width={300} height={200} className="w-full hover:scale-105 transition-all duration-700" />
                        <div className="p-4 text-center md:text-left">
                            <h3 className="text-lg md:text-xl font-semibold mb-2 text-blue-900">{car.name}</h3>
                            <p className="text-base md:text-lg text-gray-600 font-bold">{ car.text || 'Kualitas terbaik dengan harga bersaing'}</p>
                            <span className="text-sm text-slate-500">Kualitas terbaik dengan harga bersaing</span>
                        </div>
                        <Button variant="primary" size="md" className="bg-white text-blue-900 hover:bg-gray-300 shadow-lg mx-auto mb-4 font-semibold">
                            Hubungi Saya
                        </Button>
                    </div>
                ))}
            </div>
        </div>
        </section>
    )
}

