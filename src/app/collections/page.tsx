import { Container } from "@/components/ui/container";
import { collections } from "@/lib/catalog";
import Link from "next/link";

export default function CollectionsPage() {
  return (
    <Container className="py-12">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.3em] text-brand-muted">Collections</p>
        <h1 className="mt-2 font-display text-[2.55rem] sm:text-[3.3rem] leading-tight text-brand-cream">By Scent Family, Mood, and Occasion</h1>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {collections.map((collection) => (
          <Link key={collection.id} href={`/collections/${collection.slug}`} className="group overflow-hidden rounded-3xl border border-brand-border bg-brand-panel/20">
            <img
              src={collection.heroImage}
              alt={collection.title}
              className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="space-y-2 p-5">
              <h2 className="font-display text-3xl text-brand-cream">{collection.title}</h2>
              <p className="text-sm text-brand-muted">{collection.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
