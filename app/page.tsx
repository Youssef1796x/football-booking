"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Droplet, CircleParking, Coffee } from "lucide-react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const facilities = [
  { label: "حمامات", Icon: Droplet },
  { label: "باركينج", Icon: CircleParking },
  { label: "كافيتيريا", Icon: Coffee },
];

export default function Home() {
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
    <>
      <Navbar />
      <Hero />

      {/* About */}
      <section
        ref={aboutRef}
        id="about"
        className="relative scroll-mt-24 overflow-hidden bg-[#0A0A0A] py-14 sm:py-20"
      >
        {/* Muted pitch background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-pitch.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/95 to-[#0A0A0A]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,10,10,0.6)_75%,rgba(10,10,10,0.9)_100%)]" />
        </div>

        <div className="relative z-10 px-6 sm:px-10 md:px-16 lg:px-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center lg:gap-16">
            {/* Intro text */}
            <div
              className={`transition-all duration-700 ease-out ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              <div className="mb-7 flex items-center gap-3">
                <span className="text-base font-medium text-[#A1A1AA] sm:text-lg">
                  ملعب النور
                </span>
                <div className="h-px w-10 bg-[#8E8E93]/40" />
              </div>

              <h2 className="text-2xl font-black text-white sm:text-3xl">
                عن الملعب
              </h2>

              <div
  className="mt-7 max-w-md text-lg text-[#A1A1AA] sm:text-xl"
  style={{ lineHeight: "1.8" }}
>
  <p>
    ملعب النور عباره عن عشب طبيعي وموجود في زهراء مدينه نصر ، بيفتح من 3 العصر لحد آخر الليل
  </p>
  <p className="mt-4">
    وفيه إنارة قوية بالليل وده هيخليك تلعب وانت حاسس كأنك بالنهار ، تقدروا
    تحجزوا الميعاد اللي يناسبكم من الصفحه دي
  </p>
  <p className="mt-4 text-green-700 font-bold">
    جاهز تحجز وتطلع ميسي اللي جواك ؟
  </p>
</div>
            </div>

            {/* Facility cards */}
            <div className="flex flex-col gap-4">
              <div className="mb-2 flex items-center gap-3">
                <span className="text-base font-medium text-[#A1A1AA] sm:text-lg">
                  مميزات تانيه
                </span>
                <div className="h-px w-10 bg-[#8E8E93]/40" />
              </div>

              {facilities.map((f, i) => (
                <div
                  key={f.label}
                  className={`transition-all duration-700 ease-out ${
                    visible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${visible ? 150 + i * 120 : 0}ms`,
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

      {/* Booking */}
      <section
        id="booking"
        className="scroll-mt-24 border-t border-white/5 px-6 py-20 sm:px-10 md:px-16 lg:px-24"
      >
        <h2 className="text-2xl font-black text-white">الحجز</h2>
      </section>

      {/* Location */}
      <section
        id="location"
        className="scroll-mt-24 border-t border-white/5 px-6 py-20 sm:px-10 md:px-16 lg:px-24"
      >
        <h2 className="text-2xl font-black text-white">المكان</h2>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-24 border-t border-white/5 px-6 py-20 sm:px-10 md:px-16 lg:px-24"
      >
        <h2 className="text-2xl font-black text-white">تواصل معانا</h2>
      </section>
    </>
  );
}