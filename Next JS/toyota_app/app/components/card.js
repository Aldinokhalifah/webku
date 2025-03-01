'use client'

import Image from "next/image";

async function getData() {
    const res = await fetch('http://localhost:3000/api/vehicle', {cache: 'no-store'});

    if(!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default async function card() {
    const cars = await getData();

    return ( 
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.data.map((car) => (
            <div
                key={car.id}
                className="w-full max-w-sm border border-gray-200  shadow-md dark:bg-gray-800 dark:border-gray-700 p-2">
                <a href="#">
                    <div className="relative h-64 w-full bg-slate-900 rounded-md">
                        <Image
                            className="rounded-t-lg hover:scale-105 transition-all duration-700 bg "
                            src={car.foto}
                            alt={car.nama}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </a>
                <div className="p-5 flex flex-col items-center">
                    <a href="#" className="flex justify-center">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white uppercase text-center">
                            {car.nama}
                        </h5>
                    </a>
                    <div className="flex flex-col items-center mt-3 space-y-1">
                        <span className="text-slate-700 text-sm">Start from</span>
                        <span className="text-xl font-bold text-indigo-900 dark:text-white">
                            RP {car.harga}
                        </span>
                        <a
                            href="#"
                            className="text-base font-medium text-white bg-red-700 px-4 py-2 rounded-md shadow-red-700 shadow-md hover:shadow-lg hover:shadow-red-700 flex items-center gap-1 transition-all duration-300 "
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        ))}
    </div>
)
}