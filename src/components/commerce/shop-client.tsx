"use client";

import { ProductCard } from "@/components/commerce/product-card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { filterProducts, products } from "@/lib/catalog";
import { useMemo, useState } from "react";

const families = ["All", ...new Set(products.map((product) => product.family))];
const moods = ["All", ...new Set(products.map((product) => product.mood))];
const occasions = ["All", ...new Set(products.map((product) => product.occasion))];

export function ShopClient() {
  const [query, setQuery] = useState("");
  const [family, setFamily] = useState("All");
  const [mood, setMood] = useState("All");
  const [occasion, setOccasion] = useState("All");

  const filtered = useMemo(
    () => filterProducts(products, { query, family, mood, occasion }),
    [query, family, mood, occasion],
  );

  return (
    <div className="space-y-8">
      <div className="grid gap-3 rounded-3xl border border-brand-border bg-brand-panel/30 p-4 sm:grid-cols-2 lg:grid-cols-4">
        <Input placeholder="Search scent or profile" value={query} onChange={(event) => setQuery(event.target.value)} />
        <Select value={family} onChange={(event) => setFamily(event.target.value)}>
          {families.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
        <Select value={mood} onChange={(event) => setMood(event.target.value)}>
          {moods.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
        <Select value={occasion} onChange={(event) => setOccasion(event.target.value)}>
          {occasions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {filtered.length === 0 ? <p className="text-sm text-brand-muted">No scents matched this filter set.</p> : null}
    </div>
  );
}
