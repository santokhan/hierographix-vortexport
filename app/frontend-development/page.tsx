"use client"
import ScrollAnimation from 'react-animate-on-scroll';

import Hero from "./hero/Hero";
import Electrofying from "./electrofying/Electrofying";
import Energizing from "./energizing/Energizing";
import ConnectForFrontend from "./connect/Connect";
import Mesmerizing from "./mesmerizing/Mesmerizing";
import CardList from "./card-list/CardList";

export default function FrontendDevelopment() {
  return (
    <div className="bg-vpurple-950">
      <ScrollAnimation animateIn="fadeIn">
        <Hero />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Energizing />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Electrofying />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <CardList />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Mesmerizing />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <ConnectForFrontend />
      </ScrollAnimation>
    </div>
  );
}
