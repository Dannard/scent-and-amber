import { ButtonLink } from "@/components/ui/button";

export function BundleSetStrip() {
  return (
    <div className="rounded-3xl border border-brand-border bg-gradient-to-r from-brand-panel to-brand-night p-6 sm:flex sm:items-center sm:justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-brand-muted">Bundle & Save</p>
        <h3 className="mt-2 font-display text-3xl text-brand-cream">Discovery Trio</h3>
        <p className="mt-2 max-w-xl text-sm text-brand-muted">
          Build a three-scent set for wardrobe layering across day, office, and evening moments.
        </p>
      </div>
      <ButtonLink href="/collections" className="mt-5 sm:mt-0" variant="secondary">
        Explore Sets
      </ButtonLink>
    </div>
  );
}
