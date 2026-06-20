import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import ImageGallery from "@/components/product/ImageGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ReviewsSection from "@/components/product/ReviewsSection";
import { getProductById, products } from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({ id: String(product.id) }));
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-blue-700 hover:text-blue-800"
      >
        <ChevronLeft className="h-4 w-4" />
        Back to products
      </Link>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <ImageGallery images={[product.image]} productName={product.name} />
        <ProductInfo product={product} />
      </div>

      <ReviewsSection rating={product.rating} />
    </div>
  );
}
