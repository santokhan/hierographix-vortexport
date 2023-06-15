/* eslint-disable react/no-unescaped-entities */

import Headline from "@/components/shared/Headline";
import Styles from "./Connect.module.css";

export default function ConnectWithSpacing(): JSX.Element {
  return (
    <div className="py-20">
      <ConnectSimplify />
    </div>
  );
}

export function ConnectSimplify(): JSX.Element {
  return (
    <div
      className={`${Styles.bgPurpleSkew} bg-vpurple-500 lg:bg-transparent py-16 lg:py-40`}
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
  );
}
