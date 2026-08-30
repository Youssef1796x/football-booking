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

        <p
          className="mt-7 max-w-md text-lg text-[#A1A1AA] sm:text-xl"
          style={{ lineHeight: "1.8" }}
        >
          ملعب النور ملعب كرة قدم بأرضية طبيعية في قلب مدينة نصر. بيفتعلكم كل
          مساء بإضاءة احترافية عشان تلعبوا في أي وقت وبأعلى مستوى.
        </p>

        <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
          {["دورات مياه", "باركينج", "إضاءة ليلية"].map((item) => (
            <li
              key={item}
              className="flex items-center gap-2.5 text-base font-medium text-[#A1A1AA]"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[#2ECC71]" />
              {item}
            </li>
          ))}
        </ul>
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
