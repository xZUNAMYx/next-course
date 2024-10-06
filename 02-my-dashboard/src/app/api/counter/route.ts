// import { NextResponse } from "next/server";
export async function GET(request: Request) {

    console.log({ method: request.method });

    return Response.json({
        count: 100,
        method: 'GET',
    })

}
export async function POST(request: Request) {

    console.log({ method: request.method });

    return Response.json({
        count: 100,
        method: 'POST',
    })

}
