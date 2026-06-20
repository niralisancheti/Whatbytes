"use client";

import { Minus, Plus } from "lucide-react";

export default function QuantitySelector({ quantity, onQuantityChange }) {
  function decrease() {
    if (quantity > 1) onQuantityChange(quantity - 1);
  }

  function increase() {
    onQuantityChange(quantity + 1);
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-slate-700">Quantity</span>
      <div className="flex items-center rounded-md border border-slate-300">
        <button
          onClick={decrease}
          aria-label="Decrease quantity"
          className="flex h-9 w-9 items-center justify-center text-slate-600 hover:bg-slate-100 disabled:opacity-40"
          disabled={quantity <= 1}
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-10 text-center text-sm font-semibold">{quantity}</span>
        <button
          onClick={increase}
          aria-label="Increase quantity"
          className="flex h-9 w-9 items-center justify-center text-slate-600 hover:bg-slate-100"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
