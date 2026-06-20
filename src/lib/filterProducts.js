// Pure helper that applies category, price, and search filters to a
// list of products. Kept separate from the page component so the
// filtering logic is easy to read and test on its own.

export function filterProducts(products, { category, minPrice, maxPrice, search }) {
  return products.filter((product) => {
    const matchesCategory =
      !category || category === "All" || product.category === category;

    const matchesPrice =
      product.price >= minPrice && product.price <= maxPrice;

    const matchesSearch =
      !search || product.name.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesPrice && matchesSearch;
  });
}
