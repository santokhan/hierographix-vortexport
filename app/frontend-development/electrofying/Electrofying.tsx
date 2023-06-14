"use client";
/* eslint-disable react/no-unescaped-entities */
import Headline from "@/components/shared/Headline";
import Image from "next/image";
import expertise from "../../assets/images/frontend/expertise-section-pattern.png";

export default function Electrofying() {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto px-4 space-y-10 lg:space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 justify-between">
          <div className="lg:col-span-6 space-y-5 py-16 lg:py-24">
            <div className="space-y-2">
              <h5 className="font-meduim text-gray-400 text-lg uppercase">
                Unleashing Digital Marvels
              </h5>
              <Headline>
                <div className="text-start text-gray-800">
                  Electrifying Frontend Development Services!
                </div>
              </Headline>
            </div>
            <p className="text-gray-500 lg:text-lg">
              Every step of the way, we focus on speed, reliability and user
              satisfaction, so that each of our projects becomes an engaging and
              intuitive flow. With attention to detail, we create eye-catching
              animations, smooth transition effects and engaging interactions to
              ensure that the interfaces we build truly reflect your brand
              identity and business goals. From website development to complex
              web applications, we are committed to providing frontend solutions
              that are innovative, creative and tailored to your unique needs.
              Make your digital experience memorable and extraordinary with the
              Frontend Development services that we offer.
            </p>
          </div>
          <div className=""></div>
          <Image
            src={expertise}
            alt="hero-image"
            className="lg:col-span-5 w-full object-contain pb-12 lg:pb-0"
          />
        </div>
      </div>
    </div>
  );
}
