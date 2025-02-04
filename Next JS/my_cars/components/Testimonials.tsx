'use client'

import { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Button from './ui/Button'

const testimonials = [
    {
        id: 1,
        name: 'Reza',
        comment: 'Pelayanan Aldino sangat memuaskan. Ia membantu saya menemukan mobil yang sesuai dengan kebutuhan dan budget.',
        image: '/placeholder.svg?height=100&width=100'
    },
    {
        id: 2,
        name: 'Ahmad',
        comment: 'Proses pembelian mobil jadi mudah dan cepat berkat bantuan Aldino. Terima kasih atas pelayanan yang luar biasa!',
    },
    {
        id: 3,
        name: 'Devita',
        comment: 'Aldino memberikan saran yang sangat membantu dalam memilih mobil untuk keluarga saya. Sangat direkomendasikan!',
    },
    {
        id: 4,
        name: 'Lutfi',
        comment: 'Saya sangat puas dengan layanan Aldino. Dia sangat profesional dan memahami kebutuhan pelanggan dengan baik.',
    },
    {
        id: 5,
        name: 'Budi',
        comment: 'Aldino membantu saya mendapatkan penawaran terbaik untuk mobil impian saya. Proses pembelian sangat lancar.',
    },
    {
        id: 6,
        name: 'Dewi',
        comment: 'Pelayanan after-sales dari Aldino luar biasa. Dia selalu siap membantu bahkan setelah pembelian selesai.',
    },
    {
        id: 7,
        name: 'Hendra',
        comment: 'Aldino sangat knowledgeable tentang berbagai model Toyota. Dia membantu saya membuat keputusan yang tepat.',
    },
    {
        id: 8,
        name: 'Rina Fitriani',
        comment: 'Saya sangat merekomendasikan Aldino kepada siapa pun yang ingin membeli mobil Toyota. Pelayanan terbaik!',
    }
]

export default function Testimonials() {
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
        <section id="testimoni" className="py-12 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-blue-900">Apa Kata Mereka</h2>
            <div className="relative" data-aos="fade-up">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4 mx-auto">
                    <div className="bg-white p-6 rounded-lg shadow-md h-full">
                        <div className="flex items-center mb-4">
                        <h3 className="text-lg md:text-xl font-semibold text-blue-900">{testimonial.name}</h3>
                        </div>
                        <p className="text-sm md:text-base text-gray-600">{testimonial.comment}</p>
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
        </div>
        </section>
    )
}

