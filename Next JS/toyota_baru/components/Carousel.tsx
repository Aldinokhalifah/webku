'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Button from './ui/Button'

const carouselItems = [
    { id: 1, image: '/img/agya_promo.png', alt: 'Diskon Besar ', text: 'Diskon 10% untuk Sedan Mewah' },
    { id: 2, image: '/img/avanza_promo.png', alt: 'Promo SUV Tangguh', text: 'Promo Spesial SUV Tangguh' },
    { id: 3, image: '/img/calya_promo.png', alt: 'Harga Spesial LCGC', text: 'Harga Spesial untuk LCGC' },
    { id: 4, image: '/img/fortuner_promo.png', alt: 'Promo Fortuner', text: 'Promo Spesial untuk Fortuner' },
    { id: 5, image: '/img/rush_promo.png', alt: 'Harga Spesial MPV', text: 'Harga Spesial untuk MPV Keluarga' },
]

export default function Carousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
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
        <div className="relative" data-aos="fade-up">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {carouselItems.map((item) => (
                        <div key={item.id} className="flex-[0_0_100%] min-w-0 relative">
                                <Image
                                    src={item.image || "/placeholder.svg"}
                                    alt={item.alt}
                                    width={800}
                                    height={400}
                                    className="w-full object-cover"
                                />
                            <div className="absolute bottom-0 left-0 right-0 bg-blue-300 bg-opacity-50 text-blue-900 p-2 lg:p-4">
                                <p className="text-sm lg:text-xl font-semibold">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75"
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
            >
                <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75"
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
            >
                <ChevronRight className="h-4 w-4" />
            </Button>
        </div>
    )
}