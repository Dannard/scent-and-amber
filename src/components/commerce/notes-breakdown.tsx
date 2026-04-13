import { ScentNotes } from "@/types/commerce";

export function NotesBreakdown({ notes }: { notes: ScentNotes }) {
  return (
    <div className="grid gap-4 rounded-3xl border border-brand-border bg-brand-panel/40 p-6 sm:grid-cols-3">
      <div>
        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-brand-muted">Top</p>
        <p className="text-sm leading-7 text-brand-cream">{notes.top.join(", ")}</p>
      </div>
      <div>
        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-brand-muted">Heart</p>
        <p className="text-sm leading-7 text-brand-cream">{notes.heart.join(", ")}</p>
      </div>
      <div>
        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-brand-muted">Base</p>
        <p className="text-sm leading-7 text-brand-cream">{notes.base.join(", ")}</p>
      </div>
    </div>
  );
}
