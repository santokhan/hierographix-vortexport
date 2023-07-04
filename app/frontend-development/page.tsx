"use client"

import Hero from "./hero/Hero";
import Electrofying from "./electrofying/Electrofying";
import Energizing from "./energizing/Energizing";
import ConnectForFrontend from "./connect/Connect";
import Mesmerizing from "./mesmerizing/Mesmerizing";
import CardList from "./card-list/CardList";
import { SkewMiddle, SkewTopEffect } from "./Effect";

export default function FrontendDevelopment() {
  return (
    <div className="bg-vpurple-950 overflow-hidden">
      <SkewTopEffect />
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

