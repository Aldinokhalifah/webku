'use client';

import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import * as React from "react"
import axios from 'axios';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel"

import { useState, useEffect } from 'react';


export default function Home() {
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
        const response = await axios.get('https://api.unsplash.com/photos/random', {
          params: {
            query: 'clothing', // Ganti dengan tema yang diinginkan
            count: 1, // Jumlah gambar random yang ingin diambil
          },
          headers: {
            Authorization: `Client-ID f432jygEoEW5U_Hz7p4dw-DsH73VU472gkeWI6-rFsk`,
          },
        });

        // Set hasil response sebagai array karena `random` bisa mengembalikan satu atau lebih gambar
        setImages(Array.isArray(response.data) ? response.data : [response.data]);
      } catch (error) {
        console.error('Error fetching data from Unsplash:', error);
      }
    };

    fetchImages();
  }, []);

  

  return (
    <>
      <Navbar></Navbar>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, ...)" }}
          ></div>
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{" "}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true"></span>
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Upgrade Your Look, Start Here.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 duration-500"
              >
                Shop Now
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, ...)" }}
          ></div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          The Fashion You Need, Right Here!
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                  alt="Front of men's Basic Tee in black."
                  width={800}
                  height={500}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <Link href="/sales">
              <button className="opacity-0 group-hover:opacity-100 group-hover:shadow-lg transition-all duration-500 border border-slate-700 w-full py-1 bg-black text-white rounded-lg mt-1">Show More</button>
              </Link>
            </div>
            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                  alt="Front of men's Basic Tee in black."
                  width={800}
                  height={500}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <Link href="/sales">
              <button className="opacity-0 group-hover:opacity-100 group-hover:shadow-lg transition-all duration-500 border border-slate-700 w-full py-1 bg-black text-white rounded-lg mt-1">Show More</button>
              </Link>
            </div>
            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                  alt="Front of men's Basic Tee in black."
                  width={800}
                  height={500}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <Link href="/sales">
              <button className="opacity-0 group-hover:opacity-100 group-hover:shadow-lg transition-all duration-500 border border-slate-700 w-full py-1 bg-black text-white rounded-lg mt-1">Show More</button>
              </Link>
            </div>
            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                  alt="Front of men's Basic Tee in black."
                  width={800}
                  height={500}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <Link href="/sales">
              <button className="opacity-0 group-hover:opacity-100 group-hover:shadow-lg transition-all duration-500 border border-slate-700 w-full py-1 bg-black text-white rounded-lg mt-1">Show More</button>
              </Link>
            </div>
            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                  alt="Front of men's Basic Tee in black."
                  width={800}
                  height={500}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <Link href="/sales">
              <button className="opacity-0 group-hover:opacity-100 group-hover:shadow-lg transition-all duration-500 border border-slate-700 w-full py-1 bg-black text-white rounded-lg mt-1">Show More</button>
              </Link>
            </div>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-8">
          Daily Fashion
          </h2>
          <div className="flex mx-auto gap-10 ml-20 my-4">
              <Carousel className="w-full max-w-xs mx-auto">
              <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        {images.map((image) => (
                          <div key={image.id}>
                            <Image
                              src={image.urls.small}
                              alt={image.alt_description || "Unsplash Image"}
                              width={500}
                              height={500}
                              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                            />
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                
                  ))}
              </CarouselContent>
              {/* <CarouselPrevious />
              <CarouselNext /> */}
              </Carousel>
              <Carousel className="w-full max-w-xs mx-auto">
              <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        {images.map((image) => (
                          <div key={image.id}>
                            <Image
                              src={image.urls.small}
                              alt={image.alt_description}
                              width={500}
                              height={300}
                              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                            />
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                
                  ))}
              </CarouselContent>
              {/* <CarouselPrevious />
              <CarouselNext /> */}
              </Carousel>
              <Carousel className="w-full max-w-xs mx-auto">
              <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        {images.map((image) => (
                          <div key={image.id}>
                            <Image
                              src={image.urls.small}
                              alt={image.alt_description}
                              width={500}
                              height={300}
                              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                            />
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                
                  ))}
              </CarouselContent>
              {/* <CarouselPrevious />
              <CarouselNext /> */}
              </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}

