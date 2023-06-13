import Image from "next/image";
import Styles from "./Showcase.module.css";
import Headline from "@/app/components/shared/Headline";

export default function Showcase() {
  const cardsData = [
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

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16 lg:py-20 space-y-10">
      <Headline>
        Another <span className="text-teal-400">Creative</span> Showcase
      </Headline>
      <div
        className={
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols3 gap-8 " +
          Styles.showcaseGrid
        }
      >
        {cardsData.map((e, i) => {
          if (i === 3) {
            return (
              <div
                className="lg:col-span-2 w-full rounded-lg space-y-2 relative"
                key={i}
              >
                <Image
                  src={require(`../../assets/images/portfolio/${e.src}.png`)}
                  alt={"showcase" + i}
                  className="w-full h-full object-contain"
                />
                <div className="absolute z-[3] h-full w-full px-6 py-5 hidden lex flex-col justify-end">
                  <a href={e?.url}>
                    <h5 className="text-xl font-bold tracking-tight text-gray-100 capitalize">
                      {e.title}
                    </h5>
                  </a>
                  {e.url && (
                    <div className="flex justify-end">
                      <a
                        href={e.url}
                        className="inline-flex items-center gap-2 text-sm font-medium text-center text-vpurple-500 hover:text-vpurple-500/60"
                      >
                        See more
                        <i className="fa fa-angle-right"></i>
                      </a>
                    </div>
                  )}
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
                <div className="absolute  z-[3] h-full px-6 py-5 hidden lex flex-col justify-end">
                  <a href={e.url}>
                    <h5 className="text-xl font-bold tracking-tight text-gray-100 capitalize">
                      {/* {e.title} */}
                    </h5>
                  </a>
                  <div className="flex justify-end">
                    <a
                      href={e.url}
                      className="inline-flex items-center gap-2 text-sm font-medium text-center text-vpurple-500 hover:text-vpurple-500/60"
                    >
                      See more
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </div>
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
                <div className="absolute  z-[3] h-full w-full px-6 py-5 hidden lex flex-col justify-end">
                  <a href={e.url}>
                    <h5 className="text-xl font-bold tracking-tight text-gray-100 capitalize">
                      {e.title}
                    </h5>
                  </a>
                  <div className="flex justify-end">
                    <a
                      href={e.url}
                      className="inline-flex items-center gap-2 text-sm font-medium text-center text-vpurple-500 hover:text-vpurple-500/60"
                    >
                      See more
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
