"use client";

import { CartProvider } from "@/components/commerce/cart-context";
import { ThemeProvider } from "@/components/layout/theme-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <CartProvider>{children}</CartProvider>
    </ThemeProvider>
  );
}
