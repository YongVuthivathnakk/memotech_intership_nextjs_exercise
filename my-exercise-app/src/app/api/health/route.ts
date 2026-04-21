export async function GET() {
    return Response.json({
        status: "ok",
    }, {status: 200})
}

export async function POST(request: Request) {
    return Response.json({
        message: "405 Method Not Allowed"
    }, {status: 405})
}