"use client";

import { useMemo, useState } from "react";
import Stepper from "./Stepper";
import PitchStep from "./steps/PitchStep";
import DateStep from "./steps/DateStep";
import DurationStep from "./steps/DurationStep";
import TimeStep from "./steps/TimeStep";
import ReviewStep from "./steps/ReviewStep";
import {
  DURATIONS,
  type PitchId,
} from "./data";

const STEP_TITLES = [
  "اختار الملعب",
  "اختار اليوم",
  "اختار مدة اللعب",
  "اختار الميعاد",
  "راجع حجزك",
];

export default function BookingFlow() {
  const [step, setStep] = useState(0);
  const [pitchId, setPitchId] = useState<PitchId | null>(null);
  const [dateStr, setDateStr] = useState<string | null>(null);
  const [durationId, setDurationId] = useState<string | null>(null);
  const [customHours, setCustomHours] = useState(2);
  const [timeStart, setTimeStart] = useState<string | null>(null);

  const date = useMemo(
    () => (dateStr ? new Date(dateStr + "T00:00:00") : null),
    [dateStr]
  );
  const duration =
    durationId === "custom"
      ? { id: "custom", label: `${customHours} ساعة`, hours: customHours }
      : DURATIONS.find((d) => d.id === durationId) ?? null;

  function selectPitch(id: PitchId) {
    setPitchId(id);
    if (durationId) setTimeStart(null);
  }
  function selectDate(key: string) {
    setDateStr(key);
    if (durationId) setTimeStart(null);
  }
  function selectDuration(id: string) {
    setDurationId(id);
    setTimeStart(null);
  }

  const canProceed = [
    pitchId !== null,
    dateStr !== null,
    durationId !== null,
    timeStart !== null,
    true,
  ][step];

  const isLast = step === 4;

  function next() {
    if (!canProceed) return;
    setStep((s) => Math.min(s + 1, 4));
  }
  function back() {
    setStep((s) => Math.max(s - 1, 0));
  }

  return (
    <div className="relative z-10 mx-auto w-full max-w-md">
      <Stepper current={step} />

      <div className="mt-8">
        <h3 className="text-xl font-black text-white">{STEP_TITLES[step]}</h3>

        <div className="mt-5 min-h-56">
          {step === 0 && (
            <PitchStep selected={pitchId} onSelect={selectPitch} />
          )}
          {step === 1 && <DateStep selected={dateStr} onSelect={selectDate} />}
          {step === 2 && (
            <DurationStep
              selected={durationId}
              pitchId={pitchId}
              customHours={customHours}
              onSelect={selectDuration}
              onCustomHours={setCustomHours}
            />
          )}
          {step === 3 && pitchId && dateStr && duration && (
            <TimeStep
              pitchId={pitchId}
              dateKey={dateStr}
              hours={duration.hours}
              selected={timeStart}
              onSelect={setTimeStart}
            />
          )}
          {step === 4 && pitchId && date && duration && timeStart && (
            <ReviewStep
              pitchId={pitchId}
              date={date}
              durationLabel={duration.label}
              durationHours={duration.hours}
              timeStart={timeStart}
            />
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex items-center gap-3">
        {step > 0 && (
          <button
            onClick={back}
            className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 px-6 text-base font-bold text-white transition-colors duration-200 hover:bg-white/5"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
            </svg>
            رجوع
          </button>
        )}
        <button
          onClick={next}
          disabled={!canProceed}
          className={`flex h-12 flex-1 items-center justify-center gap-2 rounded-full text-base font-bold transition-all duration-300 ${
            canProceed
              ? "bg-[#2ECC71] text-[#0A0A0A] hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(46,204,113,0.45)]"
              : "cursor-not-allowed bg-white/5 text-[#5A5A5E]"
          }`}
        >
          {isLast ? "متابعة الحجز" : "متابعة"}
          {!isLast && (
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m0 0l6-6m-6 6l6 6" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
