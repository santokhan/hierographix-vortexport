import Image from "next/image";
import HeroImg from "../../../app/assets/images/hero-illustration.png";
import styles from "./Hero.module.css";
import SubscribeForm from "./SubscribeForm";
import { Poppins } from "next/font/google";
import Text from "@/components/shared/text/Text";
import RiveComponent from "./rive/RiveHero";
import Headline from "@/components/shared/Headline";

const poppins = Poppins({ subsets: ["latin"], weight: "600" });

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <Effect />
      <div className="max-w-screen-xl mx-auto px-4 relative">
        <div className="max-w-[800px] mx-auto flex flex-col items-center space-y-6 pt-12 lg:pt-20 text-start sm:text-center">
          <Headline className="text-start sm:text-center">Taking Your Business to the Summit of{" "} <span className="text-teal-500">Digital Success</span></Headline>
          <Text className="text-gray-400">
            We specialize in unleashing the full potential of your business by
            combining the power of creativity, and technical expertise.
          </Text>
          <SubscribeForm />
        </div>
        <RiveComponent />
      </div>
    </div>
  );
}

export const Effect = () => (
  <svg
    className="w-full max-h-[900px] text-vpurple-900 absolute -right-40 top-40 hidden lg:block"
    viewBox="0 0 1101 900"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1440 0H500C223.858 0 0 223.858 0 500V900H1111L1440 0Z"
      fill="url(#paint0_linear_2245_3)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_2245_3"
        x1="720"
        y1="0"
        x2="720"
        y2="900"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="currentColor" stopOpacity="0.38" />
        <stop offset="1" stopColor="currentColor" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

