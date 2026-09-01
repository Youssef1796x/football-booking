"use client";

import { getAvailableSlots, type PitchId, formatTime } from "../data";

export default function TimeStep({
  pitchId,
  dateKey,
  hours,
  selected,
  onSelect,
}: {
  pitchId: PitchId;
  dateKey: string;
  hours: number;
  selected: string | null;
  onSelect: (start: string) => void;
}) {
  const slots = getAvailableSlots(pitchId, dateKey, hours);
  const availableCount = slots.filter((s) => s.available).length;

  return (
    <div>
      <p className="mb-4 text-sm text-[#A1A1AA]">
        {availableCount} ميعاد متاح
      </p>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
        {slots.map((slot) => {
          const active = selected === slot.start;
          return (
            <button
              key={slot.start}
              disabled={!slot.available}
              onClick={() => onSelect(slot.start)}
              className={`rounded-xl border px-2 py-3 text-center text-sm font-bold transition-all duration-200 ${
                !slot.available
                  ? "cursor-not-allowed border-white/5 bg-white/2 text-[#5A5A5E] line-through opacity-50"
                  : active
                  ? "border-[#2ECC71] bg-[#2ECC71]/12 text-[#2ECC71] shadow-[0_0_18px_rgba(46,204,113,0.18)]"
                  : "border-white/5 bg-white/2 text-white hover:border-[#2ECC71]/40 hover:bg-[#2ECC71]/4"
              }`}
            >
              {formatTime(slot.start)}
            </button>
          );
        })}
      </div>
    </div>
  );
}
