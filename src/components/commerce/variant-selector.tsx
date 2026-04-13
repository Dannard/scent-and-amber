import { ProductSize } from "@/types/commerce";
import { formatCurrency } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function VariantSelector({
  sizes,
  selected,
  onSelect,
}: {
  sizes: ProductSize[];
  selected: string | null;
  onSelect: (label: string) => void;
}) {
  return (
    <div className="space-y-3">
      <p className="text-sm uppercase tracking-[0.2em] text-brand-muted">Choose size</p>
      <div className="grid grid-cols-3 gap-3">
        {sizes.map((size) => (
          <button
            type="button"
            key={size.label}
            onClick={() => onSelect(size.label)}
            className={cn(
              "rounded-2xl border px-3 py-3 text-left",
              selected === size.label
                ? "border-brand-gold bg-brand-gold/20 text-brand-cream"
                : "border-brand-border bg-brand-panel text-brand-muted hover:text-brand-cream",
            )}
          >
            <p className="font-medium">{size.label}</p>
            <p className="text-xs">{formatCurrency(size.price)}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
