import { Collection, Product, Review } from "@/types/commerce";

export const products: Product[] = [
  {
    id: "prod-ember-noir",
    slug: "ember-noir",
    name: "Ember Noir",
    subtitle: "Smoky amber for late evenings",
    price: 129,
    images: [
      "https://images.unsplash.com/photo-1615634262417-5fef3c8e6a93?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: [
      { label: "30ml", ml: 30, price: 78 },
      { label: "50ml", ml: 50, price: 129 },
      { label: "100ml", ml: 100, price: 188 },
    ],
    scentProfile: "Warm, smoky, and quietly magnetic.",
    notes: {
      top: ["Pink Pepper", "Blood Orange"],
      heart: ["Rose Absolute", "Cedar"],
      base: ["Amber Resin", "Sandalwood", "Soft Musk"],
    },
    wearingExperience:
      "Opens bright and quickly settles into a smooth amber trail that sits close to skin for everyday wear.",
    collectionIds: ["family-amber", "mood-evening"],
    family: "Amber",
    mood: "Evening",
    occasion: "Dinner",
    isBestSeller: true,
    rating: 4.8,
    reviewCount: 138,
  },
  {
    id: "prod-velvet-fig",
    slug: "velvet-fig",
    name: "Velvet Fig",
    subtitle: "Creamy fig and woods",
    price: 122,
    images: [
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: [
      { label: "30ml", ml: 30, price: 74 },
      { label: "50ml", ml: 50, price: 122 },
      { label: "100ml", ml: 100, price: 176 },
    ],
    scentProfile: "Green sweetness with creamy depth.",
    notes: {
      top: ["Fig Leaf", "Bergamot"],
      heart: ["Iris", "Tea Accord"],
      base: ["Cashmere Wood", "Tonka Bean"],
    },
    wearingExperience:
      "Starts lush and green, then dries into soft woods that remain elegant through long afternoons.",
    collectionIds: ["family-woody", "mood-everyday"],
    family: "Woody",
    mood: "Everyday",
    occasion: "Office",
    isBestSeller: true,
    rating: 4.7,
    reviewCount: 96,
  },
  {
    id: "prod-citrus-thread",
    slug: "citrus-thread",
    name: "Citrus Thread",
    subtitle: "Bright citrus with airy florals",
    price: 105,
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1593487568720-92097fb460fb?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: [
      { label: "30ml", ml: 30, price: 63 },
      { label: "50ml", ml: 50, price: 105 },
      { label: "100ml", ml: 100, price: 152 },
    ],
    scentProfile: "Clean citrus cut with soft petals.",
    notes: {
      top: ["Yuzu", "Neroli"],
      heart: ["Orange Blossom", "White Tea"],
      base: ["Vetiver", "White Musk"],
    },
    wearingExperience:
      "A crisp opening that stays transparent and polished, ideal for warm weather and layered wear.",
    collectionIds: ["family-fresh", "mood-everyday"],
    family: "Fresh",
    mood: "Everyday",
    occasion: "Daytime",
    isBestSeller: false,
    rating: 4.6,
    reviewCount: 72,
  },
  {
    id: "prod-midnight-iris",
    slug: "midnight-iris",
    name: "Midnight Iris",
    subtitle: "Powdered iris and suede",
    price: 136,
    images: [
      "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1611080541599-8c6dbde6ed28?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: [
      { label: "30ml", ml: 30, price: 82 },
      { label: "50ml", ml: 50, price: 136 },
      { label: "100ml", ml: 100, price: 194 },
    ],
    scentProfile: "Soft powder, violet shadows, suede warmth.",
    notes: {
      top: ["Violet Leaf", "Pear"],
      heart: ["Iris Butter", "Orris"],
      base: ["Suede", "Labdanum", "Musk"],
    },
    wearingExperience:
      "A velvet-like scent that becomes smoother over time and wears close with a refined aura.",
    collectionIds: ["family-floral", "mood-evening"],
    family: "Floral",
    mood: "Evening",
    occasion: "Event",
    isBestSeller: false,
    rating: 4.7,
    reviewCount: 61,
  },
  {
    id: "prod-salt-skin",
    slug: "salt-skin",
    name: "Salt Skin",
    subtitle: "Mineral marine and skin musk",
    price: 118,
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: [
      { label: "30ml", ml: 30, price: 70 },
      { label: "50ml", ml: 50, price: 118 },
      { label: "100ml", ml: 100, price: 169 },
    ],
    scentProfile: "Mineral air with warm skin softness.",
    notes: {
      top: ["Sea Salt", "Bergamot"],
      heart: ["Marine Accord", "Sage"],
      base: ["Ambrox", "Skin Musk"],
    },
    wearingExperience:
      "Feels clean and breezy up front, then evolves into a soft salty-musk finish.",
    collectionIds: ["family-fresh", "mood-weekend"],
    family: "Fresh",
    mood: "Weekend",
    occasion: "Travel",
    isBestSeller: true,
    rating: 4.9,
    reviewCount: 187,
  },
  {
    id: "prod-cedar-veil",
    slug: "cedar-veil",
    name: "Cedar Veil",
    subtitle: "Dry woods with tea smoke",
    price: 132,
    images: [
      "https://images.unsplash.com/photo-1595425964072-3cbf7f2083a5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1610461888750-10bfc601b874?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: [
      { label: "30ml", ml: 30, price: 80 },
      { label: "50ml", ml: 50, price: 132 },
      { label: "100ml", ml: 100, price: 189 },
    ],
    scentProfile: "Dry cedar layered with smoked tea.",
    notes: {
      top: ["Black Tea", "Cardamom"],
      heart: ["Atlas Cedar", "Clary Sage"],
      base: ["Patchouli", "Sandalwood"],
    },
    wearingExperience:
      "Structured and clean with moderate projection, made for colder evenings and tailored outfits.",
    collectionIds: ["family-woody", "mood-evening"],
    family: "Woody",
    mood: "Evening",
    occasion: "Night Out",
    isBestSeller: false,
    rating: 4.5,
    reviewCount: 47,
  },
];

export const collections: Collection[] = [
  {
    id: "family-amber",
    slug: "amber-family",
    title: "Amber Family",
    description: "Resinous warmth, smoky depth, and soft golden dry-downs.",
    heroImage:
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1400&q=80",
    filterRules: { family: "Amber" },
  },
  {
    id: "family-woody",
    slug: "woody-family",
    title: "Woody Family",
    description: "Cedar, sandalwood, and textured accords for a grounded finish.",
    heroImage:
      "https://images.unsplash.com/photo-1458538977777-0549b2370168?auto=format&fit=crop&w=1400&q=80",
    filterRules: { family: "Woody" },
  },
  {
    id: "family-fresh",
    slug: "fresh-family",
    title: "Fresh Family",
    description: "Mineral citrus and airy florals for clean, daily wear.",
    heroImage:
      "https://images.unsplash.com/photo-1498049860654-af1a5c566876?auto=format&fit=crop&w=1400&q=80",
    filterRules: { family: "Fresh" },
  },
  {
    id: "mood-evening",
    slug: "evening-signatures",
    title: "Evening Signatures",
    description: "For dinners, late meetings, and understated evening moments.",
    heroImage:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=80",
    filterRules: { mood: "Evening" },
  },
  {
    id: "mood-everyday",
    slug: "everyday-core",
    title: "Everyday Core",
    description: "Versatile scents that stay balanced from morning to night.",
    heroImage:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80",
    filterRules: { mood: "Everyday" },
  },
];

export const reviews: Review[] = [
  {
    id: "rev-1",
    productId: "prod-ember-noir",
    author: "Mia K.",
    rating: 5,
    date: "2026-01-14",
    text: "Warm without feeling heavy. I reach for this when I want something polished but low-key.",
  },
  {
    id: "rev-2",
    productId: "prod-velvet-fig",
    author: "Ethan L.",
    rating: 4,
    date: "2026-02-03",
    text: "The fig opening is smooth and green, then it settles into soft woods. Great for workdays.",
  },
  {
    id: "rev-3",
    productId: "prod-salt-skin",
    author: "Nadia R.",
    rating: 5,
    date: "2026-02-28",
    text: "Clean and airy with a subtle trail. Easy to wear in humid weather.",
  },
  {
    id: "rev-4",
    productId: "prod-midnight-iris",
    author: "Jordan P.",
    rating: 4,
    date: "2026-03-10",
    text: "Powdery iris done right. Not too sweet, just soft and elegant.",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getCollectionBySlug(slug: string) {
  return collections.find((collection) => collection.slug === slug);
}

export function getReviewsForProduct(productId: string) {
  return reviews.filter((review) => review.productId === productId);
}

export type ProductFilter = {
  query?: string;
  family?: string;
  mood?: string;
  occasion?: string;
};

export function filterProducts(list: Product[], filter: ProductFilter) {
  return list.filter((product) => {
    const matchesQuery =
      !filter.query ||
      product.name.toLowerCase().includes(filter.query.toLowerCase()) ||
      product.subtitle.toLowerCase().includes(filter.query.toLowerCase());

    const matchesFamily = !filter.family || filter.family === "All" || product.family === filter.family;
    const matchesMood = !filter.mood || filter.mood === "All" || product.mood === filter.mood;
    const matchesOccasion =
      !filter.occasion || filter.occasion === "All" || product.occasion === filter.occasion;

    return matchesQuery && matchesFamily && matchesMood && matchesOccasion;
  });
}

export function getRelatedProducts(product: Product, limit = 3) {
  return products
    .filter(
      (candidate) =>
        candidate.id !== product.id &&
        (candidate.family === product.family ||
          candidate.mood === product.mood ||
          candidate.collectionIds.some((id) => product.collectionIds.includes(id))),
    )
    .slice(0, limit);
}
