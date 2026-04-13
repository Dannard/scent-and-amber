"use client";

import { useState } from "react";

export function ProductGallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(images[0]);

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-3xl border border-brand-border bg-brand-panel/30">
        <img src={active} alt={alt} className="h-[460px] w-full object-cover sm:h-[620px]" />
      </div>
      <div className="grid grid-cols-4 gap-3">
        {images.map((image) => (
          <button
            key={image}
            type="button"
            onClick={() => setActive(image)}
            className="overflow-hidden rounded-xl border border-brand-border"
          >
            <img src={image} alt={`${alt} preview`} className="h-20 w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
