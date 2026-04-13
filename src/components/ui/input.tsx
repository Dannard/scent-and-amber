import { cn } from "@/lib/utils";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        "w-full rounded-xl border border-brand-border bg-brand-panel px-3 py-2 text-sm text-brand-cream placeholder:text-brand-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold",
        props.className,
      )}
    />
  );
}
