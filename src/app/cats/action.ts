'use server'

import { revalidateTag } from 'next/cache'

export async function favourite(id: string) {
    try {
        const myHeaders = new Headers();
        myHeaders.append("x-api-key", process.env.API_TOKEN);
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
    } catch (err) {
        throw new Error("Failed to favourite")
    }
}