import TextSkeleton from "@/components/text-skeleton";
import React, { Suspense } from "react";

export default async function Slow() {
  await new Promise((r) => setTimeout(r, 2000));

  return (
    <div className="h-screen flex flex-col p-16 gap-8 items-center justify-center">
      <p className="text-3xl font-bold">Slow</p>
          <Suspense fallback={<TextSkeleton />}>
              
        <p className="text-center">
          Used by some of the world's largest companies, Next.js enables you to
          create high-quality web applications with the power of React
          components.
        </p>
      </Suspense>
    </div>
  );
}
