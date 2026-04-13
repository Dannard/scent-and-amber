export type ProductSize = {
  label: string;
  ml: number;
  price: number;
};

export type ScentNotes = {
  top: string[];
  heart: string[];
  base: string[];
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  price: number;
  images: string[];
  sizes: ProductSize[];
  scentProfile: string;
  notes: ScentNotes;
  wearingExperience: string;
  collectionIds: string[];
  family: string;
  mood: string;
  occasion: string;
  isBestSeller: boolean;
  rating: number;
  reviewCount: number;
};

export type Collection = {
  id: string;
  slug: string;
  title: string;
  description: string;
  heroImage: string;
  filterRules: Partial<Pick<Product, "family" | "mood" | "occasion">>;
};

export type Review = {
  id: string;
  productId: string;
  author: string;
  rating: number;
  date: string;
  text: string;
};

export type CartItem = {
  productId: string;
  productName: string;
  image: string;
  sizeLabel: string;
  quantity: number;
  unitPrice: number;
};

export type CheckoutContact = {
  email: string;
  phone: string;
};

export type CheckoutShipping = {
  fullName: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

export type CheckoutPayment = {
  cardName: string;
  cardNumber: string;
  expiry: string;
  cvc: string;
};

export type CheckoutData = {
  contact: CheckoutContact;
  shipping: CheckoutShipping;
  payment: CheckoutPayment;
  deliveryMethod: "standard" | "express";
};
