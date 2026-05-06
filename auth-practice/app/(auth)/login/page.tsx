"use client";

import { signin } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState } from "react";

export default function Login() {

    const [state, action, pending] = useActionState(signin, undefined)

  return (
    <form
      action={action}
      className="px-20 py-16 border border-gray-300 rounded-lg p-4 flex flex-col gap-4"
    >
      <h1 className="my-4 scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
        Login
      </h1>
      <div className="flex flex-col gap-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" type="text" placeholder="username" />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Password</Label>
        <Input type="password" placeholder="password" />
      </div>
      <Button>Login</Button>
      <p className="leading-7 text-sm">
        Don't have account?{" "}
        <a href="/signup" className="text-blue-500">
          Sign up
        </a>
      </p>
    </form>
  );
}
