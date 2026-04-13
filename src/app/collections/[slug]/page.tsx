import { ProductCard } from "@/components/commerce/product-card";
import { Container } from "@/components/ui/container";
import { getCollectionBySlug, products } from "@/lib/catalog";
import { notFound } from "next/navigation";

export default async function CollectionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    notFound();
  }

  const filtered = products.filter((product) => {
    const byFamily = !collection.filterRules.family || collection.filterRules.family === product.family;
    const byMood = !collection.filterRules.mood || collection.filterRules.mood === product.mood;
    const byOccasion = !collection.filterRules.occasion || collection.filterRules.occasion === product.occasion;
    return byFamily && byMood && byOccasion;
  });

  return (
    <Container className="py-12">
      <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-brand-muted">Collection</p>
          <h1 className="mt-2 font-display text-[2.7rem] sm:text-[3.6rem] leading-tight text-brand-cream">{collection.title}</h1>
          <p className="mt-4 max-w-xl text-sm leading-8 text-brand-muted">{collection.description}</p>
        </div>
        <img src={collection.heroImage} alt={collection.title} className="h-64 w-full rounded-3xl object-cover" />
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
}
