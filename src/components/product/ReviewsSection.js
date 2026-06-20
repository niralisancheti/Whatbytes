import RatingStars from "@/components/ui/RatingStars";

const SAMPLE_REVIEWS = [
  {
    id: 1,
    author: "Aarav Mehta",
    rating: 5,
    comment: "Exactly as described and arrived earlier than expected. Would buy again.",
  },
  {
    id: 2,
    author: "Priya Nair",
    rating: 4,
    comment: "Good quality for the price. Packaging could be better but the product itself is solid.",
  },
];

export default function ReviewsSection({ rating }) {
  return (
    <div className="mt-10 border-t border-slate-200 pt-6">
      <div className="mb-4 flex items-center gap-3">
        <h2 className="text-lg font-bold text-slate-900">Customer Reviews</h2>
        <RatingStars rating={rating} />
      </div>

      <div className="space-y-4">
        {SAMPLE_REVIEWS.map((review) => (
          <div key={review.id} className="rounded-lg bg-white p-4 shadow-sm">
            <div className="mb-1 flex items-center justify-between">
              <span className="font-medium text-slate-800">{review.author}</span>
              <RatingStars rating={review.rating} />
            </div>
            <p className="text-sm text-slate-600">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
