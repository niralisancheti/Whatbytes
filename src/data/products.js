// Static product catalogue for the storefront.
// In a real app this would come from a CMS or database, but a local
// array keeps the assignment focused on the frontend logic.

export const products = [
  {
    id: 1,
    name: "Running Shoes",
    price: 99,
    category: "Clothing",
    brand: "Sprintix",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
    description:
      "Lightweight running shoes built for everyday training. Breathable mesh upper, cushioned midsole, and a durable rubber outsole keep you comfortable mile after mile.",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 79,
    category: "Electronics",
    brand: "Cacyroy",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
    description:
      "Over-ear wireless headphones with active noise cancellation, 30-hour battery life, and plush ear cushions for all-day listening comfort.",
  },
  {
    id: 3,
    name: "Backpack",
    price: 129,
    category: "Clothing",
    brand: "Cacyroy",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
    description:
      "A durable everyday backpack with a padded laptop sleeve, water-resistant fabric, and multiple compartments to keep your gear organized.",
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 249,
    category: "Electronics",
    brand: "Sprintix",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop",
    description:
      "Track workouts, heart rate, and sleep with this lightweight smartwatch. Always-on display and seven-day battery life keep you connected.",
  },
  {
    id: 5,
    name: "Sunglasses",
    price: 149,
    category: "Clothing",
    brand: "Cacyroy",
    rating: 3,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop",
    description:
      "Polarized lenses with UV400 protection and a lightweight acetate frame designed for everyday wear in any season.",
  },
  {
    id: 6,
    name: "Digital Camera",
    price: 499,
    category: "Electronics",
    brand: "Sprintix",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&h=600&fit=crop",
    description:
      "A compact digital camera with a 24MP sensor, 4K video recording, and in-body stabilization for sharp shots in any light.",
  },
  {
    id: 7,
    name: "T-shirt",
    price: 29,
    category: "Clothing",
    brand: "Cacyroy",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
    description:
      "A soft, breathable cotton t-shirt with a relaxed fit. Pre-shrunk fabric holds its shape wash after wash.",
  },
  {
    id: 8,
    name: "Smartphone",
    price: 699,
    category: "Electronics",
    brand: "Sprintix",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=600&fit=crop",
    description:
      "Lorem ipsum dolor amet, conssectetur euisagend. A vivid display, all-day battery, and a versatile camera system in a sleek aluminum body.",
  },
  {
    id: 9,
    name: "Desk Lamp",
    price: 39,
    category: "Home",
    brand: "Homeworks",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&h=600&fit=crop",
    description:
      "An adjustable LED desk lamp with three brightness levels and a USB charging port built into the base.",
  },
  {
    id: 10,
    name: "Coffee Maker",
    price: 89,
    category: "Home",
    brand: "Homeworks",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop",
    description:
      "Brew a full pot in minutes with this programmable coffee maker featuring a reusable filter and keep-warm plate.",
  },
  {
    id: 11,
    name: "Throw Pillow Set",
    price: 45,
    category: "Home",
    brand: "Homeworks",
    rating: 3,
    image:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?w=600&h=600&fit=crop",
    description:
      "A set of two soft throw pillows with removable, machine-washable covers to refresh any couch or bed.",
  },
  {
    id: 12,
    name: "Leather Wallet",
    price: 59,
    category: "Clothing",
    brand: "Cacyroy",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=600&fit=crop",
    description:
      "A slim genuine leather wallet with RFID-blocking card slots and a coin pocket, built to age beautifully over time.",
  },
];

export function getProductById(id) {
  return products.find((product) => product.id === Number(id));
}
