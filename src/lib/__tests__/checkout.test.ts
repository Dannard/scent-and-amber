import { checkoutDefaults, validateStep, validateVariantSelection } from "@/lib/checkout";

describe("checkout validation", () => {
  it("requires contact information on step 0", () => {
    expect(validateStep(0, checkoutDefaults)).toBe(false);
    expect(
      validateStep(0, {
        ...checkoutDefaults,
        contact: { email: "hello@example.com", phone: "5551234" },
      }),
    ).toBe(true);
  });

  it("validates shipping and payment steps", () => {
    const shippingReady = {
      ...checkoutDefaults,
      shipping: {
        fullName: "A",
        addressLine1: "123 Road",
        addressLine2: "",
        city: "Austin",
        state: "TX",
        postalCode: "75001",
        country: "United States",
      },
    };

    expect(validateStep(1, shippingReady)).toBe(true);

    const paymentReady = {
      ...checkoutDefaults,
      payment: {
        cardName: "A",
        cardNumber: "4111111111111111",
        expiry: "12/29",
        cvc: "123",
      },
    };

    expect(validateStep(2, paymentReady)).toBe(true);
  });

  it("enforces variant selection", () => {
    expect(validateVariantSelection(null)).toBe(false);
    expect(validateVariantSelection("50ml")).toBe(true);
  });
});
