import Products from "@/components/products";
import Reviews from "@/components/review";
import { Suspense } from "react";

export default async function Slow() {
  return (
    <div>
      <h1>Product Reviews</h1>
      <Suspense fallback={<p>Loading Product Details ....</p>}>
        <Products />
      </Suspense>

      <Suspense fallback={<p>Loading Product Reviews ...</p>}>
        <Reviews />
      </Suspense>
    </div>
  );
}
