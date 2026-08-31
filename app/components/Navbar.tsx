"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const links = [
  { label: "الرئيسية", href: "#home" },
  { label: "عن الملعب", href: "#about" },
  { label: "الحجز", href: "#booking" },
  { label: "المكان", href: "#location" },
  { label: "تواصل معانا", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return true;
    return window.localStorage.getItem("theme") !== "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
    window.localStorage.setItem("theme", nextDark ? "dark" : "light");
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-lg"
          : "border-b border-transparent bg-gradient-to-b from-[#08110c]/80 to-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 sm:px-10 md:px-16 lg:px-24">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--brand)]/10 ring-1 ring-[var(--brand)]/30">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--brand)]" />
          </span>
          <span className="text-xl font-black tracking-tight text-[var(--image-foreground)] sm:text-2xl">
            ملعب النور
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative text-sm font-medium text-[#A1A1AA] transition-colors duration-200 hover:text-[var(--image-foreground)]"
            >
              {link.label}
              <span className="absolute -bottom-1 right-0 h-px w-0 bg-[var(--brand)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/70 text-muted transition-colors hover:border-brand/40 hover:text-brand"
            aria-label={isDark ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن"}
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="#booking"
            className="rounded-full bg-brand px-6 py-2.5 text-sm font-bold text-brand-foreground transition-all duration-300 hover:shadow-[0_0_18px_color-mix(in_srgb,var(--brand)_28%,transparent)]"
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
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 border-t border-white/5 bg-[#0A0A0A]/95 px-6 pb-6 pt-3 backdrop-blur-md">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 text-base font-medium text-[#A1A1AA] transition-colors duration-200 hover:bg-white/5 hover:text-[var(--image-foreground)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-[var(--brand)] px-6 py-3 text-center text-base font-bold text-[#0A0A0A]"
          >
            شوف المواعيد
          </a>
        </div>
      </div>
    </nav>
  );
}
