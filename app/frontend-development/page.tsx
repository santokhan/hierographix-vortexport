import Header from "../components/shared/header/Header";
import Hero from "./hero/Hero";
import Electrofying from "./electrofying/Electrofying";
import Energizing from "./energizing/Energizing";
import ConnectForFrontend from "./connect/Connect";
import Footer from "../components/shared/footer/Footer";
import Mesmerizing from "./mesmerizing/Mesmerizing";

export default function FrontendDevelopment() {
  return (
    <div className="bg-vpurple-950">
      <Header />
      <Hero />
      <Energizing />
      <Electrofying />
      <Mesmerizing />
      <ConnectForFrontend />
      <Footer />
    </div>
  );
}
