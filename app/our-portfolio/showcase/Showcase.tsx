import Image from "next/image";
import Headline from "@/components/shared/Headline";
import Styles from "./Showcase.module.css";
import Link from "next/link";

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
              <Link href={e.url}
                className="lg:col-span-2 w-full rounded-lg space-y-2 relative"
                key={i}
              >
                <ShowCaseImage src={e.src} />
                <div
                  className={[
                    "absolute left-0 top-0 h-full w-full p-6 flex flex-col justify-center items-center space-y-2 z-[10]",
                    Styles.showcaseEffect,
                  ].join(" ")}
                >
                  <div className="max-w-sm mx-auto text-center text-xl font-bold  text-gray-100 capitalize">
                    {e.title}
                  </div>
                </div>
              </Link>
            );
          } else if (i === 4) {
            return (
              <Link href={e.url} className="w-full rounded-lg space-y-2 relative group" key={i}>
                <ShowCaseImage src={e.src} />
                <div
                  className={[
                    "absolute left-0 top-0 h-full w-full p-6 flex flex-col justify-end space-y-2 z-[3]",
                    Styles.showcaseEffect].join(" ")}
                >
                  <div className="max-h-44 h-full flex flex-col justify-end">
                    <Title url={e.url}>{e.title}</Title>
                    <SeeMore url={e.url} />
                  </div>
                </div>
              </Link>
            );
          } else if (i === 9) {
            return (
              <Link href={e.url}
                className="lg:col-span-2 lg:row-span-2 w-full rounded-lg space-y-2 relative group"
                key={i}
              >
                <ShowCaseImage src={e.src} />
                <div
                  className={[
                    "absolute left-0 top-0 h-full w-full p-6 flex flex-col justify-end space-y-2 z-[3]",
                    Styles.showcaseEffect].join(" ")}
                >
                  <Title url={e.url}>{e.title}</Title>
                  <SeeMore url={e.url} />
                </div>
              </Link>
            );
          } else {
            return (
              <Link href={e.url} className="w-full rounded-lg space-y-2 relative group" key={i}>
                <ShowCaseImage src={e.src} />
                <div
                  className={[
                    "absolute left-0 top-0 h-full w-full p-6 flex flex-col justify-end space-y-2 z-[3]",
                    Styles.showcaseEffect].join(" ")}
                >
                  <Title url={e.url}>{e.title}</Title>
                  <SeeMore url={e.url} />
                </div>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
}

export function ShowCaseImage(props: { src: string }) {
  return (
    <div className="w-full h-full overflow-hidden rounded-lg">
      <Image
        src={require(`../../assets/images/portfolio/${props.src}.png`)} alt="showcase"
        className="w-full h-full object-contain transition-transform ease-in duration-150 group-hover:scale-[1.125]"
      />
    </div>
  );
}

export function SeeMore(props: any) {
  return (
    <div className="flex gap-6 items-center">
      <div className="border border-white/20 w-full h-[2px]"></div>
      <div
        className="inline-flex items-center gap-2 text-center text-white whitespace-nowrap transition-transform ease-in-out group-hover:text-vpurple-500"
      >
        See more
      </div>
    </div>
  );
}

export function Title(props: any) {
  return (
    <div
      className="text-xl font-bold  text-gray-100 capitalize"
    >
      {props.children}
    </div>
  );
}
