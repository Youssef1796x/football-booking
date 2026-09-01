"use client";

import { getUpcomingDates, dateKey, formatDateLabel } from "../data";

const DATES = getUpcomingDates(14);

export default function DateStep({
  selected,
  onSelect,
}: {
  selected: string | null;
  onSelect: (key: string) => void;
}) {
  return (
    <div className="-mx-1 flex gap-3 overflow-x-auto px-1 pb-2 [scrollbar-width:thin]">
      {DATES.map((d) => {
        const key = dateKey(d);
        const active = selected === key;
        const { weekday, day, month } = formatDateLabel(d);
        return (
          <button
            key={key}
            onClick={() => onSelect(key)}
            className={`flex min-w-[4.5rem] flex-shrink-0 flex-col items-center gap-1 rounded-2xl border px-3 py-4 transition-all duration-300 ${
              active
                ? "border-[#2ECC71] bg-[#2ECC71]/8 shadow-[0_0_24px_rgba(46,204,113,0.15)]"
                : "border-white/5 bg-white/2 hover:border-[#2ECC71]/40 hover:bg-[#2ECC71]/4"
            }`}
          >
            <span className={`text-xs font-medium ${active ? "text-[#2ECC71]" : "text-[#8E8E93]"}`}>
              {weekday}
            </span>
            <span className={`text-xl font-black ${active ? "text-white" : "text-white"}`}>
              {day}
            </span>
            <span className={`text-xs font-medium ${active ? "text-[#A1A1AA]" : "text-[#8E8E93]"}`}>
              {month}
            </span>
          </button>
        );
      })}
    </div>
  );
}
