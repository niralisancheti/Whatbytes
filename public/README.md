# ShopHub — Frontend Assignment (Whatbytes)

A small e-commerce storefront built with Next.js (App Router) and Tailwind CSS, featuring a filterable product listing, dynamic product detail pages, and a persistent shopping cart.

**Live demo:** (https://whatbytes-jet.vercel.app/)

## Features

- **Home page (`/`)** — responsive product grid (3 columns on desktop, 2 on tablet, 1 on mobile) with a sidebar for category, price, and brand filters, plus a header search bar. Filters are reflected in the URL (e.g. `/?category=Electronics&maxPrice=500`).
- **Product detail page (`/product/[id]`)** — image gallery, quantity selector, and an "Add to Cart" button that takes you straight to the cart.
- **Cart page (`/cart`)** — update quantities, remove items, and see a price summary. Cart state is kept in `localStorage` so it survives page refreshes.
- **Empty states** — a friendly message is shown when no products match the active filters, and when the cart is empty.

## Tech stack

- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Zustand](https://github.com/pmndrs/zustand) for cart state, with its `persist` middleware handling `localStorage`
- [lucide-react](https://lucide.dev/) for icons

## Project structure

```
src/
  app/                     # Routes (App Router)
    page.js                # Home page
    product/[id]/page.js   # Product detail page
    cart/page.js           # Cart page
    layout.js              # Root layout (Header + Footer)
  components/
    layout/                # Header, Footer
    home/                  # Sidebar, filters, product grid/card
    product/                # Image gallery, quantity selector, reviews
    cart/                   # Cart item row, cart summary
    ui/                     # Small shared pieces (rating stars, empty state)
  context/
    CartContext.js          # Zustand cart store
  data/
    products.js              # Static product catalogue
  lib/
    filterProducts.js        # Filtering logic (category, price, search)
    formatPrice.js            # Price formatting helper
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Deploying to Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel will auto-detect Next.js — no extra configuration is needed.
4. Once deployed, copy the live URL into the top of this README.
