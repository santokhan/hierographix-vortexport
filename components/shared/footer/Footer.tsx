"use client";

import Logo from "../logo/Logo";
import Empower from "../../home/empower/Empower";
import { usePathname } from "next/navigation";

export const linkList = [
  {
    title: "Services",
    links: [
      {
        name: "Marketing",
        url: "/marketing",
      },
      {
        name: "Design",
        url: "/design",
      },
      {
        name: "Frontend Development",
        url: "/frontend-development",
      },
      {
        name: "Backend Development",
        url: "/backend-development",
      },
      {
        name: "Dev Ops",
        url: "/dev-ops",
      },
      {
        name: "Vortexpert's AI & Data Research",
        url: "/data-research",
      },
    ],
  },
  {
    title: "Useful link",
    links: [
      {
        name: "Expertise",
        url: "/expertise",
      },
      {
        name: "Our Portfolio",
        url: "/our-portfolio",
      },
      {
        name: "Blog",
        url: "/blog",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        name: "Terms of use",
        url: "/terms-of-use",
      },
      {
        name: "Privacy Policy",
        url: "/privacy-policy",
      },
      {
        name: "Status",
        url: "/status",
      },
    ],
  },
];

export default function Footer() {
  const pathName = usePathname();
  return (
    <footer className="bg-white dark:bg-vpurple-950">
      <Empower />
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="lg:flex lg:justify-between gap-12">
          <div className="lg:w-5/12 mb-6 md:mb-0 space-y-5">
            <a href="/" className="flex items-center">
              <Logo dark={true} />
            </a>
            <p className="text-gray-400">
              With VortExpert as your trusted partner, you can unlock the full
              potential of your online presence and achieve long-lasting success
              in the digital landscape.
            </p>
            <SocialMedia />
          </div>
          {/* Navs */}
          <div className="lg:w-7/12 flex gap-8 flex-wrap flex-col lg:flex-row justify-between">
            {linkList.map((e, i) => (
              <div key={i}>
                <h2 className="mb-4 font-semibold text-gray-400 dark:text-gray-500 uppercase">
                  {e.title}
                </h2>
                <ul className="text-gray-800 dark:text-gray-200 font-medium">
                  {e.links.map((ele: any, ind: number) => (
                    <li className="mb-4" key={ind}>
                      <a
                        href={ele.url}
                        className={`flex items-center gap-2 group transition-all ease-out duration-200 relative hover:text-vpurple-500 ${
                          ele.url === pathName && "text-vpurple-500"
                        }`}
                      >
                        {ele.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="my-6 border-gray-200 dark:border-gray-800 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center justify-center">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2023 . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export const SocialMedia = () => (
  <div className="flex items-center gap-4">
    <a
      href=""
      className="w-9 h-9 rounded-full bg-teal-400 flex justify-center items-center hover:bg-teal-600 focus:ring-4 ring-teal-400/60 transition-all ease-out"
    >
      <i className="fab fa-facebook-f"></i>
    </a>
    <a
      href=""
      className="w-9 h-9 rounded-full bg-teal-400 flex justify-center items-center hover:bg-teal-600 focus:ring-4 ring-teal-400/60 transition-all ease-out"
    >
      <i className="fab fa-instagram"></i>
    </a>
    <a
      href=""
      className="w-9 h-9 rounded-full bg-teal-400 flex justify-center items-center hover:bg-teal-600 focus:ring-4 ring-teal-400/60 transition-all ease-out"
    >
      <i className="fab fa-twitter"></i>
    </a>
  </div>
);
