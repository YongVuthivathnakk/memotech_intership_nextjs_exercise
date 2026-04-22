import NotFound from "@/app/[locale]/about/not-found";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";



const VALID_SLUG = [
    "hello",
    "third-blog"
]

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  return {
      title: slug,
      description: `A description of: ${slug}`
  };
}

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

    if (!VALID_SLUG.includes(slug)) {
        return NotFound();
    }

  return <p>{slug}</p>;
}
