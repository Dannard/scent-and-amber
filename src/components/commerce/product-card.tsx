import { Badge } from "@/components/ui/badge";
import { Price } from "@/components/ui/price";
import { Product } from "@/types/commerce";
import Link from "next/link";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-brand-border bg-brand-panel/30">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          {product.isBestSeller ? <Badge className="absolute left-4 top-4">Best Seller</Badge> : null}
        </div>
        <div className="space-y-3 p-5">
          <div>
            <h3 className="font-display text-2xl text-brand-cream">{product.name}</h3>
            <p className="text-sm text-brand-muted">{product.subtitle}</p>
          </div>
          <div className="flex items-center justify-between">
            <Price amount={product.price} />
            <div className="text-right text-xs text-brand-muted">
              <p>{product.rating.toFixed(1)} / 5</p>
              <p>{product.reviewCount} reviews</p>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
