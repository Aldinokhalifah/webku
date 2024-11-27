import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const {searchParams} = new URL(request.url);
    const id = searchParams.get('id');
    
    const data = [
        {
            id: 1,
            title: 'Sepatu',
            price: 10000,
            image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3b58d490-7e40-4768-b023-ac7c6dbc081e/custom-dunk-low-unlocked-by-you.png'
        },
        {
            id: 2,
            title: 'Sandal',
            price: 20000,
            image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3b58d490-7e40-4768-b023-ac7c6dbc081e/custom-dunk-low-unlocked-by-you.png'
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