"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, ShoppingCart, User } from "lucide-react";
import { useCartStore } from "@/context/CartContext";

export default function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const totalItems = useCartStore((state) => state.getTotalItems());

  function handleSearchChange(event) {
    const value = event.target.value;
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    router.push(`/?${params.toString()}`);
  }

  return (
    <header className="bg-blue-900 text-white">
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-bold shrink-0">
          Logo
        </Link>

        <div className="relative flex-1 max-w-xl">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-300" />
          <input
            type="text"
            placeholder="Search for products..."
            defaultValue={searchParams.get("search") ?? ""}
            onChange={handleSearchChange}
            className="w-full rounded-md bg-blue-800/60 py-2 pl-9 pr-3 text-sm text-white placeholder-blue-300 outline-none ring-1 ring-blue-700 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="ml-auto flex items-center gap-4">
          <Link
            href="/cart"
            className="relative flex items-center gap-2 rounded-md bg-blue-950 px-4 py-2 text-sm font-medium hover:bg-blue-950/80"
          >
            <ShoppingCart className="h-4 w-4" />
            Cart
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                {totalItems}
              </span>
            )}
          </Link>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-700">
            <User className="h-5 w-5" />
          </div>
        </div>
      </div>
    </header>
  );
}
