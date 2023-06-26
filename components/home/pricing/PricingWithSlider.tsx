"use client";

import Headline from "@/components/shared/Headline";
import PricingSlider from "./PricingSlider";

export default function Pricing() {

  return (
    <section className="max-w-screen-xl mx-auto block lg:hidden">
      <div className="px-4 mx-auto max-w-screen-xl py-16 lg:px-6 space-y-10">
        <Headline>
          Our <span className="text-teal-400">Packages</span>
        </Headline>
        <div className="flex justify-center gap-8">
          <PricingSlider />
        </div>
      </div>
      <div className="py-5"></div>
    </section>
  );
}

