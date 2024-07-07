export async function GET() {
    const data = {
        "tipo": "dash"
    }
 
    return Response.json({ data })
}