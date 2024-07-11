'use server'

import { revalidateTag } from 'next/cache'
import { trace } from '@opentelemetry/api';

export async function favourite(id: string) {
    const span = trace.getTracer('next-app').startSpan("hellow")
    try {
        const myHeaders = new Headers();
        const api_token = process.env.API_TOKEN ?? ""
        myHeaders.append("x-api-key", api_token);
        myHeaders.append("Content-Type", "application/json");
    
        console.log("Making Request: ", id)
    
        const raw = JSON.stringify({
            "image_id": id,
            "sub_id": "pedro-custom-uuid"
        });
    
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            
        };
    
        const data = await fetch("https://api.thecatapi.com/v1/favourites", requestOptions)
    
        if (!data.ok) {
            console.log(await data.text())
    
            throw new Error("Failed to favourite")
        }
        revalidateTag('fav')

        console.log(await data.text())
        span.end()
    } catch (err) {
        span.end()
        throw new Error("Failed to favourite")
    }
}