"use client";

const BRANDS = ["All", "Sprintix", "Cacyroy", "Homeworks"];

export default function BrandFilter({ selectedBrand, onBrandChange }) {
  return (
    <div className="rounded-lg bg-white p-5 shadow-sm">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
        Brand
      </h3>
      <div className="space-y-2">
        {BRANDS.map((brand) => (
          <label
            key={brand}
            className="flex cursor-pointer items-center gap-2 text-sm text-slate-700"
          >
            <input
              type="radio"
              name="brand"
              checked={selectedBrand === brand}
              onChange={() => onBrandChange(brand)}
              className="h-4 w-4 accent-blue-700"
            />
            {brand}
          </label>
        ))}
      </div>
    </div>
  );
}
