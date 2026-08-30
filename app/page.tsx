"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const facilities = [
  {
    label: "دورات مياه",
    icon: <path d="M12 2.5S5 9 5 13.5a7 7 0 0 0 14 0C19 9 12 2.5 12 2.5Z" />,
  },
  {
    label: "باركينج",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M9 17V7h3.5a2.5 2.5 0 0 1 0 5H9" />
      </>
    ),
  },
  {
    label: "إضاءة ليلية",
    icon: (
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8a6 6 0 0 0-12 0c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5M9 18h6M10 22h4" />
    ),
  },
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
        className="relative scroll-mt-24 overflow-hidden bg-[#0A0A0A] py-20 sm:py-24"
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
              <div className="mb-5 flex items-center gap-3">
                <span className="text-base font-medium text-[#A1A1AA] sm:text-lg">
                  مدينة نصر
                </span>
                <div className="h-px w-10 bg-[#8E8E93]/40" />
              </div>

              <h2 className="text-2xl font-black text-white sm:text-3xl">
                عن الملعب
              </h2>

              <p
                className="mt-7 max-w-md text-lg text-[#A1A1AA] sm:text-xl"
                style={{ lineHeight: "1.8" }}
              >
                ملعب النور ملعب كرة قدم بأرضية طبيعية في قلب مدينة نصر. بيفتعلكم
                كل مساء بإضاءة احترافية عشان تلعبوا في أي وقت وبأعلى مستوى.
              </p>
            </div>

            {/* Facility cards */}
            <div className="flex flex-col gap-4">
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
                      <svg
                        className="h-6 w-6 text-[#2ECC71]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.8}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        {f.icon}
                      </svg>
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
