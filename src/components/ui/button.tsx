import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

const base =
  "inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-medium transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold disabled:cursor-not-allowed disabled:opacity-45";

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        base,
        variant === "primary" && "border-brand-gold bg-brand-gold text-brand-ink hover:bg-brand-gold-strong",
        variant === "secondary" && "border-brand-border bg-transparent text-brand-cream hover:bg-brand-panel",
        variant === "ghost" && "border-transparent bg-transparent text-brand-muted hover:text-brand-cream",
        className,
      )}
      {...props}
    />
  );
}

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
}) {
  return (
    <Link
      href={href}
      className={cn(
        base,
        variant === "primary" && "border-brand-gold bg-brand-gold text-brand-ink hover:bg-brand-gold-strong",
        variant === "secondary" && "border-brand-border bg-transparent text-brand-cream hover:bg-brand-panel",
        variant === "ghost" && "border-transparent bg-transparent text-brand-muted hover:text-brand-cream",
        className,
      )}
    >
      {children}
    </Link>
  );
}
