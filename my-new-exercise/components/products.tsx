import React from "react";

export default async function Products() {
  await new Promise((r) => setTimeout(r, 3000));
  return <div>products</div>;
}
