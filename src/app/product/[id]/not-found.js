import Link from "next/link";

export default function ProductNotFound() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-20 text-center sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-slate-900">Product not found</h1>
      <p className="mt-2 text-slate-600">
        The product you&apos;re looking for doesn&apos;t exist or may have been removed.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-md bg-blue-700 px-6 py-2 text-sm font-medium text-white hover:bg-blue-800"
      >
        Back to shop
      </Link>
    </div>
  );
}
