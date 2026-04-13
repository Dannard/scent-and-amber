import { CartItem } from "@/types/commerce";

export function addToCart(items: CartItem[], nextItem: CartItem) {
  const match = items.find(
    (item) => item.productId === nextItem.productId && item.sizeLabel === nextItem.sizeLabel,
  );

  if (!match) {
    return [...items, nextItem];
  }

  return items.map((item) =>
    item.productId === nextItem.productId && item.sizeLabel === nextItem.sizeLabel
      ? { ...item, quantity: item.quantity + nextItem.quantity }
      : item,
  );
}

export function updateQuantity(items: CartItem[], productId: string, sizeLabel: string, quantity: number) {
  if (quantity <= 0) {
    return items.filter((item) => !(item.productId === productId && item.sizeLabel === sizeLabel));
  }

  return items.map((item) =>
    item.productId === productId && item.sizeLabel === sizeLabel ? { ...item, quantity } : item,
  );
}

export function removeFromCart(items: CartItem[], productId: string, sizeLabel: string) {
  return items.filter((item) => !(item.productId === productId && item.sizeLabel === sizeLabel));
}

export function getSubtotal(items: CartItem[]) {
  return items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
}
