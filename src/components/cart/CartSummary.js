"use client";

import Link from "next/link";
import { formatPrice } from "@/lib/formatPrice";

const SHIPPING_FEE = 0;

export default function CartSummary({ subtotal }) {
  const total = subtotal + SHIPPING_FEE;

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-bold text-slate-900">Order Summary</h2>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between text-slate-600">
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between text-slate-600">
          <span>Shipping</span>
          <span>{SHIPPING_FEE === 0 ? "Free" : formatPrice(SHIPPING_FEE)}</span>
        </div>
      </div>

      <div className="mt-4 flex justify-between border-t border-slate-200 pt-4 text-base font-bold text-slate-900">
        <span>Total</span>
        <span>{formatPrice(total)}</span>
      </div>

      <button className="mt-6 w-full rounded-md bg-blue-700 py-3 text-sm font-semibold text-white hover:bg-blue-800">
        Proceed to Checkout
      </button>

      <Link
        href="/"
        className="mt-3 block text-center text-sm font-medium text-blue-700 hover:text-blue-800"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
