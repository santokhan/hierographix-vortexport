import Image from "next/image";
import Headline from "@/components/shared/Headline";
import Styles from "./Showcase.module.css";

export const cardsData = [
  {
    src: "innovatex",
    title: "InnovateX",
    url: "",
  },
  {
    src: "momentum-studios",
    title: "Momentum Studios",
    url: "",
  },
  {
    src: "the-bold-collective",
    title: "The Bold Collective",
    url: "",
  },
  {
    src: "transforming-challenges-into-stepping-stones-for-success",
    title: "Transforming challenges into stepping stones for success",
    url: "",
  },
  {
    src: "nexus-labs",
    title: "Nexus Labs",
    url: "",
  },
  {
    src: "elevate-design",
    title: "Elevate Design",
    url: "",
  },
  {
    src: "digital-frontier",
    title: "Digital Frontier",
    url: "",
  },
  {
    src: "infinite-insights",
    title: "Infinite Insights",
    url: "",
  },
  {
    src: "spark-innovations",
    title: "Spark Innovations",
    url: "",
  },
  {
    src: "the-dynamo-agency",
    title: "The Dynamo Agency",
    url: "",
  },
  {
    src: "vibrant-visionaries",
    title: "Vibrant Visionaries",
    url: "",
  },
];
export default function Showcase() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16 lg:py-20 space-y-10">
      <Headline className="mx-auto max-w-lg">
        Another <span className="text-teal-400">Creative</span> Showcase
      </Headline>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols3 gap-8 ${Styles.showcaseGrid}`}
      >
        {cardsData.map((e, i) => {
          if (i === 3) {
            return (
              <div
                className="lg:col-span-2 w-full rounded-lg space-y-2 relative overflowhidden"
                key={i}
              >
                <Image
                  src={require(`../../assets/images/portfolio/${e.src}.png`)}
                  alt={"showcase" + i}
                  className="w-full h-full object-contain"
                />
                <div
                  className={[
                    "absolute top-0 left-0 w-full h-full z-[10] p-6 flex flex-col justify-center items-center space-y-2",
                    Styles.showcaseEffect,
                  ].join(" ")}
                >
                  <a
                    href={e?.url}
                    className="max-w-sm mx-auto text-center text-xl font-bold tracking-tight text-gray-100 capitalize"
                  >
                    {e.title}
                  </a>
                </div>
              </div>
            );
          } else if (i === 4) {
            return (
              <div className="w-full rounded-lg space-y-2 relative" key={i}>
                <Image
                  src={require(`../../assets/images/portfolio/${e.src}.png`)}
                  alt={"showcase" + i}
                  className="w-full h-full object-contain"
                />
                <div
                  className={
                    "absolute left-0 top-0 z-[3] h-full w-full p-6 flex flex-col justify-center space-y-2 " +
                    Styles.showcaseEffect
                  }
                >
                  <div className="max-h-44 h-full flex flex-col justify-end">
                    <Title url={e.url}>{e.title}</Title>
                    <SeeMore url={e.url} />
                  </div>
                </div>
              </div>
            );
          } else if (i === 9) {
            return (
              <div
                className="lg:col-span-2 lg:row-span-2 w-full rounded-lg space-y-2 relative"
                key={i}
              >
                <Image
                  src={require(`../../assets/images/portfolio/${e.src}.png`)}
                  alt={"showcase" + i}
                  className="w-full h-full object-contain"
                />
                <div
                  className={`absolute left-0 top-0 z-[3] h-full w-full p-6 flex flex-col justify-end space-y-2 ${Styles.showcaseEffect}`}
                >
                  <Title url={e.url}>{e.title}</Title>
                  <SeeMore url={e.url} />
                </div>
              </div>
            );
          } else {
            return (
              <div className="w-full rounded-lg space-y-2 relative" key={i}>
                <Image
                  src={require(`../../assets/images/portfolio/${e.src}.png`)}
                  alt={"showcase" + i}
                  className="w-full h-full object-contain"
                />
                <div
                  className={`absolute left-0 top-0 z-[3] h-full w-full p-6 flex flex-col justify-end space-y-2 ${Styles.showcaseEffect}`}
                >
                  <Title url={e.url}>{e.title}</Title>
                  <SeeMore url={e.url} />
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export function SeeMore(props: any) {
  return (
    <div className="flex gap-6 items-center">
      <div className="border border-white/20 w-full h-[2px]"></div>
      <a
        href={props.url}
        className="inline-flex items-center gap-2 text-center text-white whitespace-nowrap group transition-transform ease-in-out hover:text-vpurple-500"
      >
        <span>See more</span>
        {/* <i
          className={[
            "fa fa-angle-right -translate-x-3 opacity-0 transition-all ease-in-out hidden",
            "group-hover:translate-x-0 group-hover:opacity-100",
          ].join(" ")}
        ></i> */}
      </a>
    </div>
  );
}

export function Title(props: any) {
  return (
    <a
      href={props.url}
      className="text-xl font-bold tracking-tight text-gray-100 capitalize"
    >
      {props.children}
    </a>
  );
}
