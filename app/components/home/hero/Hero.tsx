import Image from "next/image";
import HeroImg from "../../assets/images/hero-illustration.png";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className="relative overflow-hidden">
      <Effect />
      <div className="max-w-screen-xl mx-auto pb-20">
        <div className="max-w-screen-lg mx-auto px-4 flex flex-col items-center space-y-8 py-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-start lg:text-center leading-[1.2]">
            Taking Your Business to the Summit of{" "}
            <span className="text-teal-500">Digital Success</span>
          </h2>
          <p className="max-w-screen-sm text-gray-400 text-start lg:text-center lg:text-lg">
            We specialize in unleashing the full potential of your business by
            combining the power of creativity, and technical expertise.
          </p>
          <form className="w-full max-w-md">
            <div className="rounded-lg bg-[#353547] flex">
              <input
                type="text"
                id="sub-email"
                className="bg-transparent h-12 px-4 rounded-lg w-full focus:outline-none"
                placeholder="Your email"
              />
              <label htmlFor="sub-email">
                <button
                  type="submit"
                  className="bg-vlinear text-white h-12 px-4 lg:px-6 rounded-lg whitespace-nowrap hover:brightness-90 focus:ring-4 focus:ring-vpurple-500/50"
                >
                  Talk with us
                </button>
              </label>
            </div>
          </form>
        </div>
        <Image
          src={HeroImg}
          alt="hero-image"
          className="w-full object-contain"
        />
      </div>
    </div>
  );
}

export const Effect = () => <div className={styles.heroEffect}></div>;

export default Hero;
