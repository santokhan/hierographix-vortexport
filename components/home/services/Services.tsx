"use client"

import Image from "next/image";
import Styles from "./Services.module.css";
import Headline from "@/components/shared/Headline";

import BackendImage from "./svg/Backend";
import DevOpsImage from "./svg/DevOps";
import FrontendImage from "./svg/Frontend";
import ResearchImage from "./svg/Research";
import MarketingImage from "./svg/Marketing";
import DesignImage from "./svg/Design";

interface Card {
  src: () => JSX.Element;
  title: string;
  url: string;
  desc: string;
}

export const cardsData: Card[] = [
  {
    src: MarketingImage,
    title: "marketing",
    url: "",
    desc: "Vortexpert's marketing services include customized social media content creation for different platforms to increase brand awareness and engagement. The agency also offers SEO services to improve website visibility and increase organic traffic. Additionally, Vortexpert can help clients track website traffic and create and manage PPC campaigns on platforms such as Google Ads.",
  },
  {
    src: DesignImage,
    title: "design",
    url: "",
    desc: "Vortexpert's design services include customized graphic design services for logos, branding, website design, social media graphics, and print materials that align with the client's brand identity. The agency also offers Shopify store design services to create visually appealing and easy-to-navigate storefronts for clients' online stores.",
  },
  {
    src: FrontendImage,
    title: "Frontend Development",
    url: "",
    desc: "Vortexpert provides front-end design services for websites and applications to ensure they are user-friendly and aligned with the client's brand.",
  },
  {
    src: BackendImage,
    title: "Backend Development",
    url: "",
    desc: "Vortexpert's back-end services include web development and programming for websites and web applications using different technologies such as PHP, Python, Java, etc. The agency also provides server setup and configuration services using different technologies such as AWS, Azure, Google Cloud, etc. Additionally, Vortexpert offers API development and integration services to enable different software applications to communicate with each other.",
  },
  {
    src: DevOpsImage,
    title: "Dev Ops",
    url: "",
    desc: "Vortexpert's DevOps services include managing infrastructure and deploying software applications to different environments using tools such as Docker, Kubernetes, and Ansible. The agency also offers continuous integration and deployment services to automate the software development process using tools such as Jenkins and Travis CI. Additionally, Vortexpert provides monitoring and logging services to track the performance and health of software applications using tools such as Nagios, Grafana, and ELK stack.",
  },
  {
    src: ResearchImage,
    title: "Vortexpert's AI & Data Research",
    url: "",
    desc: "Vortexpert's AI & Data Research services include leveraging machine learning algorithms and predictive analytics to gain insights into data and improve decision-making using technologies such as Python, TensorFlow, and PyTorch. The agency also offers natural language processing services to analyze and process unstructured data such as text and speech using natural language processing techniques. Additionally, Vortexpert provides computer vision services to analyze and process visual data such as images and videos using computer vision algorithms.",
  },
];

export default function Services() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16 lg:py-20 space-y-10">
      <Headline>
        Our <span className="text-teal-400">Services</span>
      </Headline>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {cardsData.map((e: Card, i: number) => (
          // card loop
          <div className="max-w-md mx-auto rounded-lg shadow" key={i}>
            <a href={e.url} className="w-full flex justify-center items-center">
              {/* <Image
                src={require(`../../../app/assets/images/services/${e.src}.png`)}
                alt={e.title}
                width={0}
                height={0}
                className="w-full object-contain"
              /> */}
              {e.src()}
            </a>
            <div className="p-5">
              <a href={e.url}>
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-100 capitalize">
                  {e.title}
                </h5>
              </a>
              <p
                className={[
                  Styles.cardDesc,
                  "mb-3 font-normal text-gray-400 h-24 overflow-hidden text-ellipsis",
                ].join(" ")}
              >
                {e.desc}
              </p>
              <a
                href={e.url}
                className={[
                  "relative inline-flex items-center my-1 py-1 text-sm font-medium text-center text-vpurple-500 hover:text-vpurple-500 group",
                  "focus:ring-4 focus:outline-none focus:ring-blue-300",
                ].join(" ")}
              >
                <span>Read more</span>
                <svg
                  aria-hidden="true"
                  className={[
                    "w-4 ml-2 -translate-x-4 opacity-0 transition-transform ease-in-out",
                    "group-hover:translate-x-0 group-hover:opacity-100 hidden",
                  ].join(" ")}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div className="absolute bottom-0 left-0 bg-vpurple-500 h-[2px] w-0 group-hover:w-full transition-all ease-in-out"></div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const cardsDataOld = [
  {
    src: "marketing",
    title: "marketing",
    url: "",
    desc: "Vortexpert's marketing services include customized social media content creation for different platforms to increase brand awareness and engagement. The agency also offers SEO services to improve website visibility and increase organic traffic. Additionally, Vortexpert can help clients track website traffic and create and manage PPC campaigns on platforms such as Google Ads.",
  },
  {
    src: "design",
    title: "design",
    url: "",
    desc: "Vortexpert's design services include customized graphic design services for logos, branding, website design, social media graphics, and print materials that align with the client's brand identity. The agency also offers Shopify store design services to create visually appealing and easy-to-navigate storefronts for clients' online stores.",
  },
  {
    src: "frontend-development",
    title: "Frontend Development",
    url: "",
    desc: "Vortexpert provides front-end design services for websites and applications to ensure they are user-friendly and aligned with the client's brand.",
  },
  {
    src: "backend-development",
    title: "Backend Development",
    url: "",
    desc: "Vortexpert's back-end services include web development and programming for websites and web applications using different technologies such as PHP, Python, Java, etc. The agency also provides server setup and configuration services using different technologies such as AWS, Azure, Google Cloud, etc. Additionally, Vortexpert offers API development and integration services to enable different software applications to communicate with each other.",
  },
  {
    src: "dev-ops",
    title: "Dev Ops",
    url: "",
    desc: "Vortexpert's DevOps services include managing infrastructure and deploying software applications to different environments using tools such as Docker, Kubernetes, and Ansible. The agency also offers continuous integration and deployment services to automate the software development process using tools such as Jenkins and Travis CI. Additionally, Vortexpert provides monitoring and logging services to track the performance and health of software applications using tools such as Nagios, Grafana, and ELK stack.",
  },
  {
    src: "data-research",
    title: "Vortexpert's AI & Data Research",
    url: "",
    desc: "Vortexpert's AI & Data Research services include leveraging machine learning algorithms and predictive analytics to gain insights into data and improve decision-making using technologies such as Python, TensorFlow, and PyTorch. The agency also offers natural language processing services to analyze and process unstructured data such as text and speech using natural language processing techniques. Additionally, Vortexpert provides computer vision services to analyze and process visual data such as images and videos using computer vision algorithms.",
  },
];