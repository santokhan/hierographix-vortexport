/* eslint-disable react/no-unescaped-entities */
import Headline from "@/app/components/shared/Headline";
import riseOfAI from "../../assets/images/blog/article/rise-of-ai.png";
import Image from "next/image";

export default function MostPopular(): JSX.Element {
  return (
    <div className="relative bg-vpurple-500 lg:bg-transparent overflow-hidden mb-20">
      <div className="relative">
        <svg
          className="absolute w-11/12 top-0 left-1/2 -translate-x-1/2 hidden lg:block text-vpurple-500"
          viewBox="0 0 1440 667"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1440 0H500C223.858 0 0 223.858 0 500V667H1111L1440 0Z"
            fill="currentColor"
          />
        </svg>
        <div className="max-w-screen-xl mx-auto px-4 space-y-8 relative py-12 lg:py-24">
          <Headline>
            <div className="text-white">Most Popular</div>
          </Headline>
          <div className="grid grid-cols-1 lg:grid-cols-12 justify-between items-center">
            <div className="lg:col-span-6 space-y-5 py-16 lg:py-24">
              <div className="space-y-2">
                <h5 className="font-meduim text-gray-200 text-lg uppercase">
                  Vortexpert's AI & Data Research
                </h5>
                <Headline>
                  <div className="text-start text-white">
                    Strategic Marketing in the Digital Age: Harnessing Data and
                    Innovation for Business Growth
                  </div>
                </Headline>
              </div>
              <div className="flex gap-4 items-center whitespace-nowrap">
                <div className="flex items-center gap-2 text-xs text-gray-100">
                  <div className="w-9 h-9 rounded-full bg-teal-400 flex justify-center items-center hover:bg-teal-500 focus:ring-4 ring-teal-400/50"></div>
                  By Vortex Team
                </div>
                <div className="w-[2px] h-3 bg-gray-100"></div>
                <div className="text-xs text-gray-100">June 1, 2023</div>
                <div className="w-[2px] h-3 bg-gray-100"></div>
                <div className="text-xs text-gray-100">8 min read</div>
              </div>
            </div>
            <div className=""></div>
            <Image
              src={riseOfAI}
              alt="hero-image"
              className="lg:col-span-5 w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
