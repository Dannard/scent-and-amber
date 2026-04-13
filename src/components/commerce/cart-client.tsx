"use client";

import { BundleSetStrip } from "@/components/commerce/bundle-set-strip";
import { useCart } from "@/components/commerce/cart-context";
import { Button, ButtonLink } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";

export function CartClient() {
  const { items, updateQty, removeItem, subtotal, clearCart } = useCart();

  if (!items.length) {
    return (
      <div className="rounded-3xl border border-brand-border bg-brand-panel/30 p-8 text-center">
        <h2 className="font-display text-3xl text-brand-cream">Your cart is empty</h2>
        <p className="mt-3 text-sm text-brand-muted">Start with a signature scent or a discovery set.</p>
        <ButtonLink href="/shop" className="mt-6">
          Shop Fragrances
        </ButtonLink>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        {items.map((item) => (
          <article key={`${item.productId}-${item.sizeLabel}`} className="rounded-3xl border border-brand-border bg-brand-panel/20 p-4 sm:flex sm:items-center sm:gap-4">
            <img src={item.image} alt={item.productName} className="h-24 w-20 rounded-xl object-cover" />
            <div className="mt-3 flex-1 sm:mt-0">
              <h3 className="font-display text-2xl text-brand-cream">{item.productName}</h3>
              <p className="text-xs uppercase tracking-[0.2em] text-brand-muted">{item.sizeLabel}</p>
            </div>
            <div className="mt-3 flex items-center gap-3 sm:mt-0">
              <input
                aria-label={`Quantity for ${item.productName}`}
                className="w-16 rounded-lg border border-brand-border bg-brand-panel px-2 py-1 text-brand-cream"
                type="number"
                min={1}
                value={item.quantity}
                onChange={(event) => updateQty(item.productId, item.sizeLabel, Number(event.target.value))}
              />
              <p className="min-w-20 text-right text-sm text-brand-cream">{formatCurrency(item.unitPrice * item.quantity)}</p>
              <Button variant="ghost" onClick={() => removeItem(item.productId, item.sizeLabel)}>
                Remove
              </Button>
            </div>
          </article>
        ))}
      </div>

      <BundleSetStrip />

      <div className="rounded-3xl border border-brand-border bg-brand-panel/40 p-6">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-brand-muted">Subtotal</p>
          <p className="font-display text-3xl text-brand-cream">{formatCurrency(subtotal)}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/checkout" className="min-w-36">
            Checkout
          </ButtonLink>
          <Button variant="secondary" onClick={clearCart}>
            Clear Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
