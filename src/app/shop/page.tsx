import { ShopClient } from "@/components/commerce/shop-client";
import { Container } from "@/components/ui/container";

export default function ShopPage() {
  return (
    <Container className="py-12">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.3em] text-brand-muted">Shop</p>
        <h1 className="mt-2 font-display text-[2.6rem] sm:text-[3.4rem] leading-tight text-brand-cream">Find Your Signature Scent</h1>
      </div>
      <ShopClient />
    </Container>
  );
}
