import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Program from "../components/Program";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import Guarantees from "../components/Guarantees";
import Footer from "../components/Footer";
import ProgramDetail from "../components/ProgramDetail";
import Testimonials from "../components/Testimonials";

export default function Keto() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <Program />
      <ProgramDetail />
      <Testimonials/>
      <CTA />
      <FAQ />
      <Guarantees />
      <Footer />
    </div>
  );
}
