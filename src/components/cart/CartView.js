"use client";

import { ShoppingBag } from "lucide-react";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import EmptyState from "@/components/ui/EmptyState";
import { useCartStore } from "@/context/CartContext";
import { useHasHydrated } from "@/context/useHasHydrated";

export default function CartView() {
  const hasHydrated = useHasHydrated();
  const items = useCartStore((state) => state.items);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);

  // The cart is persisted to localStorage, which is only available on the
  // client. Waiting for hydration avoids a server/client markup mismatch.
  if (!hasHydrated) {
    return null;
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <EmptyState
          title="Your cart is empty"
          message="Browse the shop and add some products to get started."
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-900">
        <ShoppingBag className="h-6 w-6" />
        Your Cart
      </h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div>
          <CartSummary subtotal={getTotalPrice()} />
        </div>
      </div>
    </div>
  );
}
