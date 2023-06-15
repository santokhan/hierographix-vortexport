"use client";

import Partner from "../components/home/trusted/Partner";
import Hero from "../components/home/hero/Hero";
import Pricing from "../components/home/pricing/Pricing";
import Performance from "../components/home/performance/Performance";
import Services from "../components/home/services/Services";
import TestiMonial from "../components/home/testimonial/Testimonial";
import ConnectWithSpacing from "../components/home/connect/Connect";
import FAQ from "../components/home/faq/FAQ";

export default function FrontendDevelopment() {
  return (
    <div className="bg-vpurple-950">
      <Hero />
      <Partner />
      <Pricing />
      <Performance />
      <Services />
      <TestiMonial />
      <ConnectWithSpacing />
      <FAQ />
    </div>
  );
}
