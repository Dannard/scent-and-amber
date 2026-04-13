import { CheckoutData } from "@/types/commerce";

export const checkoutDefaults: CheckoutData = {
  contact: {
    email: "",
    phone: "",
  },
  shipping: {
    fullName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "United States",
  },
  payment: {
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  },
  deliveryMethod: "standard",
};

export function validateStep(step: number, data: CheckoutData) {
  if (step === 0) {
    return Boolean(data.contact.email && data.contact.phone);
  }

  if (step === 1) {
    const required = [
      data.shipping.fullName,
      data.shipping.addressLine1,
      data.shipping.city,
      data.shipping.state,
      data.shipping.postalCode,
      data.shipping.country,
    ];
    return required.every(Boolean);
  }

  if (step === 2) {
    const required = [data.payment.cardName, data.payment.cardNumber, data.payment.expiry, data.payment.cvc];
    return required.every(Boolean);
  }

  return true;
}

export function validateVariantSelection(sizeLabel: string | null) {
  return Boolean(sizeLabel);
}
