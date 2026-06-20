import { Suspense } from "react";
import ProductListing from "@/components/home/ProductListing";

export default function Home() {
  return (
    <Suspense fallback={null}>
      <ProductListing />
    </Suspense>
  );
}
