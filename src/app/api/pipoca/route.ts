export async function GET() {
    const _ = await fetch("https://api.thecatapi.com/v1/breeds?limit=10&page=0", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    const data = {
        "tipo": "salgada"
    }
 
    return Response.json({ data })  
}

export async function POST() {
    const data = {
        "tipo": "CREATE salgada"
    }
 
    return Response.json({ data })  
}