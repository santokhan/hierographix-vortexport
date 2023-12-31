/* eslint-disable react/no-unescaped-entities */
import Headline from "@/components/shared/Headline";
import riseOfAI from "../../assets/images/blog/article/rise-of-ai.png";
import Image from "next/image";
import Styles from "@/components/home/connect/Connect.module.css";

export default function MostPopular(): JSX.Element {
  return (
    <div
      className={`${Styles.bgPurpleSkew} relative bg-vpurple-500 lg:bg-transparent overflow-hidden`}
    >
      <div className="max-w-screen-xl mx-auto px-4 space-y-8 relative py-16 lg:py-32">
        <Headline>
          <div className="text-white">Most Popular</div>
        </Headline>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 justify-between items-center">
          <div className="lg:col-span-6 space-y-5 lg:py-24">
            <div className="space-y-2">
              <h5 className="font-meduim text-gray-200 text-lg uppercase">
                Vortexpert's AI & Data Research
              </h5>
              <h2
                className={[
                  "text-2xl lg:text-5xl font-black text-center !leading-[1.25] text-gray-800",
                  "dark:text-white",
                ].join(" ")}
              >
                <div className="text-start text-white">
                  Strategic Marketing in the Digital Age: Harnessing Data and
                  Innovation for Business Growth
                </div>
              </h2>
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
          <Image
            src={riseOfAI}
            alt="hero-image"
            className="lg:col-span-6 w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
