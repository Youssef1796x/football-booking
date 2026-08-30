"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { Droplet, Armchair, Coffee } from "lucide-react";

const facilities = [
  { label: "حمامات", Icon: Droplet },
  { label: "مقاعد", Icon: Armchair },
  { label: "كافيتيريا", Icon: Coffee },
];

export default function About() {
  const [visible, setVisible] = useState(false);
  const aboutRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = aboutRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={aboutRef}
      id="about"
      className="relative scroll-mt-24 overflow-hidden bg-[#0A0A0A] py-16 sm:py-24"
    >
      {/* Subtle green accent glows */}
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#2ECC71]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#2ECC71]/5 blur-3xl" />

      <div className="relative z-10 px-6 sm:px-10 md:px-16 lg:px-24">
        {/* Header label */}
        <div className="mb-6 flex items-center gap-3">
          <span className="text-base font-medium text-[#A1A1AA] sm:text-lg">
            ملعب النور
          </span>
          <div className="h-px w-10 bg-[#8E8E93]/40" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-black text-white sm:text-3xl">
          عن الملعب
        </h2>

        {/* Pitch image — prominent main visual, clearly separated */}
        <div
          className={`mt-8 transition-all duration-700 ease-out ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-[#2ECC71]/25 shadow-[0_0_40px_rgba(46,204,113,0.12)] ring-1 ring-[#2ECC71]/15">
            <Image
              src="/about-pitch.jpg"
              alt="ملعب النور - عشب طبيعي بإضاءة احترافية"
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-transparent to-transparent" />
          </div>
        </div>

        {/* About details */}
        <div
          className={`mt-10 transition-all duration-700 ease-out ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: `${visible ? 120 : 0}ms` }}
        >
          <div
            className="max-w-2xl text-lg text-[#A1A1AA] sm:text-xl"
            style={{ lineHeight: "1.8" }}
          >
            <p>
              ملعب النور عبارة عن عشب طبيعي وموجود في زهراء مدينة نصر، بيفتح من 3 العصر لحد آخر الليل
            </p>
            <p className="mt-4">
              وفيه إضاءة قوية بالليل وده هيخليك تلعب وانت حاسس كأنك بالنهار، تقدروا
              تحجزوا الموعد اللي يناسبكم من الموقع ده
            </p>
            <p className="mt-4 text-green-700 font-bold">
              جاهز تحجز وتطلع ميسي اللي جواك؟
            </p>
          </div>
        </div>

        {/* Facilities */}
        <div className="mt-14">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-base font-medium text-[#A1A1AA] sm:text-lg">
              مميزات تانية
            </span>
            <div className="h-px w-10 bg-[#8E8E93]/40" />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {facilities.map((f, i) => (
              <div
                key={f.label}
                className={`transition-all duration-700 ease-out ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
                style={{
                  transitionDelay: `${visible ? 240 + i * 120 : 0}ms`,
                }}
              >
                <div
                  tabIndex={0}
                  aria-label={f.label}
                  className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2ECC71]/40 hover:bg-[#2ECC71]/[0.04] focus-visible:border-[#2ECC71]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2ECC71]/40"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2ECC71]/10 ring-1 ring-[#2ECC71]/30 transition-all duration-300 group-hover:ring-[#2ECC71]/50">
                    <f.Icon
                      className="h-6 w-6 text-[#2ECC71]"
                      strokeWidth={1.8}
                    />
                  </span>
                  <span className="mt-4 block text-base font-medium text-white">
                    {f.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
