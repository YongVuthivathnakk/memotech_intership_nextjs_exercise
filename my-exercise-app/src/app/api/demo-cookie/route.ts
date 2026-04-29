import { cookies } from "next/headers";

export async function GET() {
    const cookieStore = await cookies(); 

    cookieStore.set("demo", 'secret-value', {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        path: "/",
    }) 
        cookieStore.set("noHttp", 'public-value', {
        httpOnly: false,
        secure: true,
        sameSite: 'lax',
        path: "/",
    }) 

    return Response.json({message: "Cookie set"})
}