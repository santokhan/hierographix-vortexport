import Image from "next/image";
import HeroImg from "../../../app/assets/images/hero-illustration.png";
import styles from "./Hero.module.css";
import SubscribeForm from "./SubscribeForm";
import { Manrope } from "next/font/google";
import Text from "@/components/shared/text/Text";

const manrope = Manrope({ subsets: ["latin"] });

function Hero() {
  return (
    <div className="relative overflow-hidden">
      <Effect />
      <div className="max-w-screen-xl mx-auto px-4 pb-20 relative">
        <div className="max-w-[800px] mx-auto flex flex-col items-center space-y-6 py-16 lg:py-20">
          <h2 className="text-4xl lg:text-[3.5rem] font-bold text-start lg:text-center leading-[1.2]">
            Taking Your Business to the Summit of{" "}
            <span className="text-teal-500">Digital Success</span>
          </h2>
          <Text className="max-w-screen-sm text-gray-400 text-start lg:text-center">
            We specialize in unleashing the full potential of your business by
            combining the power of creativity, and technical expertise.
          </Text>
          <SubscribeForm />
        </div>

        <Image
          src={HeroImg}
          alt="hero-image"
          className="w-full object-contain"
        />
      </div>
    </div>
  );
}

export const Effect = () => (
  <svg
    className="w-11/12 max-h-[850px] text-vpurple-900 absolute right-0 bottom-0 hidden lg:block"
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
        <stop stop-color="currentColor" stop-opacity="0.38" />
        <stop offset="1" stop-color="currentColor" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export default Hero;
