"use client";
/* eslint-disable react/no-unescaped-entities */
import Headline from "@/components/shared/Headline";
import Image from "next/image";
import energizingImg from "../../assets/images/frontend/energizing.png";

export default function Electrofying() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 space-y-10 lg:space-y-16 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 justify-between">
        <Image
          src={energizingImg}
          alt="hero-image"
          className="lg:col-span-5 w-full object-contain p-6"
        />
        <div className=""></div>
        <div className="lg:col-span-6 space-y-5 py-10 lg:py-24">
          <div className="space-y-2">
            <h5 className="font-meduim text-gray-400 text-lg uppercase">
              Unleashing Digital Marvels
            </h5>
            <Headline>
              <div className="text-start">
                <span className="text-teal-400">Energizing</span> the Digital
                Landscape
              </div>
            </Headline>
          </div>
          <p className="text-gray-500 lg:text-lg">
            In this ever-evolving world, we are here with full dedication to
            provide outstanding Frontend Development services. With a
            combination of deep technical expertise, boundless creativity and
            deep understanding of the latest design trends, our team delivers a
            stunning user interface. We carefully translate design concepts into
            responsive HTML, CSS and JavaScript code, resulting in a seamless
            user experience across devices and browsers.
          </p>
          <div className="">
            <button
              type="button"
              className="h-10 px-4 bg-teal-400 text-white rounded-lg hover:bg-teal-500 focus:ring-4 focus:ring-teal-400/50"
            >
              Book a call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
