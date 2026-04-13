"use client";

import { addToCart, getSubtotal, removeFromCart, updateQuantity } from "@/lib/cart";
import { CartItem } from "@/types/commerce";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

type CartContextType = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (productId: string, sizeLabel: string) => void;
  updateQty: (productId: string, sizeLabel: string, quantity: number) => void;
  clearCart: () => void;
  subtotal: number;
  itemCount: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);
const STORAGE_KEY = "scent-ember-cart";

function hasStorage() {
  return (
    typeof window !== "undefined" &&
    typeof window.localStorage?.getItem === "function" &&
    typeof window.localStorage?.setItem === "function"
  );
}

function getInitialCart() {
  if (!hasStorage()) {
    return [] as CartItem[];
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return [] as CartItem[];
  }

  try {
    return JSON.parse(raw) as CartItem[];
  } catch {
    return [] as CartItem[];
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(getInitialCart);

  useEffect(() => {
    if (hasStorage()) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      addItem: (item: CartItem) => setItems((prev) => addToCart(prev, item)),
      removeItem: (productId: string, sizeLabel: string) =>
        setItems((prev) => removeFromCart(prev, productId, sizeLabel)),
      updateQty: (productId: string, sizeLabel: string, quantity: number) =>
        setItems((prev) => updateQuantity(prev, productId, sizeLabel, quantity)),
      clearCart: () => setItems([]),
      subtotal: getSubtotal(items),
      itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
    }),
    [items],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}
