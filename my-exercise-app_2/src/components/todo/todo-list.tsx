"use client";

import { useEffect, useState } from "react";
import TodoEmpty from "./todo-empty";
import { Todo } from "../../../types/todo";
import TodoItem from "./todo-item";
import { LoaderCircleIcon } from "lucide-react";

export default function TodoList() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setIsLoading(true);
    setIsError(false);
    const url = `${process.env.NEXT_PUBLIC_API_BASE}api/todos`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const data = await response.json();
      setTodos(data.todos);
    } catch (e) {
      console.log(e);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }


  function renderContent() {
    if (isLoading) return <LoaderCircleIcon className="animate-spin" />
    if (isError) return <p>Something Wrong...</p>
    if (todos.length === 0) return <TodoEmpty />
    return todos.map(todo => (
      <TodoItem title={todo.title} key={todo.id} completed={todo.completed} createAt={todo.createdAt} />
    ))
}

  return (
    <div className="h-full rounded-lg items-cente flex flex-col gap-3 justify-center shadow-sm p-6 bg-white mx-6 my-6 sm:mx-16 md:mx-32 lg:mx-64">
      {renderContent()}
    </div>
  );
}
