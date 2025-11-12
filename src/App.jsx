

import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Program from "./components/Program";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <Program />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
}
