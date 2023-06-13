/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import heroImg from "../../assets/images/portfolio/portfolio.png";

export default function Hero() {
  return (
    <div className="relative overflow-hidden py-12">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-8 items-center px-4">
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold leading-[1.2]">
              Discover <span className="text-teal-500">Portfolio</span>
            </h2>
            <p className="max-w-screen-sm text-gray-100 lg:text-xl">
              A Showcase of Creative Excellence
            </p>
          </div>
          <p className="max-w-screen-sm lg:text-lg text-gray-400">
            Explore our works that combine creativity, technical expertise and a
            deep understanding of our clients' needs. Come join us on a visual
            journey and discover the magic behind the art in our portfolio.
          </p>
        </div>
        <div className="w-full lg:w-1/2 ">
          <Image src={heroImg} alt="blog-hero" className="w-full" />
        </div>
      </div>
    </div>
  );
}
