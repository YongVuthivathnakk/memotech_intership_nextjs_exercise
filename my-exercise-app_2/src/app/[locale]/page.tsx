import Header from "@/components/layout/header";
import TodoInput from "@/components/todo/todo-input";
import TodoList from "@/components/todo/todo-list";
import { useTranslations } from "next-intl";

export default function Home() {

  return (
    <div className="min-h-screen bg-slate-100" >
      <Header /> 
      <main>
        <TodoInput />
        <TodoList />
      </main>
    </div>
  );
}
