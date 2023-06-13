import Header from "../components/shared/header/Header";
import Partner from "../components/home/trusted/Partner";
import Hero from "../components/home/hero/Hero";
import Pricing from "../components/home/pricing/Pricing";
import Performance from "../components/home/performance/Performance";
import Services from "../components/home/services/Services";
import TestiMonial from "../components/home/testimonial/Testimonial";
import Connect from "../components/home/connect/Connect";
import FAQ from "../components/home/faq/FAQ";
import Empower from "../components/home/empower/Empower";
import Footer from "../components/shared/footer/Footer";

export default function Blog() {
  return (
    <div className="bg-vpurple-950">
      <Header />
      <Hero />
      <Partner />
      <Pricing />
      <Performance />
      <Services />
      <TestiMonial />
      <Connect />
      <FAQ />
      <Empower />
      <Footer />
    </div>
  );
}
