"use client";

const STEPS = ["الملعب", "التاريخ", "المدة", "الميعاد", "المراجعة"];

export default function Stepper({ current }: { current: number }) {
  return (
    <div className="w-full">
      {/* Progress bar */}
      <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/5">
        <div
          className="absolute inset-y-0 right-0 rounded-full bg-[#2ECC71] transition-all duration-500 ease-out"
          style={{ width: `${((current + 1) / STEPS.length) * 100}%` }}
        />
      </div>
      {/* Labels */}
      <div className="mt-3 flex items-center justify-between">
        {STEPS.map((label, i) => {
          const active = i === current;
          const done = i < current;
          return (
            <div key={label} className="flex flex-col items-center gap-1.5">
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold transition-colors duration-300 ${
                  active
                    ? "bg-[#2ECC71] text-[#0A0A0A]"
                    : done
                    ? "bg-[#2ECC71]/20 text-[#2ECC71]"
                    : "bg-white/5 text-[#8E8E93]"
                }`}
              >
                {done ? (
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  i + 1
                )}
              </span>
              <span
                className={`text-[11px] font-medium transition-colors duration-300 ${
                  active ? "text-white" : done ? "text-[#A1A1AA]" : "text-[#8E8E93]"
                }`}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
