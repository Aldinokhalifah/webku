import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request:NextRequest) {
    const tag = request.nextUrl.searchParams.get('tag');
    const secret = request.nextUrl.searchParams.get('secret');

    if(!tag) {
        return NextResponse.json({status: 400, massage: "Missing tag param"}, {status: 400});
    }

    if(secret !== '12345678') {
        return NextResponse.json({status: 401, message: "Invalid secret"}, {status: 401});
    }

    revalidateTag(tag);

    return NextResponse.json({ revalidate: true, now: Date.now() });
}