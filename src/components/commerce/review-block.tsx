import { Review } from "@/types/commerce";

export function ReviewBlock({ reviews }: { reviews: Review[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {reviews.map((review) => (
        <article key={review.id} className="rounded-2xl border border-brand-border bg-brand-panel/30 p-5">
          <p className="text-sm text-brand-cream">{"★".repeat(review.rating)}</p>
          <p className="mt-2 text-sm leading-7 text-brand-muted">{review.text}</p>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-brand-muted">
            {review.author} • {review.date}
          </p>
        </article>
      ))}
    </div>
  );
}
