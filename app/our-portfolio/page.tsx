"use client"
import ScrollAnimation from 'react-animate-on-scroll';

import Hero from "@/components/portfolio/hero/Hero";
import Featured from "./featured/Featured";
import Showcase from "./showcase/Showcase";

export default function OurPortfolio() {
  return (
    <div className="bg-vpurple-950">
      <ScrollAnimation animateIn="fadeIn">
        <Hero />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Featured />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Showcase />
      </ScrollAnimation>
    </div>
  );
}
