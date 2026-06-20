"use client";

import { useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Sidebar from "@/components/home/Sidebar";
import BrandFilter from "@/components/home/BrandFilter";
import ProductGrid from "@/components/home/ProductGrid";
import { products } from "@/data/products";
import { filterProducts } from "@/lib/filterProducts";

export default function ProductListing() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const category = searchParams.get("category") || "All";
  const brand = searchParams.get("brand") || "All";
  const search = searchParams.get("search") || "";
  const maxPrice = Number(searchParams.get("maxPrice")) || 1000;

  function updateFilters(updates) {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(updates).forEach(([key, value]) => {
      if (!value || value === "All") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });

    router.push(`/?${params.toString()}`);
  }

  const filteredProducts = useMemo(() => {
    return filterProducts(products, {
      category,
      minPrice: 0,
      maxPrice,
      search,
    }).filter((product) => brand === "All" || product.brand === brand);
  }, [category, maxPrice, search, brand]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="flex flex-col gap-6 lg:w-64 lg:shrink-0">
          <Sidebar
            selectedCategory={category}
            onCategoryChange={(value) => updateFilters({ category: value })}
            maxPrice={maxPrice}
            onMaxPriceChange={(value) => updateFilters({ maxPrice: value })}
          />
          <BrandFilter
            selectedBrand={brand}
            onBrandChange={(value) => updateFilters({ brand: value })}
          />
        </div>

        <div className="flex-1">
          <h1 className="mb-4 text-2xl font-bold text-slate-900">
            Product Listing
          </h1>
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}
