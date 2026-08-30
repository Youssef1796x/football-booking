import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* About */}
      <section
        id="about"
        className="scroll-mt-24 px-6 py-20 sm:px-10 md:px-16 lg:px-24"
      >
        <h2 className="text-2xl font-black text-white">عن الملعب</h2>
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
