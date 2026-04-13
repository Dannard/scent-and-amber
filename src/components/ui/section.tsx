import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function Section({
  className,
  title,
  eyebrow,
  children,
}: React.PropsWithChildren<{
  className?: string;
  title?: string;
  eyebrow?: string;
}>) {
  return (
    <section className={cn("py-16 sm:py-20", className)}>
      {(eyebrow || title) && (
        <Container>
          <div className="mb-8 space-y-3 sm:mb-10">
            {eyebrow ? <p className="text-[11px] uppercase tracking-[0.32em] text-brand-muted">{eyebrow}</p> : null}
            {title ? (
              <h2 className="font-display text-[2rem] leading-tight text-brand-cream sm:text-[2.4rem] lg:text-[2.75rem]">
                {title}
              </h2>
            ) : null}
          </div>
        </Container>
      )}
      {children}
    </section>
  );
}
