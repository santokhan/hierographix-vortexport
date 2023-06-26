"use client"

import Partner from "../components/home/trusted/Partner";
import Hero from "../components/home/hero/Hero";
import Pricing from "../components/home/pricing/Pricing";
import PricingWithSlider from "../components/home/pricing/PricingWithSlider";
import Performance from "../components/home/performance/Performance";
import Services from "../components/home/services/Services";
import TestiMonial from "../components/home/testimonial/Testimonial";
import ConnectWithSpacing from "../components/home/connect/Connect";
import FAQ from "../components/home/faq/FAQ";
// npm install next@latest react@16.14.0 react-dom@16.14.0

export default function FrontendDevelopment() {
  return (
    <div className="bg-vpurple-950">
      <Hero />
      <Partner />
      <Pricing />
      <PricingWithSlider />
      <Performance />
      <Services />
      <TestiMonial />
      <ConnectWithSpacing />
      <FAQ />
    </div>
  );
}
