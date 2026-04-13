import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-brand-border bg-brand-panel px-3 py-1 text-xs uppercase tracking-[0.2em] text-brand-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
