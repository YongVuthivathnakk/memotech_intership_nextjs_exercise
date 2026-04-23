
// Using Curl => curl -X POST -H "Content-Type: application/json" -d '{"message": "hello"}' http://localhost:3000/api/echo

export async function POST(request: Request) {
    const body = await request.json();
    return Response.json({
        message: "revieved",
        echo: body.message,
    }, {status: 201}); // Status 201: request successfully processed and new resource was created.
}