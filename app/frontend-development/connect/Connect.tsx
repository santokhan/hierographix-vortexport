/* eslint-disable react/no-unescaped-entities */

import Headline from "@/components/shared/Headline";
import sunami from "../../assets/images/frontend/sunami.png";
import Image from "next/image";
import Styles from "./Connect.module.css";

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
      <div
        className={`${Styles.bgPurpleSkew} lg:-mt-20 bg-vpurple-500 lg:bg-transparent py-16 lg:py-40`}
      >
        <div className="max-w-lg mx-auto px-4 space-y-4">
          <Headline>
            <div className="text-start">Connect with VortExpert</div>
          </Headline>
          <div className="space-y-8 lg:space-y-8 text-white">
            <p className="text-start">
              Contact VortExpert Today & Unleash Your Business's True Potential
              with our Expertise and Innovation
            </p>
            <div className="space-y-4 lg:space-y-6 text-white">
              <a
                href="tel:+123456789000"
                className="flex items-center gap-3 font-medium group"
              >
                <i className="fa fa-phone"></i>
                <span className="group-hover:underline hover:decoration-2">
                  +12-3456-7890-00
                </span>
              </a>
              <a
                href="mailto:email@vortexpert.io"
                className="flex items-center gap-3 font-medium group"
              >
                <i className="fa fa-envelope"></i>
                <span className="group-hover:underline hover:decoration-2">
                  email@vortexpert.io
                </span>
              </a>
              <a
                href="https://goo.gl/maps/AhRdLUxYdyhbSUja6"
                className="flex items-center gap-3 font-medium group"
              >
                <i className="fa fa-location-arrow"></i>
                <address className="group-hover:underline hover:decoration-2">
                  2012A Rue RaudotMontréal QC H4E 2N9 Canada
                </address>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
