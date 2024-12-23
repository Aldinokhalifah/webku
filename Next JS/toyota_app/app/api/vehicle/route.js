import { NextResponse } from "next/server";

export async function GET(request) {
    const mobil = [
        { 
            id: 1,
            nama: 'Agya',
            harga: '178.400.000',
            foto: "/images/agya.png"
        },
        { 
            id: 2,
            nama: 'Avanza',
            harga: '239.700.000',
            foto: "/images/avanza.png"
        },
        { 
            id: 3,
            nama: 'Calya',
            harga: '170.200.000',
            foto: "/images/calya.png"
        },
        { 
            id: 4,
            nama: 'Fortuner',
            harga: '663.200.000',
            foto: "/images/fortuner.png"
        },
        { 
            id: 5,
            nama: 'Rush',
            harga: '284.400.000',
            foto: "/images/rush.png"
        },
        { 
            id: 6,
            nama: 'Zenix',
            harga: '430.400.000',
            foto: "/images/zenix.png"
        },
    ];
    return NextResponse.json({ data: mobil });
}
