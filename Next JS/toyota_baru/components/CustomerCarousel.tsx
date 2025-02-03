'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Button from './ui/Button'

const customerPhotos = [
    { id: 1, image: '/img/foto_cus1.jpg', alt: 'Pelanggan 1 dengan Sales', caption: 'Pak Sidik dengan Pelanggan Puas' },
    { id: 2, image: '/img/foto_cus2.jpg', alt: 'Pelanggan 2 dengan Sales', caption: 'Transaksi Sukses dengan Pak Fendy' },
    { id: 3, image: '/img/foto_cus3.jpg', alt: 'Pelanggan 3 dengan Sales', caption: 'Keluarga Bahagia dengan Mobil Baru' },
    { id: 4, image: '/img/foto_cus4.jpg', alt: 'Pelanggan 4 dengan Sales', caption: 'Bu Lutfi Menerima Kunci Mobil' },
    { id: 5, image: '/img/foto_cus1.jpg', alt: 'Pelanggan 5 dengan Sales', caption: 'Pak Rusdi Senang Dengan Mobilnya' },
    { id: 6, image: '/img/foto_cus2.jpg', alt: 'Pelanggan 6 dengan Sales', caption: 'Pak Akbar Semoga Sukses' },
]

export default function CustomerCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setPrevBtnEnabled(emblaApi.canScrollPrev())
        setNextBtnEnabled(emblaApi.canScrollNext())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on('select', onSelect)
        
        const autoplay = setInterval(() => {
        emblaApi.scrollNext()
        }, 2000)

        return () => {
        clearInterval(autoplay)
        emblaApi.off('select', onSelect)
        }
    }, [emblaApi, onSelect])

    return (
        <div className="relative py-12 md:py-20 bg-gray-100" data-aos="fade-up">
        <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-blue-900">Pelanggan Kami yang Puas</h2>
            <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
                {customerPhotos.map((photo) => (
                <div key={photo.id} className="flex-[0_0_50%] min-w-0 sm:flex-[0_0_33.33%] md:flex-[0_0_25%] px-2 mx-auto">
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <Image
                            src={photo.image || "/placeholder.svg"}
                            alt={photo.alt}
                            width={300}
                            height={300}
                            className="w-full h-48 lg:h-72  object-cover"
                        />
                        <div className="p-4">
                            <p className="text-sm text-gray-600">{photo.caption}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
            <div className="flex justify-center mt-4">
            <Button
                variant="outline"
                size="icon"
                className="mr-2"
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
            >
                <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
                variant="outline"
                size="icon"
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
            >
                <ChevronRight className="h-4 w-4" />
            </Button>
            </div>
        </div>
        </div>
    )
}

