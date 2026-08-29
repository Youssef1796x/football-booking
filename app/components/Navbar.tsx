"use client";

import { useState } from "react";

const links = [
  { label: "الرئيسية", href: "#home" },
  { label: "عن الملعب", href: "#about" },
  { label: "الحجز", href: "#booking" },
  { label: "المكان", href: "#location" },
  { label: "تواصل معانا", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-gradient-to-b from-[#0A0A0A]/90 to-transparent backdrop-blur-[2px]">
      <div className="flex items-center justify-between px-6 py-4 sm:px-10 md:px-16 lg:px-24">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#2ECC71]" />
          <span className="text-xl font-black text-white sm:text-2xl">
            ملعب النور
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#A1A1AA] transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            className="rounded-full bg-[#2ECC71] px-6 py-2.5 text-sm font-bold text-[#0A0A0A] transition-all duration-300 hover:shadow-[0_0_16px_rgba(46,204,113,0.4)]"
          >
            شوف المواعيد
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-label="القائمة"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-[#0A0A0A]/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 pb-6 pt-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 text-base font-medium text-[#A1A1AA] transition-colors duration-200 hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-[#2ECC71] px-6 py-3 text-center text-base font-bold text-[#0A0A0A]"
          >
            شوف المواعيد
          </a>
        </div>
      </div>
    </nav>
  );
}