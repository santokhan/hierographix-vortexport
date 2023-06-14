/* eslint-disable react/no-unescaped-entities */

import Headline from "@/components/shared/Headline";

export default function Connect(): JSX.Element {
  return (
    <div className="relative lg:mt-16 bg-vpurple-500 lg:bg-transparent overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 py-12 relative">
        <svg
          className="absolute w-full mx-auto top-0 hidden lg:block"
          viewBox="0 0 1440 667"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1440 0H500C223.858 0 0 223.858 0 500V667H1111L1440 0Z"
            fill="#9C85FB"
          />
        </svg>

        <div className="max-w-md mx-auto space-y-2 relative lg:py-32">
          <Headline>
            <span className="text-center">Connect with VortExpert</span>
          </Headline>
          <div className="space-y-5 lg:space-y-8 text-white">
            <p className="text-white text-center">
              Contact VortExpert Today & Unleash Your Business's True Potential
              with our Expertise and Innovation
            </p>
            <ul className="list-none space-y-6">
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
  );
}
