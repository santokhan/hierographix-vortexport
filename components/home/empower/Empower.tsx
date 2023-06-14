/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import emppower from "../../../app/assets/images/empower.png";
import Headline from "@/components/shared/Headline";
import SubscribeForm from "../hero/SubscribeForm";

export default function Empower() {
  return (
    <div className="relative overflow-hidden px-4 text-vpurple-500 dark:text-[#454657]">
      <svg
        className="w-full absolute"
        viewBox="0 0 1440 657"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0H940C1216.14 0 1440 223.858 1440 500V657H329L0 0Z"
          fill="url(#paint0_linear_2245_29)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2245_29"
            x1="720"
            y1="0"
            x2="720"
            y2="657"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="currentColor" stopOpacity="0.38" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-screen-xl mx-auto pb-20 relative">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center space-y-8 py-16">
          <div className="">
            <Logo />
          </div>
          <Headline>
            Empower Your Business with VortExpert's{" "}
            <span className="text-teal-500">Cutting-Edge Solutions!</span>
          </Headline>
          <SubscribeForm />
        </div>
        <Image
          src={emppower}
          alt="hero-image"
          className="w-full object-contain"
        />
      </div>
    </div>
  );
}

export function Logo() {
  return (
    <svg
      viewBox="0 0 62 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-14"
    >
      <path
        d="M20.6263 54.1249L22.6684 55.6181C28.9219 60.1908 37.0636 59.5767 40.9627 52.8631L50.8118 35.9045L40.5119 19.131L20.6263 54.1249Z"
        fill="url(#paint0_linear_1629_7)"
      />
      <path
        d="M11.0972 0.477661L8.76126 1.44173C1.608 4.394 -2.1449 11.6842 1.49279 18.5446L10.6815 35.8738L30.2879 35.8616L11.0972 0.477661Z"
        fill="url(#paint1_linear_1629_7)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.2462 18.9538L61.6621 18.7506L61.9149 16.2246C62.6889 8.48925 58.0561 1.72998 50.3236 1.72998L31.127 1.72998L40.2462 18.9538Z"
        fill="url(#paint2_linear_1629_7)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1629_7"
          x1="27.6027"
          y1="58.6128"
          x2="48.1496"
          y2="23.6151"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#886DF5" />
          <stop offset="1" stopColor="#9C85FB" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1629_7"
          x1="3.63636"
          y1="4.09306"
          x2="22.8125"
          y2="39.8685"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#886DF5" />
          <stop offset="1" stopColor="#9C85FB" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1629_7"
          x1="31.127"
          y1="10.3419"
          x2="61.9988"
          y2="10.3419"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9C85FB" />
          <stop offset="1" stopColor="#886DF5" />
        </linearGradient>
      </defs>
    </svg>
  );
}
