const slots = [
  { time: "6:00 م", status: "متاح" },
  { time: "7:00 م", status: "محجوز" },
  { time: "8:00 م", status: "متاح" },
  { time: "9:00 م", status: "متاح" },
];

const days = ["السبت", "الأحد", "الإثنين", "الثلاثاء", "الأربعاء"];

export default function BookingPreview() {
  return (
    <section className="flex flex-col gap-6 bg-white px-6 py-12">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-center text-zinc-900">
        شوف المواعيد المتاحة
      </h2>

      {/* Day picker */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {days.map((day, i) => (
          <button
            key={day}
            type="button"
            className={`flex shrink-0 flex-col items-center gap-1 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
              i === 0
                ? "bg-emerald-500 text-white"
                : "bg-zinc-100 text-zinc-600"
            }`}
          >
            <span className="font-bold">{day}</span>
            <span className={`text-xs ${i === 0 ? "text-white/80" : "text-zinc-400"}`}>
              {22 + i}
            </span>
          </button>
        ))}
      </div>

      {/* Time slots */}
      <div className="flex flex-col gap-2.5">
        {slots.map((slot) => {
          const booked = slot.status === "محجوز";
          return (
            <div
              key={slot.time}
              className={`flex items-center justify-between rounded-xl border px-4 py-3.5 transition-colors ${
                booked
                  ? "border-zinc-200 bg-zinc-50"
                  : "border-emerald-200 bg-emerald-50"
              }`}
            >
              <span className="text-lg font-semibold text-zinc-900">
                {slot.time}
              </span>
              <span
                className={`text-sm font-medium ${
                  booked ? "text-zinc-400" : "text-emerald-600"
                }`}
              >
                {slot.status}
              </span>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <button
        type="button"
        className="w-full rounded-xl bg-emerald-500 px-6 py-3.5 text-lg font-bold text-white shadow-lg shadow-emerald-500/30 transition-colors hover:bg-emerald-400"
      >
        اختار ميعادك
      </button>
    </section>
  );
}
