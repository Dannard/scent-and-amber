import { ProductCard } from "@/components/commerce/product-card";
import { Product } from "@/types/commerce";

export function RelatedProducts({ products }: { products: Product[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
