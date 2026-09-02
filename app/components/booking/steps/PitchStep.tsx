"use client";

import { PITCHES, type PitchId } from "../data";

export default function PitchStep({
  selected,
  onSelect,
}: {
  selected: PitchId | null;
  onSelect: (id: PitchId) => void;
}) {
  return (
    <div className="grid gap-4">
      {PITCHES.map((pitch) => {
        const active = selected === pitch.id;
        return (
          <button
            key={pitch.id}
            onClick={() => onSelect(pitch.id)}
            className={`group flex items-center justify-between rounded-2xl border p-5 text-right transition-all duration-300 ${
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
                  <path strokeLinecap="round" d="M12 3a9 9 0 0 1 0 18M3 12h18" />
                </svg>
              </span>
              <div>
                <div className="text-lg font-bold text-white">{pitch.name}</div>
                <div className="text-sm text-[#A1A1AA]">{pitch.players}</div>
              </div>
            </div>
            <div className="text-left">
              <div className="text-base font-bold text-[#2ECC71]">{pitch.hourlyRate}</div>
              <div className="text-xs text-[#8E8E93]">ج.م / ساعة</div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
