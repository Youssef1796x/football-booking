import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Booking from "./components/Booking";
import Location from "./components/Location";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Booking />
      <Location />
      <Contact />
    </>
  );
}
