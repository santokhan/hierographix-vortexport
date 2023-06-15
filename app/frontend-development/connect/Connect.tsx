/* eslint-disable react/no-unescaped-entities */

import Headline from "@/components/shared/Headline";
import sunami from "../../assets/images/frontend/sunami.png";
import Image from "next/image";
import Styles from "./Connect.module.css";
import { ConnectSimplify } from "@/components/home/connect/Connect";

export default function Connect(): JSX.Element {
  return (
    <div className="overflow-hidden py-16">
      {/* Background will be `'lg:bg-transparent'` */}
      <div
        className={`${Styles.bgElectrofiying} bg-white lg:bg-transparent py-16 lg:py-40`}
      >
        <div className="max-w-screen-xl mx-auto px-4 space-y-10 lg:space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 justify-between items-center">
            <Image
              src={sunami}
              alt="hero-image"
              className="lg:col-span-4 w-full object-contain"
            />
            <div className="lg:col-span-6 space-y-5">
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

      {/* Purple Skew sectoin it will have `"lg:-mt-20"`, background will be `'lg:bg-transparent'` */}
      <div className="lg:-mt-20">
        <ConnectSimplify />
      </div>
    </div>
  );
}
