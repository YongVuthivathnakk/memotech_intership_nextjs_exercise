import { Todo } from "@/types/todo";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

async function getTodos(): Promise<{ todos: Todo[] }> {
  const url = `${process.env.NEXT_PUBLIC_API_BASE}api/todos`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  return response.json();
}

async function editTodo({
  id,
  data,
}: {
  id: string;
  data: Partial<Todo>;
}): Promise<Todo> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE}api/todos/${id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    },
  );

  if (!response.ok) throw new Error("Failed to update todo");
  return response.json();
}

async function deleteTodo(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE}api/todos/${id}`,
    {
      method: "DELETE",
    },
  );
  if (!response.ok) throw new Error("Failed to delete todo");
}

async function createTodo(title: string): Promise<Todo> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}api/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });
  if (!res.ok) throw new Error("Failed to create todo");
  return res.json();
}

export default function useTodos() {
  const queryClient = useQueryClient();

  const { data, isPending, isError } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  const updateMutation = useMutation({
    mutationFn: editTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const createMutation = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  function handleIsComplete(id: string, completed: boolean) {
    updateMutation.mutate({ id, data: { completed } });
  }

  function handleDelete(id: string) {
    deleteMutation.mutate(id);
  }

  function handleEdit(id: string, title: string) {
    updateMutation.mutate({ id, data: { title } });
  }

  function handleCreate(title: string) {
    createMutation.mutate(title);
  }

    
    return {
        todos: data?.todos ?? [],
        isPending,
        isError,
        handleDelete,
        handleEdit,
        handleIsComplete,
        handleCreate,
    }
}
