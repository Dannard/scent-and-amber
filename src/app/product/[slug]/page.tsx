import { ProductDetailClient } from "@/components/commerce/product-detail-client";
import { getProductBySlug, getRelatedProducts, getReviewsForProduct } from "@/lib/catalog";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <ProductDetailClient
      product={product}
      reviews={getReviewsForProduct(product.id)}
      related={getRelatedProducts(product)}
    />
  );
}
