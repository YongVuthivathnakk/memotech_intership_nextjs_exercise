"use client";

import Header from "@/components/layout/header";
import TodoInput from "@/components/todo/todo-input";
import TodoList from "@/components/todo/todo-list";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useTranslations } from "next-intl";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      <QueryClientProvider client={queryClient}>
        <main>
          <TodoInput />
          <TodoList />
        </main>
      </QueryClientProvider>
    </div>
  );
}
