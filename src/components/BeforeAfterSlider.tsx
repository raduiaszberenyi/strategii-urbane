"use client";

import Image from "next/image";
import { useState } from "react";

type BeforeAfterSliderProps = {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
};

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Existent",
  afterLabel = "Propus",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);

  return (
    <div className="overflow-hidden rounded-[36px] border border-zinc-200 bg-white">
      <div className="border-b border-zinc-200 p-6">
        <h3 className="text-sm uppercase tracking-[0.25em] text-zinc-500">
          Existent / Propus
        </h3>
      </div>

      <div className="relative h-[780px] select-none overflow-hidden bg-zinc-100">
        <Image
          src={beforeImage}
          alt={beforeLabel}
          fill
          sizes="100vw"
          className="object-contain"
          priority
        />

        <div
          className="absolute inset-0"
          style={{
            clipPath: `polygon(${position}% 0, 100% 0, 100% 100%, ${position}% 100%)`,
          }}
        >
          <Image
            src={afterImage}
            alt={afterLabel}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>

        <div className="absolute bottom-6 left-6 rounded-full bg-white/90 px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-700 shadow-sm">
          {beforeLabel}
        </div>

        <div className="absolute bottom-6 right-6 rounded-full bg-white/90 px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-700 shadow-sm">
          {afterLabel}
        </div>

        <div
          className="absolute top-0 h-full w-[2px] bg-white shadow-[0_0_20px_rgba(0,0,0,0.35)]"
          style={{ left: `${position}%` }}
        />

        <div
          className="absolute top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-900 shadow-xl"
          style={{ left: `${position}%` }}
        >
          ↔
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          aria-label="Compară existent și propus"
        />
      </div>
    </div>
  );
}