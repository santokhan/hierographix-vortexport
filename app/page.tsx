import Header from "./components/shared/header/Header";
import Partner from "./components/home/trusted/Partner";
import Hero from "./components/home/hero/Hero";
import Pricing from "./components/home/pricing/Pricing";
import Performance from "./components/home/performance/Performance";
import Services from "./components/home/services/Services";
import TestiMonial from "./components/home/testimonial/Testimonial";

export default function Home() {
  return (
    <div className="bg-vpurple-950">
      <Header />
      <Hero />
      <Partner />
      <Pricing />
      <Performance />
      <Services />
      <TestiMonial />
    </div>
  );
}
