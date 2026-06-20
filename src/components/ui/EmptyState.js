import { SearchX } from "lucide-react";

export default function EmptyState({
  title = "No products found",
  message = "Try adjusting your filters or search term.",
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 bg-white py-16 text-center">
      <SearchX className="mb-3 h-10 w-10 text-slate-400" />
      <p className="text-lg font-semibold text-slate-700">{title}</p>
      <p className="mt-1 text-sm text-slate-500">{message}</p>
    </div>
  );
}
