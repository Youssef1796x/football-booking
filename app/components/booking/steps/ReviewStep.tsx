"use client";

import { PITCHES, DURATIONS, priceFor, formatTime, formatFullDate } from "../data";
import type { PitchId } from "../data";

export default function ReviewStep({
  pitchId,
  date,
  durationId,
  timeStart,
}: {
  pitchId: PitchId;
  date: Date;
  durationId: string;
  timeStart: string;
}) {
  const pitch = PITCHES.find((p) => p.id === pitchId)!;
  const duration = DURATIONS.find((d) => d.id === durationId)!;
  const price = priceFor(pitch, duration.hours);

  const rows = [
    { label: "الملعب", value: pitch.name },
    { label: "التاريخ", value: formatFullDate(date) },
    { label: "المدة", value: duration.label },
    { label: "الميعاد", value: `${formatTime(timeStart)} - ${formatTime(
      addDuration(timeStart, duration.hours)
    )}` },
  ];

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-2xl border border-white/5 bg-white/2">
        {rows.map((row, i) => (
          <div
            key={row.label}
            className={`flex items-center justify-between px-5 py-4 ${
              i !== rows.length - 1 ? "border-b border-white/5" : ""
            }`}
          >
            <span className="text-sm text-[#A1A1AA]">{row.label}</span>
            <span className="text-sm font-bold text-white">{row.value}</span>
          </div>
        ))}
      </div>

      {/* Price */}
      <div className="flex items-center justify-between rounded-2xl border border-[#2ECC71]/25 bg-[#2ECC71]/6 px-5 py-4">
        <span className="text-base font-bold text-white">الإجمالي</span>
        <div className="text-left">
          <span className="text-2xl font-black text-[#2ECC71]">{price}</span>
          <span className="mr-1 text-sm text-[#A1A1AA]">ج.م</span>
        </div>
      </div>
    </div>
  );
}

function addDuration(hhmm: string, hours: number): string {
  const [h, m] = hhmm.split(":").map(Number);
  const total = h * 60 + m + hours * 60;
  const nh = Math.floor(total / 60) % 24;
  const nm = total % 60;
  return `${String(nh).padStart(2, "0")}:${String(nm).padStart(2, "0")}`;
}
