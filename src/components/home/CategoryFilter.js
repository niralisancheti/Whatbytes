"use client";

const CATEGORIES = ["All", "Electronics", "Clothing", "Home"];

export default function CategoryFilter({ selectedCategory, onCategoryChange }) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-100">
        Category
      </h3>
      <div className="space-y-2">
        {CATEGORIES.map((category) => (
          <label
            key={category}
            className="flex cursor-pointer items-center gap-2 text-sm text-white"
          >
            <input
              type="radio"
              name="category"
              checked={selectedCategory === category}
              onChange={() => onCategoryChange(category)}
              className="h-4 w-4 accent-white"
            />
            {category}
          </label>
        ))}
      </div>
    </div>
  );
}
