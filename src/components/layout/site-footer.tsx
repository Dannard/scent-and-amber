import { Container } from "@/components/ui/container";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-brand-border/70 bg-brand-panel/40 pb-24 pt-12 md:pb-12">
      <Container className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h3 className="font-display text-2xl text-brand-cream">Scent & Ember</h3>
          <p className="mt-3 text-sm leading-7 text-brand-muted">
            Layered fragrance made for daily rituals, late hours, and the moments in between.
          </p>
        </div>
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-brand-muted">Shop</p>
          <div className="space-y-2 text-sm text-brand-muted">
            <Link className="block hover:text-brand-cream" href="/shop">
              All Fragrances
            </Link>
            <Link className="block hover:text-brand-cream" href="/collections">
              Collections
            </Link>
          </div>
        </div>
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-brand-muted">Company</p>
          <div className="space-y-2 text-sm text-brand-muted">
            <Link className="block hover:text-brand-cream" href="/brand-story">
              Brand Story
            </Link>
            <Link className="block hover:text-brand-cream" href="/faq">
              FAQ
            </Link>
          </div>
        </div>
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-brand-muted">Contact</p>
          <p className="text-sm text-brand-muted">care@scentandember.com</p>
        </div>
      </Container>
    </footer>
  );
}
