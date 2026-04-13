import { formatCurrency } from "@/lib/utils";

export function Price({ amount, compareAt }: { amount: number; compareAt?: number }) {
  return (
    <div className="flex items-end gap-3">
      <p className="font-display text-3xl text-brand-cream">{formatCurrency(amount)}</p>
      {compareAt ? <p className="text-sm text-brand-muted line-through">{formatCurrency(compareAt)}</p> : null}
    </div>
  );
}
