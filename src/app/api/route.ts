export async function GET() {
    const res = await fetch("https://api.thecatapi.com/v1/breeds?limit=10&page=0", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    const data = await res.json()
 
    return Response.json({ data })  
}