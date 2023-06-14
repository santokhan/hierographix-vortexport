import Hero from "@/components/portfolio/hero/Hero";
import Featured from "./featured/Featured";
import Showcase from "./showcase/Showcase";

export default function OurPortfolio() {
  return (
    <div className="bg-vpurple-950">
      <Hero />
      <Featured />
      <Showcase />
    </div>
  );
}
