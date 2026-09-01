"use client";

import { DURATIONS, PITCHES, type PitchId, priceFor } from "../data";

export default function DurationStep({
  selected,
  pitchId,
  onSelect,
}: {
  selected: string | null;
  pitchId: PitchId | null;
  onSelect: (id: string) => void;
}) {
  const pitch = PITCHES.find((p) => p.id === pitchId) ?? null;

  return (
    <div className="grid gap-4">
      {DURATIONS.map((dur) => {
        const active = selected === dur.id;
        const price = pitch ? priceFor(pitch, dur.hours) : null;
        return (
          <button
            key={dur.id}
            onClick={() => onSelect(dur.id)}
            className={`group flex items-center justify-between rounded-2xl border p-5 transition-all duration-300 ${
              active
                ? "border-[#2ECC71] bg-[#2ECC71]/8 shadow-[0_0_24px_rgba(46,204,113,0.15)]"
                : "border-white/5 bg-white/2 hover:border-[#2ECC71]/40 hover:bg-[#2ECC71]/4"
            }`}
          >
            <div className="flex items-center gap-4">
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-xl ring-1 transition-colors duration-300 ${
                  active
                    ? "bg-[#2ECC71]/15 ring-[#2ECC71]/50"
                    : "bg-[#2ECC71]/10 ring-[#2ECC71]/30 group-hover:ring-[#2ECC71]/50"
                }`}
              >
                <svg className="h-6 w-6 text-[#2ECC71]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
                </svg>
              </span>
              <span className="text-lg font-bold text-white">{dur.label}</span>
            </div>
            {price !== null && (
              <div className="text-left">
                <div className="text-base font-bold text-[#2ECC71]">{price}</div>
                <div className="text-xs text-[#8E8E93]">ج.م</div>
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}
