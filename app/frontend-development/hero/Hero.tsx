import Image from "next/image";
import HeroImg from "../../assets/images/frontend/expertise.png";
import styles from "./Hero.module.css";
import SubscribeForm from "@/components/home/hero/SubscribeForm";

function Hero() {
  return (
    <div className="relative overflow-hidden px-4">
      <Effect />
      <div className="max-w-screen-xl mx-auto">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center space-y-8 py-16 lg:py-20">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-start lg:text-center leading-[1.2]">
              Taking Your Business to the Summit of{" "}
              <span className="text-teal-500">Digital Success</span>
            </h2>
            <p className="max-w-screen-sm text-gray-400 text-start lg:text-center lg:text-lg">
              We specialize in unleashing the full potential of your business by
              combining the power of creativity, and technical expertise.
            </p>
          </div>
          <SubscribeForm />
        </div>
        <Image
          src={HeroImg}
          alt="hero-image"
          className="w-full object-contain md:max-w-3xl mx-auto"
        />
      </div>
    </div>
  );
}

export const Effect = () => <div className={styles.heroEffect}></div>;

export default Hero;
