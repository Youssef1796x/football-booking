"use client";

import { useState } from "react";
import { getUpcomingDates, dateKey, formatDateLabel } from "../data";
import Calendar from "../Calendar";

const DATES = getUpcomingDates(14);

export default function DateStep({
  selected,
  onSelect,
}: {
  selected: string | null;
  onSelect: (key: string) => void;
}) {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <div className="space-y-4">
      <div className="-mx-1 flex gap-3 overflow-x-auto px-1 pb-2 scrollbar-thin">
        {DATES.map((d) => {
          const key = dateKey(d);
          const active = selected === key;
          const { weekday, day, month } = formatDateLabel(d);
          return (
            <button
              key={key}
              onClick={() => {
                onSelect(key);
                setShowCalendar(false);
              }}
              className={`flex min-w-18 shrink-0 flex-col items-center gap-1 rounded-2xl border px-3 py-4 transition-all duration-300 ${
                active && !showCalendar
                  ? "border-[#2ECC71] bg-[#2ECC71]/8 shadow-[0_0_24px_rgba(46,204,113,0.15)]"
                  : "border-white/5 bg-white/2 hover:border-[#2ECC71]/40 hover:bg-[#2ECC71]/4"
              }`}
            >
              <span className={`text-xs font-medium ${active && !showCalendar ? "text-[#2ECC71]" : "text-[#8E8E93]"}`}>
                {weekday}
              </span>
              <span className="text-xl font-black text-white">{day}</span>
              <span className={`text-xs font-medium ${active && !showCalendar ? "text-[#A1A1AA]" : "text-[#8E8E93]"}`}>
                {month}
              </span>
            </button>
          );
        })}
      </div>

      {/* اختار تاريخ آخر */}
      <button
        onClick={() => setShowCalendar((v) => !v)}
        className={`flex w-full items-center justify-center gap-2 rounded-2xl border p-4 text-base font-bold transition-all duration-300 ${
          showCalendar
            ? "border-[#2ECC71] bg-[#2ECC71]/8 text-[#2ECC71]"
            : "border-white/5 bg-white/2 text-white hover:border-[#2ECC71]/40 hover:bg-[#2ECC71]/4"
        }`}
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="18" rx="3" />
          <path strokeLinecap="round" d="M3 9h18M8 2v4M16 2v4" />
        </svg>
        اختار تاريخ آخر
      </button>

      {showCalendar && (
        <Calendar
          selected={selected}
          onSelect={(key) => {
            onSelect(key);
            setShowCalendar(false);
          }}
        />
      )}
    </div>
  );
}
