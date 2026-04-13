"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

export function Accordion({
  items,
  className,
}: {
  items: { label: string; content: React.ReactNode }[];
  className?: string;
}) {
  const [open, setOpen] = useState<string | null>(items[0]?.label ?? null);

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item) => {
        const isOpen = open === item.label;
        return (
          <div key={item.label} className="rounded-2xl border border-brand-border bg-brand-panel">
            <button
              type="button"
              className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-brand-cream"
              onClick={() => setOpen(isOpen ? null : item.label)}
            >
              <span>{item.label}</span>
              <span className="text-brand-muted">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen ? <div className="px-4 pb-4 text-sm leading-7 text-brand-muted">{item.content}</div> : null}
          </div>
        );
      })}
    </div>
  );
}
