"use client";

import { useCart } from "@/components/commerce/cart-context";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ThemeToggle = dynamic(
  () => import("@/components/layout/theme-toggle").then((module) => module.ThemeToggle),
  {
    ssr: false,
    loading: () => (
      <span className="inline-flex rounded-full border border-brand-border px-4 py-2 text-xs uppercase tracking-[0.2em] text-brand-muted">
        Theme
      </span>
    ),
  },
);

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/collections", label: "Collections" },
  { href: "/brand-story", label: "Brand Story" },
  { href: "/faq", label: "FAQ" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border/60 bg-brand-night/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-2">
        <Link href="/" className="font-display text-2xl tracking-wide text-brand-cream">
          Scent & Ember
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm text-brand-muted transition hover:text-brand-cream",
                pathname === link.href && "text-brand-cream",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <ButtonLink href="/cart" variant="secondary">
            Cart ({itemCount})
          </ButtonLink>
        </div>
        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
