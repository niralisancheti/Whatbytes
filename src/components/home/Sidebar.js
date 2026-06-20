import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";

export default function Sidebar({
  selectedCategory,
  onCategoryChange,
  maxPrice,
  onMaxPriceChange,
}) {
  return (
    <aside className="w-full shrink-0 lg:w-64">
      <div className="rounded-lg bg-blue-900 p-5 text-white">
        <h2 className="mb-4 text-lg font-bold">Filters</h2>
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={onCategoryChange}
        />
        <PriceFilter maxPrice={maxPrice} onMaxPriceChange={onMaxPriceChange} />
      </div>
    </aside>
  );
}
