"use client";
/* eslint-disable react/no-unescaped-entities */
import Headline from "@/components/shared/Headline";
import {
  SeeMore,
  Title,
  cardsData,
} from "@/app/our-portfolio/showcase/Showcase";
import Image from "next/image";
import Styles from "../../our-portfolio/showcase/Showcase.module.css";
import Link from "next/link";

export default function Mesmerizing() {
  let data = cardsData.filter((e, i) => i !== 3);
  data = data.filter((e, i) => i !== 3);

  return (
    <div className="max-w-screen-xl mx-auto space-y-8 py-16 lg:py-20">
      <Headline>
        Mesmerizing portfolio of{" "}
        <span className="text-teal-400">extraordinary creations</span>
      </Headline>
      <div className="flex flex-wrap">
        {data.slice(0, 5).map((e, i) => {
          let w;
          if (i === 0 || i === 1 || i === 2) {
            w = "w-full lg:w-4/12";
          } else if (i === 3 || i === 4) {
            w = "w-full lg:w-5/12";
          }

          return (
            <div className={`p-4 ${w}`} key={i}>
              <div className="w-full rounded-lg space-y-2 relative">
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
            </div>
          );
        })}
        <div className="p-4 flex justify-center items-center">
          <Link
            href="/"
            className="flex gap-3 items-center justify-center whitespace-nowrap text-vpurple-500 hover:underline underline-offset-2"
          >
            {/* <div className="border border-vpurple-500/30 w-full h-[2px]"></div> */}
            All works <i className="fa fa-arrow-right text-sm"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
