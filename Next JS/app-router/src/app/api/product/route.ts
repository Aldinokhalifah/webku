import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const {searchParams} = new URL(request.url);
    const id = searchParams.get('id');
    
    const data = [
        {
            id: 1,
            name: 'Sepatu',
            price: 10000
        },
        {
            id: 2,
            name: 'Sandal',
            price: 20000
        }
    ];

    if(id) {
        const detail = data.find((item) => item.id === Number(id));
        if(detail) {
            return NextResponse.json({ 
                status: 200, 
                message: 'Success', 
                data: detail});
        }

        return NextResponse.json({ 
            status: 404, 
            message: 'Not Found', 
            data: []});
    } 
    return NextResponse.json({ status: 200, message: 'Success', data: data});
}