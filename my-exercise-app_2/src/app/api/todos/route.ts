import { createTodo, deleteById, getTodos,  } from "@/lib/db";

export async function GET() {
    const data = getTodos();
    return Response.json({todos: data})
}

export async function POST(request: Request) {
    const { title } = await request.json();
    const newTodo = createTodo(title);
    return Response.json(newTodo, { status: 201 });
}

