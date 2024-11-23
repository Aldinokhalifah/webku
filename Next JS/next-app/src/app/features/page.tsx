'use client';

import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import axios from 'axios';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { useState, useEffect } from 'react';

interface ImageData {
  id: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  alt_description: string;
}

export default function Features() {
  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    // Replace 'YOUR_ACCESS_KEY' with your actual Unsplash API Access Key
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/photos/random', {
          params: {
            query: 'clothing', // Ganti dengan tema yang diinginkan
            count: 5, // Jumlah gambar random yang ingin diambil
          },
          headers: {
            Authorization: `Client-ID f432jygEoEW5U_Hz7p4dw-DsH73VU472gkeWI6-rFsk`,
          },
        });

        setImages(Array.isArray(response.data) ? response.data : [response.data]);
      } catch (error) {
        console.error('Error fetching data from Unsplash:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <>
      <Navbar />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* Your other content */}
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            The Fashion You Need, Right Here!
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {images.map((image) => (
              <div key={image.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <Image
                    src={image.urls.small}
                    alt={image.alt_description || "Unsplash Image"}
                    width={800}
                    height={500}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <Link href="/sales">
                  <button className="opacity-0 group-hover:opacity-100 group-hover:shadow-lg transition-all duration-500 border border-slate-700 w-full py-1 bg-black text-white rounded-lg mt-1">Show More</button>
                </Link>
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-8">
            Daily Fashion
          </h2>
          <div className="flex mx-auto gap-10 ml-20 my-4">
            {images.map((image) => (
              <Carousel key={image.id} className="w-full max-w-xs mx-auto">
                <CarouselContent>
                  <CarouselItem>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <Image
                            src={image.urls.small}
                            alt={image.alt_description || "Unsplash Image"}
                            width={500}
                            height={300}
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
