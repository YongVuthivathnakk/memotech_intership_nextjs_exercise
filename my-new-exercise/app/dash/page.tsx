import { Post } from "@/types/post";
import { cookies } from "next/headers";
import React from "react";

export default async function Dash() {
  const cookieStore = await cookies();

  const result = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    next: { revalidate: 10 },
  });

  if (!result.ok) {
    throw new Error("error fetch");
  }
  const post: Promise<Post> = result.json();

  return (
    <div>
      Dash
      <p>Post: {(await post).title}</p>
    </div>
  );
}
