"use client";
import Image from "next/image";
import { useState } from "react";
import Accordion from "./accordion/Accordion";
import FAQImage from "./FAQImage";

export default function FAQ() {
  return (
    <section>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center lg:items-start max-w-screen-xl px-4 py-12 mx-auto lg:py-20">
        <FAQImage />
        <div className="w-full max-w-md space-y-6">
          <h3 className="text-2xl lg:text-4xl font-bold leading-[1.2] text-center">
            <span className="text-teal-400">Frequently</span> Asked Questions
          </h3>
          <Accordion />
        </div>
      </div>
    </section>
  );
}
