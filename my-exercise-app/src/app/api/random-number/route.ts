export async function GET() {
    return Response.json(
        {number: Math.random()}
    )
}