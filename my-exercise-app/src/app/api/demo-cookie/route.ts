import { cookies } from "next/headers";

export async function GET() {
    const cookieStore = await cookies(); 

    cookieStore.set("secret", 'super-secret-value', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: "/",
    }) 

    return Response.json({message: "Cookie set"})
}