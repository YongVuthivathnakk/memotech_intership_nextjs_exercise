"use client";

import { PostCard } from "@/components/post-card";
import PostSkeleton from "@/components/post-skeleton";
import usePosts from "@/hooks/usePosts";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

export default function Posts() {
  const { posts, isLoading, isError } = usePosts();
  const router = useRouter();

  function handleClick(id: number) {
    router.push(`/posts/${id}`);
  }

  if (isError) {
    return <p>Something Wrong</p>;
  }

  return (
    <div className="grid grid-cols-4 gap-4 p-auto p-4">
      <Suspense fallback={<PostSkeleton />}>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            handleClick={() => handleClick(post.id)}
          />
        ))}
      </Suspense>
    </div>
  );
}
