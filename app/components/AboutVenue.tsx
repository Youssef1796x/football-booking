const highlights = [
  { label: "ملعب خماسي", icon: "⚽" },
  { label: "إضاءة ليلية", icon: "💡" },
  { label: "Parking", icon: "🅿️" },
  { label: "مدينة نصر", icon: "📍" },
];

export default function AboutVenue() {
  return (
    <section className="flex flex-col gap-6 bg-zinc-50 px-6 py-12">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold text-center text-zinc-900">
          عن ملعب النور
        </h2>
        <p className="mx-auto max-w-sm text-center text-lg leading-relaxed text-zinc-600">
          مكان مناسب للماتشات والتجمعات، مع ملعب مجهز وإضاءة ليلية وموقع سهل الوصول.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {highlights.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3.5"
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-sm font-semibold text-zinc-800">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
