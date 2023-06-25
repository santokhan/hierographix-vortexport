"use client"

import Hero from "./hero/Hero";
import Electrofying from "./electrofying/Electrofying";
import Energizing from "./energizing/Energizing";
import ConnectForFrontend from "./connect/Connect";
import Mesmerizing from "./mesmerizing/Mesmerizing";
import CardList from "./card-list/CardList";

export default function FrontendDevelopment() {
  return (
    <div className="bg-vpurple-950">
      <Hero />
      <Energizing />
      <Electrofying />
      <CardList />
      <Mesmerizing />
      <ConnectForFrontend />
    </div>
  );
}
