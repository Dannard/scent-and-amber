import { Accordion } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";

export default function BrandStoryPage() {
  return (
    <Container className="py-12">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-brand-muted">Brand Story</p>
          <h1 className="mt-2 font-display text-[2.7rem] sm:text-[3.5rem] leading-tight text-brand-cream">Scent Built for Everyday Presence</h1>
          <p className="mt-6 text-sm leading-8 text-brand-muted">
            Scent & Ember creates modern fragrance wardrobes with clarity first: transparent notes, balanced wear, and
            practical sizing for repeat purchase. Our goal is simple: make fine fragrance feel approachable without
            losing depth.
          </p>
          <p className="mt-4 text-sm leading-8 text-brand-muted">
            Every formula is composed around a clear progression from top to base, so customers can choose by mood,
            context, and season with confidence.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1400&q=80"
          alt="Brand story visual"
          className="h-[420px] w-full rounded-3xl object-cover"
        />
      </div>

      <div className="mt-12">
        <Accordion
          items={[
            {
              label: "Scent Philosophy",
              content:
                "Each scent balances immediate character with all-day wearability. We avoid overly loud profiles and focus on a composed trail.",
            },
            {
              label: "Materials and Craft",
              content:
                "Formulations are built around high-impact naturals and modern aroma molecules chosen for smooth diffusion and skin comfort.",
            },
            {
              label: "Daily Ritual",
              content:
                "Designed for layering across routine: one spray before meetings, one before dinner, and optional layering with discovery sets.",
            },
          ]}
        />
      </div>
    </Container>
  );
}
