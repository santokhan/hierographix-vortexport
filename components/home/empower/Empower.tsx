/* eslint-disable react/no-unescaped-entities */
import Headline from "@/components/shared/Headline";
import SubscribeForm from "../hero/SubscribeForm";
import EmpowerImage from "./EmpowerImage";

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
        <div className="max-w-[900px] mx-auto flex flex-col items-center space-y-8 py-16 leading-relaxed">
          <Logo />
          <Headline className="leading-[1.25]">
            Empower Your Business with VortExpert's{" "}
            <span className="text-teal-500">Cutting-Edge Solutions!</span>
          </Headline>
          <SubscribeForm />
        </div>
        <EmpowerImage />
      </div>
    </div>
  );
}

export function Logo() {
  return (
    <svg className="w-14" viewBox="0 0 66 63" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.6253 54.1249L26.6674 55.6181C32.921 60.1908 41.0626 59.5767 44.9617 52.8631L54.8108 35.9045L44.5109 19.131L24.6253 54.1249Z" fill="url(#paint0_linear_2223_5781)" />
      <path d="M15.0962 0.477661L12.7603 1.44173C5.60703 4.394 1.85412 11.6842 5.49181 18.5446L14.6805 35.8738L34.2869 35.8616L15.0962 0.477661Z" fill="url(#paint1_linear_2223_5781)" />
      <path fillRule="evenodd" clipRule="evenodd" d="M44.2462 18.9537L65.6621 18.7506L65.9149 16.2246C66.6889 8.48919 62.0561 1.72992 54.3236 1.72992L35.127 1.72992L44.2462 18.9537Z" fill="url(#paint2_linear_2223_5781)" />
      <defs>
        <linearGradient id="paint0_linear_2223_5781" x1="31.6017" y1="58.6128" x2="52.1486" y2="23.6151" gradientUnits="userSpaceOnUse">
          <stop stopColor="#886DF5" />
          <stop offset="1" stopColor="#9C85FB" />
        </linearGradient>
        <linearGradient id="paint1_linear_2223_5781" x1="7.63538" y1="4.09306" x2="26.8115" y2="39.8685" gradientUnits="userSpaceOnUse">
          <stop stopColor="#886DF5" />
          <stop offset="1" stopColor="#9C85FB" />
        </linearGradient>
        <linearGradient id="paint2_linear_2223_5781" x1="35.127" y1="10.3418" x2="65.9988" y2="10.3418" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9C85FB" />
          <stop offset="1" stopColor="#886DF5" />
        </linearGradient>
      </defs>
    </svg>

  );
}
