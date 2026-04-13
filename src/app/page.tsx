import { BundleSetStrip } from "@/components/commerce/bundle-set-strip";
import { ProductCard } from "@/components/commerce/product-card";
import { ReviewBlock } from "@/components/commerce/review-block";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { collections, products, reviews } from "@/lib/catalog";
import Link from "next/link";

const bestSellers = products.filter((product) => product.isBestSeller).slice(0, 3);

export default function Home() {
  return (
    <>
      <section className="border-b border-brand-border py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.34em] text-brand-muted">Scent & Ember</p>
              <h1 className="mt-4 max-w-3xl font-display text-[2.8rem] leading-[0.98] text-brand-cream sm:text-[4.5rem] lg:text-[5.3rem]">
                Fragrance designed to leave a quiet impression.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-brand-muted">
                Layered scents made for everyday wear, evening routines, and the moments in between.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href="/shop">Shop Fragrances</ButtonLink>
                <ButtonLink href="/collections" variant="secondary">
                  Explore Collections
                </ButtonLink>
              </div>
              <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 text-xs uppercase tracking-[0.18em] text-brand-muted sm:grid-cols-4">
                <p>Amber</p>
                <p>Woody</p>
                <p>Fresh</p>
                <p>Floral</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-brand-border bg-brand-panel/30">
              <img
                src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1400&q=80"
                alt="Scent & Ember hero product visual"
                className="h-[440px] w-full object-cover transition duration-500 hover:scale-[1.02] sm:h-[560px]"
              />
            </div>
          </div>
        </Container>
      </section>

      <Section eyebrow="Featured" title="Best Sellers">
        <Container className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Container>
      </Section>

      <Section eyebrow="Collections" title="Shop by Scent Family, Mood, or Occasion">
        <Container className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {collections.slice(0, 3).map((collection) => (
            <Link
              key={collection.id}
              href={`/collections/${collection.slug}`}
              className="group overflow-hidden rounded-3xl border border-brand-border bg-brand-panel/20"
            >
              <img
                src={collection.heroImage}
                alt={collection.title}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="space-y-2 p-5">
                <h3 className="font-display text-[2rem] leading-tight text-brand-cream">{collection.title}</h3>
                <p className="text-sm leading-7 text-brand-muted">{collection.description}</p>
              </div>
            </Link>
          ))}
        </Container>
      </Section>

      <Section eyebrow="Why Customers Love It" title="Built for Daily Ritual, Not Shelf Display">
        <Container className="grid gap-4 sm:grid-cols-3">
          {[
            "Balanced projection that sits close and refined",
            "Clear note storytelling before checkout",
            "Flexible sizes for first purchase or repeat buy",
          ].map((item) => (
            <div key={item} className="rounded-3xl border border-brand-border bg-brand-panel/30 p-5 text-sm leading-7 text-brand-muted">
              {item}
            </div>
          ))}
        </Container>
      </Section>

      <Section eyebrow="Reviews" title="Real Purchase Feedback">
        <Container>
          <ReviewBlock reviews={reviews.slice(0, 4)} />
        </Container>
      </Section>

      <Section>
        <Container>
          <BundleSetStrip />
        </Container>
      </Section>

      <Section eyebrow="Brand Story" title="Modern Perfumery, Local Point of View">
        <Container className="grid gap-8 rounded-3xl border border-brand-border bg-brand-panel/20 p-8 lg:grid-cols-2">
          <div>
            <p className="text-sm leading-8 text-brand-muted">
              Scent & Ember develops fragrances to feel polished in daily life: from commute and meetings to late
              dinners. Each composition is built with a clear top-heart-base progression so customers understand what
              they are buying and how it will wear over time.
            </p>
            <ButtonLink href="/brand-story" className="mt-6" variant="secondary">
              Read Brand Story
            </ButtonLink>
          </div>
          <img
            src="https://images.unsplash.com/photo-1458538977777-0549b2370168?auto=format&fit=crop&w=1200&q=80"
            alt="Brand craft visual"
            className="h-72 w-full rounded-2xl object-cover"
          />
        </Container>
      </Section>
    </>
  );
}
