"use client";

import { useCart } from "@/components/commerce/cart-context";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/collections", label: "Collections" },
  { href: "/cart", label: "Cart" },
];

export function MobileBar() {
  const pathname = usePathname();
  const { itemCount } = useCart();

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-brand-border bg-brand-night/95 px-3 py-2 backdrop-blur md:hidden">
      <div className="grid grid-cols-4 gap-2 text-center text-xs">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "rounded-lg px-2 py-2 text-brand-muted transition hover:text-brand-cream",
              pathname === link.href && "bg-brand-panel text-brand-cream",
            )}
          >
            {link.label}
            {link.href === "/cart" ? ` (${itemCount})` : ""}
          </Link>
        ))}
      </div>
    </div>
  );
}
