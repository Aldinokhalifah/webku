'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const CarouselSwiper = () => {
    return (
        <Swiper
            spaceBetween={20} // Jarak antar slide
            slidesPerView={1} // Default 1 slide per view
            pagination={{ clickable: true }}
            navigation={false} // Menambahkan navigasi
            loop={true}
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={{
                delay: 3000, // Ganti slide setiap 3 detik
                disableOnInteraction: false,
            }}
            breakpoints={{
                // Responsif: jumlah slide tergantung lebar layar
                640: {
                    slidesPerView: 2, // 2 slide pada layar >640px
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3, // 3 slide pada layar >1024px
                    spaceBetween: 30,
                },
            }}
            className="w-full max-w-7xl mx-auto py-10 flex items-center"
        >
            {[
                { src: '/images/agya_promo.png', alt: 'img-1' },
                { src: '/images/calya_promo.png', alt: 'img-2' },
                { src: '/images/avanza_promo.png', alt: 'img-3' },
                { src: '/images/fortuner_promo.png', alt: 'img-4' },
                { src: '/images/rush_promo.png', alt: 'img-5' },
                // { src: '/images/zenix.jpg', alt: 'img-6' },
            ].map((image, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                    <Image
                        alt={image.alt}
                        src={image.src}
                        width={300}
                        height={200}
                        className="rounded-lg object-cover w-full max-h-[200px]"
                        style={{ maxHeight: '400px' }} // Membatasi tinggi gambar
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CarouselSwiper;
