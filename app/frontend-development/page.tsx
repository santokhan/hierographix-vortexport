"use client"

import Hero from "./hero/Hero";
import Electrofying from "./electrofying/Electrofying";
import Energizing from "./energizing/Energizing";
import ConnectForFrontend from "./connect/Connect";
import Mesmerizing from "./mesmerizing/Mesmerizing";
import CardList from "./card-list/CardList";

export default function FrontendDevelopment() {
  return (
    <div className="bg-vpurple-950 overflow-hidden">
      <SkewTop />
      <SkewMiddle />

      <div className="relative">
        <Hero />
        <Energizing />
        <Electrofying />
        <CardList />
        <Mesmerizing />
        <ConnectForFrontend />
      </div>
    </div>
  );
}

export const SkewTop = () => <svg className="w-full absolute right-0 top-16 hidden lg:block" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1440 0H500C223.858 0 0 223.858 0 500V900H1111L1440 0Z" fill="url(#paint0_linear_2148_1593)" />
  <defs>
    <linearGradient id="paint0_linear_2148_1593" x1="720" y1="0" x2="720" y2="900" gradientUnits="userSpaceOnUse">
      <stop stopColor="#454657" stopOpacity="0.38" />
      <stop offset="1" stopColor="#454657" stopOpacity="0" />
    </linearGradient>
  </defs>
</svg>

export const SkewMiddle = () => <svg className="w-2/3 absolute right-0 top-1/2 hidden lg:block" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1440 0H500C223.858 0 0 223.858 0 500V900H1111L1440 0Z" fill="url(#paint0_linear_2148_1593)" />
  <defs>
    <linearGradient id="paint0_linear_2148_1593" x1="720" y1="0" x2="720" y2="900" gradientUnits="userSpaceOnUse">
      <stop stopColor="#454657" stopOpacity="0.38" />
      <stop offset="1" stopColor="#454657" stopOpacity="0" />
    </linearGradient>
  </defs>
</svg>
