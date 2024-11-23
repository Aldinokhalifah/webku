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
            spaceBetween={50}  
            slidesPerView={3}  
            pagination={{ clickable: true }}  
            loop={true}  
            modules={[Pagination, Navigation, Autoplay]} // Menambahkan Autoplay sebagai module  
            autoplay={{  
                delay: 2000, // Ganti slide setiap 2 detik  
                disableOnInteraction: false, // Slide akan terus berjalan meskipun ada interaksi  
            }}  
            className="w-[90%] bg-black py-10 flex items-center"  
        >  
            <SwiperSlide>  
                <Image   
                    alt="img-1"   
                    src="/images/agya.jpg"   
                    width={300}   
                    height={200}   
                    style={{ width: '100%', height: 'auto' }}  
                />  
            </SwiperSlide>  
            <SwiperSlide>  
                <Image   
                    alt="img-2"   
                    src="/images/calya.jpg"   
                    width={300}   
                    height={200}   
                    style={{ width: '100%', height: 'auto' }}  
                />  
            </SwiperSlide>  
            <SwiperSlide>  
                <Image   
                    alt="img-3"   
                    src="/images/avanza.jpg"   
                    width={300}   
                    height={200}   
                    style={{ width: '100%', height: 'auto' }}  
                />  
            </SwiperSlide>  
            <SwiperSlide>  
                <Image   
                    alt="img-4"   
                    src="/images/fortuner.jpg"   
                    width={300}   
                    height={200}   
                    style={{ width: '100%', height: 'auto' }}  
                />  
            </SwiperSlide>  
            <SwiperSlide>  
                <Image   
                    alt="img-5"   
                    src="/images/zenix.jpg"   
                    width={300}   
                    height={200}   
                    style={{ width: '100%', height: 'auto'}}  
                />  
            </SwiperSlide>  
        </Swiper>  
    );  
};  

export default CarouselSwiper;