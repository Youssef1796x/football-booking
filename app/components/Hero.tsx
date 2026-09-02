"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative h-[65vh] min-h-125 w-full scroll-mt-24 overflow-hidden bg-[#0A0A0A] md:h-[68vh] md:min-h-135 lg:h-[75vh] lg:min-h-150"
    >
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.35}px) scale(1.05)` }}
      >
        <Image
          src="/hero-pitch.jpg"
          alt="ملعب النور - أرضية طبيعية بإضاءة احترافية"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Dark gradient overlay — darker on the right (RTL text side) */}
      <div className="absolute inset-0 z-10 bg-linear-to-l from-[#0A0A0A] via-[#0A0A0A]/75 to-[#0A0A0A]/30" />

      {/* Vignette to focus the eye on text */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_right_center,transparent_0%,rgba(10,10,10,0.5)_70%,rgba(10,10,10,0.8)_100%)]" />

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col justify-center px-6 py-10 sm:px-10 sm:py-14 md:px-16 lg:px-24 lg:py-16">
        
        {/* Location with thin rule */}
        <div className="mb-5 flex items-center gap-3">
          <span className="text-base font-medium text-[#A1A1AA] sm:text-lg">
            مدينة نصر
          </span>
          <div className="h-px w-10 bg-[#8E8E93]/40" />
        </div>

        {/* Venue name — monumental */}
        <h1
          className="text-2xl font-black leading-tight text-white sm:text-2xl md:text-2xl lg:text-[2rem]"
          style={{ letterSpacing: "-0.02em" }}
        >
          لحجز ماتشات الكوره ⚽
        </h1>

        {/* Description */}
        <p
          className="mt-7 max-w-md text-lg text-[#A1A1AA] sm:text-xl"
          style={{ lineHeight: "1.8" }}
        >
          جاهز للماتش ؟ شوف المواعيد المتاحة واختار الوقت اللي يناسبك.

        </p>

        {/* CTA — stadium light glow on hover */}
        <a
          href="#booking"
          className="group mt-9 inline-flex w-fit items-center gap-3 rounded-full bg-[#2ECC71] px-8 py-4 text-lg font-bold text-[#0A0A0A] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_rgba(46,204,113,0.45)] sm:text-xl"
        >
          شوف المواعيد
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 13H5m0 0l7 7m-7-7l7-7"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}