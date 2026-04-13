"use client";

import { BundleSetStrip } from "@/components/commerce/bundle-set-strip";
import { NotesBreakdown } from "@/components/commerce/notes-breakdown";
import { ProductGallery } from "@/components/commerce/product-gallery";
import { RelatedProducts } from "@/components/commerce/related-products";
import { ReviewBlock } from "@/components/commerce/review-block";
import { VariantSelector } from "@/components/commerce/variant-selector";
import { useCart } from "@/components/commerce/cart-context";
import { Button, ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Price } from "@/components/ui/price";
import { Section } from "@/components/ui/section";
import { validateVariantSelection } from "@/lib/checkout";
import { Product, Review } from "@/types/commerce";
import { useMemo, useState } from "react";

export function ProductDetailClient({
  product,
  reviews,
  related,
}: {
  product: Product;
  reviews: Review[];
  related: Product[];
}) {
  const [size, setSize] = useState<string | null>(product.sizes[1]?.label ?? null);
  const [error, setError] = useState("");
  const { addItem } = useCart();

  const selectedSize = useMemo(
    () => product.sizes.find((option) => option.label === size) ?? product.sizes[0],
    [product.sizes, size],
  );

  const handleAdd = () => {
    if (!validateVariantSelection(size)) {
      setError("Please choose a size first.");
      return;
    }

    addItem({
      productId: product.id,
      productName: product.name,
      image: product.images[0],
      sizeLabel: selectedSize.label,
      unitPrice: selectedSize.price,
      quantity: 1,
    });
    setError("");
  };

  return (
    <>
      <Container className="pt-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <ProductGallery images={product.images} alt={product.name} />
          <div className="space-y-7 lg:sticky lg:top-24 lg:self-start">
            <div className="space-y-3">
              <p className="text-[11px] uppercase tracking-[0.32em] text-brand-muted">{product.family}</p>
              <h1 className="font-display text-[2.9rem] leading-none text-brand-cream sm:text-[4rem]">{product.name}</h1>
              <p className="text-sm leading-7 text-brand-muted">{product.subtitle}</p>
            </div>

            <div className="flex items-end justify-between gap-4 rounded-2xl border border-brand-border bg-brand-panel/30 p-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-brand-muted">Selected Size</p>
                <p className="mt-1 text-sm text-brand-cream">{selectedSize.label}</p>
              </div>
              <Price amount={selectedSize.price} />
            </div>

            <p className="rounded-2xl border border-brand-border bg-brand-panel/40 p-4 text-sm leading-7 text-brand-muted">
              {product.scentProfile}
            </p>

            <VariantSelector sizes={product.sizes} selected={size} onSelect={setSize} />
            {error ? <p className="text-sm text-red-300">{error}</p> : null}

            <div className="flex gap-3">
              <Button className="flex-1" onClick={handleAdd}>
                Add to Cart
              </Button>
              <ButtonLink href="/cart" variant="secondary" className="flex-1 text-center">
                View Cart
              </ButtonLink>
            </div>

            <div className="grid gap-3 rounded-2xl border border-brand-border bg-brand-panel/30 p-4 sm:grid-cols-2">
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-brand-muted">Mood</p>
                <p className="mt-1 text-sm text-brand-cream">{product.mood}</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-brand-muted">Occasion</p>
                <p className="mt-1 text-sm text-brand-cream">{product.occasion}</p>
              </div>
              <div className="sm:col-span-2">
                <p className="text-[11px] uppercase tracking-[0.25em] text-brand-muted">How it wears</p>
                <p className="mt-1 text-sm leading-7 text-brand-muted">{product.wearingExperience}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Section className="pt-12" eyebrow="Scent Architecture" title="Notes Breakdown">
        <Container>
          <NotesBreakdown notes={product.notes} />
        </Container>
      </Section>

      <Section eyebrow="Feedback" title="What Customers Are Saying">
        <Container>
          <ReviewBlock reviews={reviews} />
        </Container>
      </Section>

      <Section>
        <Container>
          <BundleSetStrip />
        </Container>
      </Section>

      <Section eyebrow="Pairing" title="Related Fragrances">
        <Container>
          <RelatedProducts products={related} />
        </Container>
      </Section>

      <div className="fixed inset-x-0 bottom-16 z-40 border-t border-brand-border bg-brand-night/95 p-3 backdrop-blur md:hidden">
        <Container className="flex items-center gap-3 px-0">
          <div>
            <p className="text-xs text-brand-muted">{selectedSize.label}</p>
            <p className="text-sm text-brand-cream">{selectedSize.price}</p>
          </div>
          <Button className="flex-1" onClick={handleAdd}>
            Add to Cart
          </Button>
        </Container>
      </div>
    </>
  );
}
