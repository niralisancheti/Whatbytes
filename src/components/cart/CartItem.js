"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCartStore } from "@/context/CartContext";
import { formatPrice } from "@/lib/formatPrice";

export default function CartItem({ item }) {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  return (
    <div className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm">
      <Link href={`/product/${item.id}`} className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md bg-slate-50">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </Link>

      <div className="flex-1">
        <Link href={`/product/${item.id}`} className="font-semibold text-slate-900 hover:text-blue-700">
          {item.name}
        </Link>
        <p className="text-sm text-slate-500">{formatPrice(item.price)} each</p>
      </div>

      <div className="flex items-center rounded-md border border-slate-300">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          aria-label="Decrease quantity"
          className="flex h-8 w-8 items-center justify-center text-slate-600 hover:bg-slate-100 disabled:opacity-40"
          disabled={item.quantity <= 1}
        >
          <Minus className="h-3.5 w-3.5" />
        </button>
        <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          aria-label="Increase quantity"
          className="flex h-8 w-8 items-center justify-center text-slate-600 hover:bg-slate-100"
        >
          <Plus className="h-3.5 w-3.5" />
        </button>
      </div>

      <p className="w-20 text-right font-semibold text-slate-900">
        {formatPrice(item.price * item.quantity)}
      </p>

      <button
        onClick={() => removeItem(item.id)}
        aria-label={`Remove ${item.name} from cart`}
        className="text-slate-400 hover:text-red-600"
      >
        <Trash2 className="h-5 w-5" />
      </button>
    </div>
  );
}
