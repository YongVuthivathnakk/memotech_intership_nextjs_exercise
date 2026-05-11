import React from "react";

export default async function Reviews() {
  await new Promise((r) => setTimeout(r, 4000));
  return <div>Reviews</div>;
}
