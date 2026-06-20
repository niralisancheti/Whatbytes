"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import RatingStars from "@/components/ui/RatingStars";
import QuantitySelector from "./QuantitySelector";
import { useCartStore } from "@/context/CartContext";
import { formatPrice } from "@/lib/formatPrice";

export default function ProductInfo({ product }) {
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);
  const router = useRouter();

  function handleAddToCart() {
    addItem(product, quantity);
    router.push("/cart");
  }

  return (
    <div className="flex flex-col">
      <p className="text-sm font-medium uppercase tracking-wide text-blue-700">
        {product.category}
      </p>
      <h1 className="mt-1 text-3xl font-bold text-slate-900">{product.name}</h1>

      {product.rating && (
        <div className="mt-2">
          <RatingStars rating={product.rating} />
        </div>
      )}

      <p className="mt-4 text-3xl font-bold text-slate-900">
        {formatPrice(product.price)}
      </p>

      <p className="mt-4 leading-relaxed text-slate-600">{product.description}</p>

      <div className="mt-6">
        <p className="text-sm text-slate-500">
          Category: <span className="font-medium text-slate-700">{product.category}</span>
        </p>
      </div>

      <div className="mt-6">
        <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} />
      </div>

      <button
        onClick={handleAddToCart}
        className="mt-6 w-full rounded-md bg-blue-700 py-3 text-base font-semibold text-white transition hover:bg-blue-800 sm:w-auto sm:px-10"
      >
        Add to Cart
      </button>
    </div>
  );
}
