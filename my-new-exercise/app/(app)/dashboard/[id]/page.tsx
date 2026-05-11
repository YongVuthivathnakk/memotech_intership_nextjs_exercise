import React from "react";

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default async function DashboardId({
  params,
}: PageProps<"/dashboard/[id]">) {
  const { id } = await params;

  return (
    <div>
      <h1>Blog Post</h1>
      <Content id={id} />
    </div>
  );
}

async function Content({ id }: { id: string }) {
  const post = {
    id: "1",
    title: "Hello World",
    content: "HELLO",
  };
  return (
      <article>
          <p>Post ID: { id}</p>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </article>
  );
}
