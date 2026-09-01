"use client";

import { useState } from "react";
import { dateKey } from "./data";

const WEEKDAYS = ["أحد", "إثن", "ثلا", "أرب", "خمي", "جمع", "سبت"];

export default function Calendar({
  selected,
  onSelect,
}: {
  selected: string | null;
  onSelect: (key: string) => void;
}) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const [view, setView] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const year = view.getFullYear();
  const month = view.getMonth();
  const startDayOfWeek = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (Date | null)[] = [];
  for (let i = 0; i < startDayOfWeek; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));

  const monthLabel = new Intl.DateTimeFormat("ar-EG", {
    month: "long",
    year: "numeric",
  }).format(view);

  const minView = new Date(today.getFullYear(), today.getMonth(), 1);
  const canGoBack = new Date(year, month - 1, 1) >= minView;

  return (
    <div className="rounded-2xl border border-white/5 bg-white/2 p-4">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <button
          onClick={() => setView(new Date(year, month - 1, 1))}
          disabled={!canGoBack}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-[#A1A1AA] transition-colors hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-30"
          aria-label="الشهر السابق"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <span className="text-sm font-bold text-white">{monthLabel}</span>
        <button
          onClick={() => setView(new Date(year, month + 1, 1))}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-[#A1A1AA] transition-colors hover:bg-white/5"
          aria-label="الشهر التالي"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Weekday headers */}
      <div className="mb-2 grid grid-cols-7 gap-1">
        {WEEKDAYS.map((w) => (
          <div key={w} className="text-center text-[11px] font-medium text-[#8E8E93]">
            {w}
          </div>
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-1">
        {cells.map((d, i) => {
          if (!d) return <div key={`e${i}`} />;
          const key = dateKey(d);
          const active = selected === key;
          const isPast = d < today;
          return (
            <button
              key={key}
              disabled={isPast}
              onClick={() => onSelect(key)}
              className={`aspect-square rounded-lg text-sm font-bold transition-all duration-200 ${
                isPast
                  ? "cursor-not-allowed text-[#3A3A3E] opacity-40"
                  : active
                  ? "bg-[#2ECC71] text-[#0A0A0A] shadow-[0_0_18px_rgba(46,204,113,0.25)]"
                  : "text-white hover:bg-[#2ECC71]/10"
              }`}
            >
              {d.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
