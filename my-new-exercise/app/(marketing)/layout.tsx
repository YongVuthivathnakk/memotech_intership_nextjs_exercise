"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const queryClient = new QueryClient();

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div >
      <nav className="py-4 bg-gray-50 shadow-sm text-center">Marketing</nav>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </div>
  );
}
