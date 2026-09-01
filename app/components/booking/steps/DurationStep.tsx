"use client";

import { DURATIONS, PITCHES, type PitchId, priceFor } from "../data";

const CUSTOM_ID = "custom";
const MIN_HOURS = 0.5;
const MAX_HOURS = 4;
const STEP = 0.5;

export default function DurationStep({
  selected,
  pitchId,
  customHours,
  onSelect,
  onCustomHours,
}: {
  selected: string | null;
  pitchId: PitchId | null;
  customHours: number;
  onSelect: (id: string) => void;
  onCustomHours: (hours: number) => void;
}) {
  const pitch = PITCHES.find((p) => p.id === pitchId) ?? null;

  function clamp(h: number) {
    return Math.min(MAX_HOURS, Math.max(MIN_HOURS, Math.round(h * 2) / 2));
  }

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

      {/* مدة أخرى */}
      <div
        className={`rounded-2xl border p-5 transition-all duration-300 ${
          selected === CUSTOM_ID
            ? "border-[#2ECC71] bg-[#2ECC71]/8 shadow-[0_0_24px_rgba(46,204,113,0.15)]"
            : "border-white/5 bg-white/2"
        }`}
      >
        <button
          onClick={() => onSelect(CUSTOM_ID)}
          className="group flex w-full items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <span
              className={`flex h-12 w-12 items-center justify-center rounded-xl ring-1 transition-colors duration-300 ${
                selected === CUSTOM_ID
                  ? "bg-[#2ECC71]/15 ring-[#2ECC71]/50"
                  : "bg-[#2ECC71]/10 ring-[#2ECC71]/30 group-hover:ring-[#2ECC71]/50"
              }`}
            >
              <svg className="h-6 w-6 text-[#2ECC71]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
              </svg>
            </span>
            <span className="text-lg font-bold text-white">مدة أخرى</span>
          </div>
          {selected === CUSTOM_ID && pitch && (
            <div className="text-left">
              <div className="text-base font-bold text-[#2ECC71]">
                {priceFor(pitch, customHours)}
              </div>
              <div className="text-xs text-[#8E8E93]">ج.م</div>
            </div>
          )}
        </button>

        {/* Custom hours stepper */}
        {selected === CUSTOM_ID && (
          <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
            <button
              onClick={() => onCustomHours(clamp(customHours - STEP))}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-xl font-bold text-white transition-colors hover:bg-[#2ECC71]/15 hover:text-[#2ECC71]"
              aria-label="تقليل المدة"
            >
              −
            </button>
            <div className="text-center">
              <span className="text-2xl font-black text-white">{customHours}</span>
              <span className="mr-1 text-sm text-[#A1A1AA]">ساعة</span>
            </div>
            <button
              onClick={() => onCustomHours(clamp(customHours + STEP))}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-xl font-bold text-white transition-colors hover:bg-[#2ECC71]/15 hover:text-[#2ECC71]"
              aria-label="زيادة المدة"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
