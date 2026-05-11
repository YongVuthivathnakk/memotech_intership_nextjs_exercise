import { cacheLife, cacheTag } from "next/cache";
import { cookies } from "next/headers";
import Link from "next/link";
import React, { Suspense } from "react";

export default function blogPage() {
    return <>
    
    {/* Static content - prerendered automatically */}
      <header>
        <h1>Our Blog</h1>
        <nav>
          <Link href="/">Home</Link> | <Link href="/about">About</Link>
        </nav>
      </header>
 
      {/* Cached dynamic content - included in the static shell */}
      <BlogPosts />
 
      {/* Runtime dynamic content - streams at request time */}
      <Suspense fallback={<p>Loading your preferences...</p>}>
        <UserPreferences />
      </Suspense></>;
}

async function BlogPosts() {
  "use cache";
  cacheLife("hours");
  cacheTag("post");

  const res = await fetch("https://api.vercel.app/blog");
  const posts = await res.json();

  return (
    <section>
      <h2>Latest Posts</h2>
      <ul className="flex flex-col gap-4">
        {posts.slice(0, 5).map((post: any) => (
          <li key={post.id}>
            <h3>Title: {post.title}</h3>
            <p>
              Author: By {post.author} on {post.date}
            </p>
            </li>
        ))}
      </ul>
    </section>
  );
}

async function UserPreferences() {
  const theme = (await cookies()).get("theme")?.value || "light";
  const favoriteCategory = (await cookies()).get("category")?.value;
  return (
    <aside>
      <p>Your theme: {theme}</p>
      {favoriteCategory && <p>Favorite category: {favoriteCategory}</p>}
    </aside>
  );
}
