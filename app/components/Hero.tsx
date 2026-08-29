export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
      {/* Football field image — main visual */}
      <img
        src="https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=2070&auto=format&fit=crop"
        alt="ملعب كرة قدم"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

      {/* Text & button */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 pb-16 text-center">
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium tracking-wide text-emerald-300">
            مدينة نصر
          </span>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            ملعب النور
          </h1>
          <p className="mx-auto max-w-xs text-lg leading-relaxed text-white/90">
            احجز ميعادك في دقايق، من غير مكالمات ولا قلق.
          </p>
        </div>

        <button
          type="button"
          className="w-full max-w-xs rounded-xl bg-emerald-500 px-6 py-3.5 text-lg font-bold text-white shadow-lg shadow-emerald-500/30 transition-colors hover:bg-emerald-400"
        >
          شوف المواعيد
        </button>
      </div>
    </section>
  );
}
