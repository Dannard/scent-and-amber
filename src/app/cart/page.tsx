import { CartClient } from "@/components/commerce/cart-client";
import { Container } from "@/components/ui/container";

export default function CartPage() {
  return (
    <Container className="py-12">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.3em] text-brand-muted">Cart</p>
        <h1 className="mt-2 font-display text-[2.25rem] sm:text-[2.9rem] leading-tight text-brand-cream">Your Bag</h1>
      </div>
      <CartClient />
    </Container>
  );
}
