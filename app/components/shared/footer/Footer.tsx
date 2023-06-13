import Image from "next/image";
import Logo from "../logo/Logo";

export default function Footer() {
  const linkList = [
    {
      title: "Services",
      links: [
        {
          name: "Marketing",
          url: "",
        },
        {
          name: "Design",
          url: "",
        },
        {
          name: "Frontend Development",
          url: "",
        },
        {
          name: "Backend Development",
          url: "",
        },
        {
          name: "Dev Ops",
          url: "",
        },
        {
          name: "Vortexpert's AI & Data Research",
          url: "",
        },
      ],
    },
    {
      title: "Useful link",
      links: [
        {
          name: "Expertise",
          url: "",
        },
        {
          name: "Our Portfolio",
          url: "",
        },
        {
          name: "Blog",
          url: "",
        },
      ],
    },
    {
      title: "Legal",
      links: [
        {
          name: "Terms of use",
          url: "",
        },
        {
          name: "Privacy Policy",
          url: "",
        },
        {
          name: "Status",
          url: "",
        },
      ],
    },
  ];

  return (
    <footer className="">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="lg:flex lg:justify-between gap-12">
          <div className="lg:w-5/12 mb-6 md:mb-0 space-y-5">
            <a href="https://flowbite.com/" className="flex items-center">
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
                <h2 className="mb-4 font-semibold text-gray-500 uppercase">
                  {e.title}
                </h2>
                <ul className="text-gray-200 font-medium">
                  {e.links.map((ele, ind) => (
                    <li className="mb-4" key={ind}>
                      <a
                        href={ele.url}
                        className="hover:text-vpurple-500 flex items-center gap-2 group transition-all ease-out duration-200 relative"
                      >
                        <div className="h-[2px] group-hover:w-2 bg-vpurple-500 transition-all ease-out duration-200 absolute right-[102%]"></div>{" "}
                        {ele.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="my-6 border-gray-800 sm:mx-auto lg:my-8" />
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
      className="w-9 h-9 rounded-full bg-teal-400 flex justify-center items-center hover:bg-teal-500"
    >
      <i className="fab fa-facebook-f"></i>
    </a>
    <a
      href=""
      className="w-9 h-9 rounded-full bg-teal-400 flex justify-center items-center hover:bg-teal-500"
    >
      <i className="fab fa-instagram"></i>
    </a>
    <a
      href=""
      className="w-9 h-9 rounded-full bg-teal-400 flex justify-center items-center hover:bg-teal-500"
    >
      <i className="fab fa-twitter"></i>
    </a>
  </div>
);
