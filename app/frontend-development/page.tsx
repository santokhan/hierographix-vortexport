import Hero from "./hero/Hero";
import Electrofying from "./electrofying/Electrofying";
import Energizing from "./energizing/Energizing";
import ConnectForFrontend from "./connect/Connect";
import Mesmerizing from "./mesmerizing/Mesmerizing";

export default function FrontendDevelopment() {
  return (
    <div className="bg-vpurple-950">
      <Hero />
      <Energizing />
      <Electrofying />
      <Mesmerizing />
      <ConnectForFrontend />
    </div>
  );
}
