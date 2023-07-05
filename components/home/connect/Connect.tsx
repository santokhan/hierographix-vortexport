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

interface Link {
  icon: string;
  text: string;
  url: string;
}

const linkList: Link[] = [
  {
    icon: "phone",
    text: "+12-3456-7890-00",
    url: "tel:+123456789000"
  },
  {
    icon: "email",
    text: "email@vortexpert.io",
    url: "mailto:email@vortexpert.io"
  },
  {
    icon: "location",
    text: "2012A Rue RaudotMontréal QC H4E 2N9 Canada",
    url: "https://goo.gl/maps/AhRdLUxYdyhbSUja6"
  },
]

export function ConnectSimplify(): JSX.Element {
  return (
    <div
      className={`${Styles.bgPurpleSkew} bg-vpurple-500 lg:bg-transparent py-16 lg:py-28`}
    >
      <div className="max-w-lg mx-auto px-4 space-y-4">
        <Headline>
          <div className="max-w-sm mx-auto text-center">
            Connect with VortExpert
          </div>
        </Headline>
        <div className="space-y-8 lg:space-y-8 text-white">
          <p className="text-center">
            Contact VortExpert Today & Unleash Your Business's True Potential
            with our Expertise and Innovation
          </p>
          <div className="flex flex-col items-start gao-4 lg:gap-6 text-white">
            {linkList.map((e: Link, i: number) =>
              <ConnectLink key={i} url={e.url} icon={e.icon}>{e.text}</ConnectLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const ConnectLink = (props: { url: string, icon: string, children: any }) => {
  return <a
    href={props.url}
    className="flex items-center gap-3 font-medium group"
  >
    <Icon name={props.icon} />
    <div className={[
      "group-hover--underline hover:decoration-2 hover:underline-offset-2 relative",
    ].join(" ")}>
      <div className={[
        "w-0 h-0 bg-white absolute bottom-0 opacity-0 transition-all ease-in-out origin-left",
        "group-hover:w-full group-hover:opacity-100 group-hover:h-[2px]",
      ].join(" ")}></div>
      {props.children}
    </div>
  </a>
}

export const Icon = (props: { name: string }) => {
  switch (props.name) {
    case "email":
      return <i className="fa fa-envelope"></i>

    case "phone":
      return <i className="fa fa-phone"></i>

    case "location":
      return <i className="fa fa-location-arrow"></i>

    default:
      return <></>
  }
}