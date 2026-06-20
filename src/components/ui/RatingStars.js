import { Star } from "lucide-react";

export default function RatingStars({ rating = 0, max = 5 }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rated ${rating} out of ${max}`}>
      {Array.from({ length: max }).map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${
            index < rating ? "fill-blue-600 text-blue-600" : "fill-slate-200 text-slate-200"
          }`}
        />
      ))}
    </div>
  );
}
