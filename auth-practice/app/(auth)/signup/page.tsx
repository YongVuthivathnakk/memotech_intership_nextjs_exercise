"use client";
import { signup } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState } from "react";

export default function SignUp() {

      const [state, action, pending] = useActionState(signup, undefined)

  return (
      <form
        action={action}
        className="px-20 py-16 border border-gray-300 rounded-lg p-4 flex flex-col gap-4"
      >
        <h1 className="my-4 scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
          Sign Up
        </h1>
        <div className="flex flex-col gap-2">
          <Label htmlFor="username">Username</Label>
              <Input id="username" name="name" type="text" placeholder="username" />
              {state?.errors?.name && <p className="text-sm text-red-500">{state.errors.name}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="text" placeholder="email" />
              {state?.errors?.email && <p className="text-sm text-red-500">{state.errors.email}</p>}
              
        </div>
        <div className="flex flex-col gap-2">
          <Label>Password</Label>
              <Input type="password" name="password" placeholder="password" />
              {state?.errors?.password && <p className="text-sm text-red-500">{state.errors.password}</p>}
              
        </div>
          <Button type="submit" variant={pending ? "secondary" : "default"} disabled={pending}>{ pending ? "Loading..." : "Sign up"}</Button>
               <p className="text-sm leading-7">
                  Don't have account? <a href="/login" className="text-blue-500">Login</a>
              </p>
      </form>
  );
}
