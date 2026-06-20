"use client";

const MIN_PRICE = 0;
const MAX_PRICE = 1000;

export default function PriceFilter({ maxPrice, onMaxPriceChange }) {
  return (
    <div className="mt-6">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-100">
        Price
      </h3>
      <input
        type="range"
        min={MIN_PRICE}
        max={MAX_PRICE}
        value={maxPrice}
        onChange={(event) => onMaxPriceChange(Number(event.target.value))}
        className="w-full accent-white"
      />
      <div className="mt-1 flex justify-between text-xs text-blue-100">
        <span>{MIN_PRICE}</span>
        <span>{maxPrice}</span>
      </div>
    </div>
  );
}
