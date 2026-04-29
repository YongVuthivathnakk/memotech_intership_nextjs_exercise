"use client";

import { useEffect, useState } from "react";
import TodoEmpty from "./todo-empty";
import { Todo } from "../../types/todo";
import TodoItem from "./todo-item";
import { LoaderCircleIcon } from "lucide-react";
import useTodos from "@/app/hooks/useTodos";

export default function TodoList() {

  const { todos, isPending, isError, handleDelete, handleEdit, handleIsComplete} = useTodos();

  function renderContent() {
    if (isPending) return <LoaderCircleIcon className="animate-spin" />;
    if (isError) return <p>Something Wrong...</p>;
    if (todos.length === 0) return <TodoEmpty />;
    return [...todos]
      .reverse()
      .map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          isLoading={isPending}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          isComplete={todo.completed}
          handleIsComplete={handleIsComplete}
          title={todo.title}
          createAt={todo.createdAt}
        />
      ));
  }

  return (
    <div className="h-full rounded-lg items-cente flex flex-col gap-3 justify-center shadow-sm p-6 bg-white mx-6 my-6 sm:mx-16 md:mx-32 lg:mx-64">
      {renderContent()}
    </div>
  );
}
