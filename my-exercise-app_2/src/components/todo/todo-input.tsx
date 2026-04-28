"use client";

import { Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Todo } from "../../../types/todo";
import { useRouter } from "next/navigation";

export default function TodoInput() {
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const t = useTranslations("TodoInput");

  async function createTodo(title: string):Promise<Todo> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}api/todos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    if (!res.ok) throw new Error("Failed to create todo");
    return res.json();
  }

  async function handleSubmit(e: any) {
    //  e.preventDefault();
    if (!title.trim()) return;
    setIsLoading(true);
    try {
      await createTodo(title);
      setTitle(""); // clear input on success

    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);

    }
  }

  return (

    <form onSubmit={handleSubmit}>

    <div className="flex gap-6 p-6 rounded-lg bg-white shadow-xs mx-6 my-6 sm:mx-16 md:mx-32 lg:mx-64">
        <input
          required
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder={t("placeholder")}
        className="px-4 text-lg rounded-lg w-full border-2 border-gray-200 bg-gray-50 text-gray-700 placeholder-gray-400 outline-none focus:border-blue-400 focus:bg-white transition-all"
        />
        
      <button
        type="submit"
        className="flex min-w-36 items-center gap-3 bg-emerald-500 px-4 py-4 rounded-lg shadow-sm font-bold text-white hover:bg-emerald-600 cursor-pointer active:bg-emerald-700"
      >
        <Plus className="text-white w-6 h-6" />
        <span>{t("buttonLabel")}</span>
      </button>
      </div>
    </form>
      
  );
}
