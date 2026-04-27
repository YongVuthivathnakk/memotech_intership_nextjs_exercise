import { readTodos } from "@/lib/db";

export function GET() {
    const data = readTodos();
    return Response.json({todos: data})
}