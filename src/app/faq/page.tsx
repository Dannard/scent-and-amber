import { Accordion } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";

export default function FaqPage() {
  return (
    <Container className="py-12">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.3em] text-brand-muted">FAQ</p>
        <h1 className="mt-2 font-display text-[2.3rem] sm:text-[3rem] leading-tight text-brand-cream">Helpful Answers Before You Buy</h1>
      </div>

      <Accordion
        items={[
          {
            label: "How long do scents usually wear?",
            content:
              "Most scents are designed for moderate wear through the day. Skin chemistry and weather can change projection and longevity.",
          },
          {
            label: "Can I return opened bottles?",
            content:
              "Returns are accepted on unopened items within 14 days. For opened items, support can help with exchanges on a case-by-case basis.",
          },
          {
            label: "Which size should I start with?",
            content:
              "30ml is ideal for testing in routine use, while 50ml is our most common repeat-purchase size.",
          },
          {
            label: "Do you ship internationally?",
            content: "International shipping is available in selected regions. Exact options appear at checkout.",
          },
        ]}
      />
    </Container>
  );
}
