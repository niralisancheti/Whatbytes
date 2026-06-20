"use client";

import Link from "next/link";
import Image from "next/image";
import RatingStars from "@/components/ui/RatingStars";
import { useCartStore } from "@/context/CartContext";
import { formatPrice } from "@/lib/formatPrice";

export default function ProductCard({ product }) {
  const addItem = useCartStore((state) => state.addItem);

  function handleAddToCart(event) {
    event.preventDefault();
    addItem(product, 1);
  }

  return (
    <Link
      href={`/product/${product.id}`}
      className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm transition hover:shadow-md"
    >
      <div className="relative aspect-square w-full bg-slate-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-semibold text-slate-900">{product.name}</h3>
        <p className="text-lg font-bold text-slate-900">
          {formatPrice(product.price)}
        </p>

        {product.rating && <RatingStars rating={product.rating} />}

        <button
          onClick={handleAddToCart}
          className="mt-2 w-full rounded-md bg-blue-700 py-2 text-sm font-medium text-white transition hover:bg-blue-800"
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
}
