"use client";

import BookingFlow from "./booking/BookingFlow";

export default function Booking() {
  return (
    <section
      id="booking"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/5 px-6 py-20 sm:px-10 md:px-16 lg:px-24"
    >
      <div className="pointer-events-none absolute top-0 left-1/3 h-72 w-72 rounded-full bg-[#2ECC71]/[0.03] blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        {/* Header */}
        <div className="mb-6 flex items-center gap-3">
          <span className="text-base font-medium text-[#A1A1AA] sm:text-lg">
            احجز ميعادك
          </span>
          <div className="h-px w-10 bg-[#8E8E93]/40" />
        </div>
        <h2 className="text-2xl font-black text-white sm:text-3xl">الحجز</h2>
        <p className="mt-3 max-w-md text-[#A1A1AA]" style={{ lineHeight: 1.8 }}>
          خطوات بسيطة وانت تلعب — اختار الملعب، اليوم، والمدة، والميعاد.
        </p>

        {/* Flow */}
        <div className="mt-10">
          <BookingFlow />
        </div>
      </div>
    </section>
  );
}
