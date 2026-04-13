"use client";

import { useCart } from "@/components/commerce/cart-context";
import { Button, ButtonLink } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { checkoutDefaults, validateStep } from "@/lib/checkout";
import { formatCurrency } from "@/lib/utils";
import { CheckoutData } from "@/types/commerce";
import { useMemo, useState } from "react";

const steps = ["Information", "Shipping", "Payment", "Review"];

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="space-y-2">
      <span className="text-[11px] uppercase tracking-[0.22em] text-brand-muted">{label}</span>
      {children}
    </label>
  );
}

export function CheckoutClient() {
  const { items, subtotal, clearCart } = useCart();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<CheckoutData>(checkoutDefaults);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const shippingCost = data.deliveryMethod === "express" ? 18 : 8;
  const total = subtotal + shippingCost;

  const canProceed = useMemo(() => validateStep(step, data), [step, data]);

  if (!items.length && !orderPlaced) {
    return (
      <div className="rounded-3xl border border-brand-border bg-brand-panel/40 p-8 text-center">
        <h2 className="font-display text-[2.2rem] leading-tight text-brand-cream">No items ready for checkout</h2>
        <p className="mt-3 text-sm text-brand-muted">Add at least one fragrance before completing your order.</p>
        <ButtonLink href="/shop" className="mt-6">
          Return to Shop
        </ButtonLink>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="rounded-3xl border border-brand-border bg-brand-panel/40 p-8 text-center">
        <h2 className="font-display text-[2.5rem] leading-tight text-brand-cream">Order Confirmed</h2>
        <p className="mt-3 text-sm leading-7 text-brand-muted">
          Your confirmation UI is complete. Hook this step to a payment/order API when backend goes live.
        </p>
        <ButtonLink href="/shop" className="mt-6">
          Continue Shopping
        </ButtonLink>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.55fr_1fr]">
      <div className="rounded-3xl border border-brand-border bg-brand-panel/30 p-6 sm:p-7">
        <div className="mb-7 flex flex-wrap gap-2">
          {steps.map((label, index) => (
            <span
              key={label}
              className={`rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.2em] ${
                index <= step
                  ? "border-brand-gold bg-brand-gold/20 text-brand-cream"
                  : "border-brand-border text-brand-muted"
              }`}
            >
              {index + 1}. {label}
            </span>
          ))}
        </div>

        {step === 0 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Email">
              <Input
                placeholder="you@email.com"
                type="email"
                value={data.contact.email}
                onChange={(event) =>
                  setData((prev) => ({ ...prev, contact: { ...prev.contact, email: event.target.value } }))
                }
              />
            </Field>
            <Field label="Phone">
              <Input
                placeholder="+1 555 123 4567"
                value={data.contact.phone}
                onChange={(event) =>
                  setData((prev) => ({ ...prev, contact: { ...prev.contact, phone: event.target.value } }))
                }
              />
            </Field>
          </div>
        ) : null}

        {step === 1 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full name">
              <Input
                placeholder="Full name"
                value={data.shipping.fullName}
                onChange={(event) =>
                  setData((prev) => ({ ...prev, shipping: { ...prev.shipping, fullName: event.target.value } }))
                }
              />
            </Field>
            <Field label="Address line 1">
              <Input
                placeholder="Address line 1"
                value={data.shipping.addressLine1}
                onChange={(event) =>
                  setData((prev) => ({ ...prev, shipping: { ...prev.shipping, addressLine1: event.target.value } }))
                }
              />
            </Field>
            <Field label="Address line 2">
              <Input
                placeholder="Apartment, suite, etc."
                value={data.shipping.addressLine2}
                onChange={(event) =>
                  setData((prev) => ({ ...prev, shipping: { ...prev.shipping, addressLine2: event.target.value } }))
                }
              />
            </Field>
            <Field label="City">
              <Input
                placeholder="City"
                value={data.shipping.city}
                onChange={(event) =>
                  setData((prev) => ({ ...prev, shipping: { ...prev.shipping, city: event.target.value } }))
                }
              />
            </Field>
            <Field label="State">
              <Input
                placeholder="State"
                value={data.shipping.state}
                onChange={(event) =>
                  setData((prev) => ({ ...prev, shipping: { ...prev.shipping, state: event.target.value } }))
                }
              />
            </Field>
            <Field label="Postal code">
              <Input
                placeholder="Postal code"
                value={data.shipping.postalCode}
                onChange={(event) =>
                  setData((prev) => ({ ...prev, shipping: { ...prev.shipping, postalCode: event.target.value } }))
                }
              />
            </Field>
            <Field label="Country">
              <Select
                value={data.shipping.country}
                onChange={(event) =>
                  setData((prev) => ({ ...prev, shipping: { ...prev.shipping, country: event.target.value } }))
                }
              >
                <option>United States</option>
                <option>Malaysia</option>
                <option>Singapore</option>
                <option>United Kingdom</option>
              </Select>
            </Field>
            <Field label="Delivery method">
              <Select
                value={data.deliveryMethod}
                onChange={(event) =>
                  setData((prev) => ({ ...prev, deliveryMethod: event.target.value as CheckoutData["deliveryMethod"] }))
                }
              >
                <option value="standard">Standard Delivery</option>
                <option value="express">Express Delivery</option>
              </Select>
            </Field>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Cardholder name">
              <Input
                placeholder="Name on card"
                value={data.payment.cardName}
                onChange={(event) =>
                  setData((prev) => ({ ...prev, payment: { ...prev.payment, cardName: event.target.value } }))
                }
              />
            </Field>
            <Field label="Card number">
              <Input
                placeholder="1234 5678 9012 3456"
                value={data.payment.cardNumber}
                onChange={(event) =>
                  setData((prev) => ({ ...prev, payment: { ...prev.payment, cardNumber: event.target.value } }))
                }
              />
            </Field>
            <Field label="Expiry">
              <Input
                placeholder="MM/YY"
                value={data.payment.expiry}
                onChange={(event) =>
                  setData((prev) => ({ ...prev, payment: { ...prev.payment, expiry: event.target.value } }))
                }
              />
            </Field>
            <Field label="CVC">
              <Input
                placeholder="CVC"
                value={data.payment.cvc}
                onChange={(event) =>
                  setData((prev) => ({ ...prev, payment: { ...prev.payment, cvc: event.target.value } }))
                }
              />
            </Field>
          </div>
        ) : null}

        {step === 3 ? (
          <div className="space-y-4 rounded-2xl border border-brand-border bg-brand-panel/30 p-4 text-sm text-brand-muted">
            <p>Contact: {data.contact.email}</p>
            <p>
              Shipping: {data.shipping.fullName}, {data.shipping.addressLine1}, {data.shipping.city}, {data.shipping.country}
            </p>
            <p>Delivery: {data.deliveryMethod === "express" ? "Express" : "Standard"}</p>
            <p>Payment: Card ending in {data.payment.cardNumber.slice(-4) || "••••"}</p>
          </div>
        ) : null}

        <div className="mt-8 flex flex-wrap gap-3">
          {step > 0 ? (
            <Button variant="secondary" onClick={() => setStep((prev) => prev - 1)}>
              Back
            </Button>
          ) : null}
          {step < steps.length - 1 ? (
            <Button onClick={() => setStep((prev) => prev + 1)} disabled={!canProceed}>
              Continue
            </Button>
          ) : (
            <Button
              onClick={() => {
                setOrderPlaced(true);
                clearCart();
              }}
            >
              Place Order
            </Button>
          )}
        </div>
      </div>

      <aside className="rounded-3xl border border-brand-border bg-brand-panel/40 p-6">
        <h3 className="font-display text-[2rem] leading-tight text-brand-cream">Order Summary</h3>
        <div className="mt-5 space-y-3 text-sm text-brand-muted">
          {items.map((item) => (
            <div key={`${item.productId}-${item.sizeLabel}`} className="flex items-center justify-between gap-4">
              <span>
                {item.productName} ({item.sizeLabel}) x {item.quantity}
              </span>
              <span>{formatCurrency(item.quantity * item.unitPrice)}</span>
            </div>
          ))}
          <div className="flex items-center justify-between border-t border-brand-border pt-3">
            <span>Subtotal</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Shipping</span>
            <span>{formatCurrency(shippingCost)}</span>
          </div>
          <div className="flex items-center justify-between text-brand-cream">
            <span>Total</span>
            <span className="font-display text-[1.9rem]">{formatCurrency(total)}</span>
          </div>
        </div>
      </aside>
    </div>
  );
}
