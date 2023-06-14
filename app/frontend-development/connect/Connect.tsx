/* eslint-disable react/no-unescaped-entities */

import Headline from "@/components/shared/Headline";
import sunami from "../../assets/images/frontend/sunami.png";
import Image from "next/image";

export default function Connect(): JSX.Element {
  return (
    <div className="relative lg:mt-16 bg-vpurple-500 lg:bg-transparent overflow-hidden my-16 lg:mb-20">
      <div className="relative">
        <svg
          className="absolute w-10/12 top-0 left-1/2 -translate-x-1/2 hidden lg:block text-white"
          viewBox="0 0 1440 667"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1440 0H500C223.858 0 0 223.858 0 500V667H1111L1440 0Z"
            fill="currentColor"
          />
        </svg>

        <div className="max-w-screen-xl mx-auto px-4 space-y-10 lg:space-y-16 bg-white lg:bg-transparent py-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 justify-between items-center relative">
            <Image
              src={sunami}
              alt="hero-image"
              className="lg:col-span-5 p-4 w-full object-contain"
            />
            <div className="lg:col-span-7 space-y-5 py-16 lg:py-24">
              <div className="space-y-2">
                <h5 className="font-meduim text-gray-400 text-lg uppercase">
                  Unleashing Digital Marvels
                </h5>
                <Headline>
                  <div className="text-start text-gray-800">
                    Electrifying Frontend Development Services!
                  </div>
                </Headline>
              </div>
              <p className="text-gray-500">
                Every step of the way, we focus on speed, reliability and user
                satisfaction, so that each of our projects becomes an engaging
                and intuitive flow. With attention to detail, we create
                eye-catching animations, smooth transition effects and engaging
                interactions to ensure that the interfaces we build truly
                reflect your brand identity and business goals. From website
                development to complex web applications, we are committed to
                providing frontend solutions that are innovative, creative and
                tailored to your unique needs. Make your digital experience
                memorable and extraordinary with the Frontend Development
                services that we offer.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <svg
          className="absolute w-10/12 top-0 left-1/2 -translate-x-1/2 hidden lg:block"
          viewBox="0 0 1440 667"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1440 0H500C223.858 0 0 223.858 0 500V667H1111L1440 0Z"
            fill="#9C85FB"
          />
        </svg>
        <div className="max-w-screen-xl mx-auto px-4 py-12 relative">
          <div className="max-w-md mx-auto space-y-2 relative lg:py-32">
            <Headline>
              <span className="text-center">Connect with VortExpert</span>
            </Headline>
            <div className="space-y-8 lg:space-y-8 text-white">
              <p className="text-gray-200 text-center">
                Contact VortExpert Today & Unleash Your Business's True
                Potential with our Expertise and Innovation
              </p>
              <ul className="list-none space-y-4 lg:space-y-6 text-white">
                <li className="flex items-center gap-3">
                  <i className="fa fa-phone"></i>
                  +12-3456-7890-00
                </li>
                <li className="flex items-center gap-3">
                  <i className="fa fa-envelope"></i>email@vortexpert.io
                </li>
                <li className="flex items-center gap-3">
                  <i className="fa fa-location-arrow"></i>
                  2012A Rue RaudotMontréal QC H4E 2N9 Canada
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
