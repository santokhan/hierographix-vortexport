"use client"
import ScrollAnimation from 'react-animate-on-scroll';

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
      <ScrollAnimation animateIn="fadeIn">
        <Hero />
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn">
        <Partner />
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn">
        <Pricing />
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn">
        <Performance />
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn">
        <Services />
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn">
        <TestiMonial />
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn">
        <ConnectWithSpacing />
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn">
        <FAQ />
      </ScrollAnimation>
    </div>
  );
}
