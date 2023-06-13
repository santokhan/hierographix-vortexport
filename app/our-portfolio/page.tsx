import Header from "../components/shared/header/Header";
import Hero from "./hero/Hero";
import Footer from "../components/shared/footer/Footer";
import Featured from "./featured/Featured";
import Showcase from "./showcase/Showcase";

export default function OurPortfolio() {
  return (
    <div className="bg-vpurple-950">
      <Header />
      <Hero />
      <Featured />
      <Showcase />
      <Footer />
    </div>
  );
}
