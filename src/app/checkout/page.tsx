import { CheckoutClient } from "@/components/commerce/checkout-client";
import { Container } from "@/components/ui/container";

export default function CheckoutPage() {
  return (
    <Container className="py-12">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.3em] text-brand-muted">Checkout</p>
        <h1 className="mt-2 font-display text-[2.4rem] sm:text-[3.1rem] leading-tight text-brand-cream">Secure Checkout UI</h1>
      </div>
      <CheckoutClient />
    </Container>
  );
}
