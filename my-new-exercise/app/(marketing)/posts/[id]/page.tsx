"use client";
import { Post } from "@/types/post";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";

async function getPostById(id: number): Promise<Post> {

  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
  if (!result.ok) {
    throw new Error("error fetch");
  }
  return result.json();
}

export default function PostPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = React.use(params);
  const router = useRouter();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["post", id],
    queryFn: () => getPostById(id),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong.</p>;

  return (
    <div className="min-h-screen ">
      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* Back button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 transition-colors mb-8"
        >
          <span>←</span>
          <span>Back</span>
        </button>

        {/* Card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          {/* Meta */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-blue-50 text-blue-600">
              Post
            </span>
            <span className="text-xs text-gray-400">#{data?.id}</span>
            <span className="text-xs text-gray-300">·</span>
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-[9px] font-medium text-gray-500">
                U{data?.userId}
              </div>
              <span className="text-xs text-gray-400">User {data?.userId}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-semibold text-gray-900 leading-snug mb-4 capitalize">
            {data?.title}
          </h1>

          {/* Divider */}
          <div className="border-t border-gray-100 mb-6" />

          {/* Body */}
          <p className="text-sm text-gray-600 leading-relaxed">{data?.body}</p>
        </div>
      </div>
    </div>
  );
}
