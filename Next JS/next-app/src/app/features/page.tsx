'use client';
import Image from "next/image";
import * as React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react';

import Navbar from "@/components/navbar";

export default function FeaturesPage() {
    interface ImageData {
        id: string;
        urls: {
            small: string;
            regular: string;
            full: string;
        };
        alt_description: string;
    };

    const [images, setImages] = useState<ImageData[]>([]);

    useEffect(() => {
        // Replace 'YOUR_ACCESS_KEY' with your actual Unsplash API Access Key
        const fetchImages = async () => {
            try {
                const response = await axios.get('https://api.unsplash.com/search/photos', {
                    params: { query: 'clothing', per_page: 1 },
                    headers: {
                        Authorization: `Client-ID f432jygEoEW5U_Hz7p4dw-DsH73VU472gkeWI6-rFsk`,
                    },
                });
                setImages(response.data.results);
            } catch (error) {
                console.error('Error fetching data from Unsplash:', error);
            }
        };

        fetchImages();
    }, []);

    return (
        <>
            <Navbar />
            <div id="default-carousel" className="relative w-full" data-carousel="slide">
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {/* Display Unsplash images */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        {images.map((image) => (
                            <div key={image.id}>
                                <Image
                                    src={image.urls.small}
                                    alt={image.alt_description}
                                    width={500}
                                    height={300}
                                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                />
                            </div>
                        ))}
                    </div>
                    {/* Static images */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        {images.map((image) => (
                            <div key={image.id}>
                                <Image
                                    src={image.urls.small}
                                    alt={image.alt_description}
                                    width={500}
                                    height={300}
                                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        {images.map((image) => (
                            <div key={image.id}>
                                <Image
                                    src={image.urls.small}
                                    alt={image.alt_description}
                                    width={500}
                                    height={300}
                                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        {images.map((image) => (
                            <div key={image.id}>
                                <Image
                                    src={image.urls.small}
                                    alt={image.alt_description}
                                    width={500}
                                    height={300}
                                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        {images.map((image) => (
                            <div key={image.id}>
                                <Image
                                    src={image.urls.small}
                                    alt={image.alt_description}
                                    width={500}
                                    height={300}
                                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                </div>
                <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </>
    );
}