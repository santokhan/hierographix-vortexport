/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import feature from "../../assets/images/portfolio/featured.png";
import Link from "next/link";
import Headline from "@/components/shared/Headline";
import SimpleSlider from "./SimpleSlider";

export default function Featured() {
  const ratings = [
    { name: "Design" },
    { name: "Frontend Development" },
    { name: "Backend Development" },
  ];

  return (
    <section className="bg-white py-12 lg:py-20 relative">
      <Hill />
      <div className="space-y-8 relative">
        <Headline>
          <span className="text-gray-800">Featured Project</span>
        </Headline>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-screen-xl px-4 mx-auto">
          <SimpleSlider />
          <div className="w-full max-w-lg space-y-4">
            <p className="text-gray-800 md:text-lg lg:text-xl font-medium">
              Website Development for Unique Inc
            </p>
            <div className="flex gap-2 flex-wrap">
              {ratings.map((e, i) => (
                <button
                  className="text-teal-500 bg-teal-100 h-8 px-3 rounded"
                  key={i}
                >
                  {e.name}
                </button>
              ))}
            </div>
            <p className="text-gray-500">
              In this project, we worked closely with the Unique Inc. team. to
              create a website that describes the uniqueness and superiority of
              their company. Through an in-depth consulting process, market
              research, and a deep understanding of the company&apos;s vision
              and goals, we have succeeded in designing and developing an
              attractive, responsive, and functional website. This website
              features a modern layout, intuitive navigation, and an
              aesthetically pleasing design, reflecting the Unique Inc. brand.
              perfectly. With engaging content and clear information, this
              website provides an engaging user experience, encourages company
              engagement and enhances Unique Inc&apos;s online presence.
            </p>

            <Link
              className="relative inline-flex items-center my-1 py-1 text-sm font-medium text-center text-vpurple-500 hover:text-vpurple-500 group focus:ring-4 focus:outline-none focus:ring-blue-300"
              href=""
            >
              <span>See more</span>
              <div className="absolute bottom-0 left-0 bg-vpurple-500 h-[2px] w-0 group-hover:w-full transition-all ease-in-out"></div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const Hill = () => (
  <svg
    className="w-1/2 lg:w-1/4 absolute bottom-0 right-0"
    viewBox="0 0 595 254"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M268 254H21.1862L17.914 247.355C-28.3358 153.437 19.393 53.6267 110.356 13.201L140.06 0L268 254Z"
      fill="url(#paint0_linear_1629_7)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M595 254H348.186L344.914 247.355C298.664 153.437 346.393 53.6267 437.356 13.201L467.06 0L595 254Z"
      fill="url(#paint1_linear_1629_7)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1629_7"
        x1="31.5318"
        y1="25.9479"
        x2="152.13"
        y2="304.133"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#886DF5" />
        <stop offset="1" stopColor="#9C85FB" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_1629_7"
        x1="358.532"
        y1="25.9479"
        x2="479.13"
        y2="304.133"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#886DF5" />
        <stop offset="1" stopColor="#9C85FB" />
      </linearGradient>
    </defs>
  </svg>
);

function Icon({ name }: { name: string }) {
  if (name === "light") {
    return (
      <svg
        className="w-5"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.1663 12.7044V18.4307C14.1663 18.6608 13.9798 18.8474 13.7497 18.8474C13.6742 18.8474 13.6001 18.8268 13.5353 18.788L9.99967 16.6666L6.46405 18.788C6.26672 18.9063 6.01078 18.8423 5.89238 18.6451C5.85353 18.5803 5.83301 18.5062 5.83301 18.4307V12.7044C4.3089 11.4827 3.33301 9.60525 3.33301 7.49992C3.33301 3.81802 6.31777 0.833252 9.99967 0.833252C13.6816 0.833252 16.6663 3.81802 16.6663 7.49992C16.6663 9.60525 15.6904 11.4827 14.1663 12.7044ZM7.49967 13.682V16.2229L9.99967 14.7229L12.4997 16.2229V13.682C11.7277 13.9945 10.8838 14.1666 9.99967 14.1666C9.11559 14.1666 8.2717 13.9945 7.49967 13.682ZM9.99967 12.4999C12.7611 12.4999 14.9997 10.2613 14.9997 7.49992C14.9997 4.73849 12.7611 2.49992 9.99967 2.49992C7.23825 2.49992 4.99967 4.73849 4.99967 7.49992C4.99967 10.2613 7.23825 12.4999 9.99967 12.4999Z"
          fill="currentColor"
        />
      </svg>
    );
  } else if (name === "client") {
    return (
      <svg
        className="w-5"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.0012 14.1667V18.3334H13.3345V14.1667C13.3345 10.4573 15.5378 7.26256 18.7071 5.81968L19.3969 7.33733C16.8038 8.51783 15.0012 11.1318 15.0012 14.1667ZM6.66786 14.1667V18.3334H5.00119V14.1667C5.00119 11.1318 3.1985 8.51783 0.605469 7.33733L1.29531 5.81968C4.46458 7.26256 6.66786 10.4573 6.66786 14.1667ZM10.0012 10.0001C7.7 10.0001 5.83453 8.1346 5.83453 5.83341C5.83453 3.53223 7.7 1.66675 10.0012 1.66675C12.3023 1.66675 14.1678 3.53223 14.1678 5.83341C14.1678 8.1346 12.3023 10.0001 10.0012 10.0001ZM10.0012 8.33341C11.3819 8.33341 12.5012 7.21412 12.5012 5.83341C12.5012 4.45271 11.3819 3.33341 10.0012 3.33341C8.6205 3.33341 7.50118 4.45271 7.50118 5.83341C7.50118 7.21412 8.6205 8.33341 10.0012 8.33341Z"
          fill="currentColor"
        />
      </svg>
    );
  } else if (name === "database") {
    return (
      <svg
        className="h-4"
        viewBox="0 0 15 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.66667 7.91667C1.66667 8.17783 2.05084 8.632 2.94206 9.07758C4.09504 9.6541 5.73064 10 7.5 10C9.26933 10 10.9049 9.6541 12.0579 9.07758C12.9492 8.632 13.3333 8.17783 13.3333 7.91667V6.10725C11.9583 6.95683 9.8561 7.5 7.5 7.5C5.14394 7.5 3.04163 6.95683 1.66667 6.10725V7.91667ZM13.3333 10.2739C11.9583 11.1235 9.8561 11.6667 7.5 11.6667C5.14394 11.6667 3.04163 11.1235 1.66667 10.2739V12.0833C1.66667 12.3445 2.05084 12.7987 2.94206 13.2443C4.09504 13.8208 5.73064 14.1667 7.5 14.1667C9.26933 14.1667 10.9049 13.8208 12.0579 13.2443C12.9492 12.7987 13.3333 12.3445 13.3333 12.0833V10.2739ZM0 12.0833V3.75C0 1.67893 3.35787 0 7.5 0C11.6422 0 15 1.67893 15 3.75V12.0833C15 14.1544 11.6422 15.8333 7.5 15.8333C3.35787 15.8333 0 14.1544 0 12.0833ZM7.5 5.83333C9.26933 5.83333 10.9049 5.48743 12.0579 4.91094C12.9492 4.46533 13.3333 4.01118 13.3333 3.75C13.3333 3.48882 12.9492 3.03467 12.0579 2.58906C10.9049 2.01257 9.26933 1.66667 7.5 1.66667C5.73064 1.66667 4.09504 2.01257 2.94206 2.58906C2.05084 3.03467 1.66667 3.48882 1.66667 3.75C1.66667 4.01118 2.05084 4.46533 2.94206 4.91094C4.09504 5.48743 5.73064 5.83333 7.5 5.83333Z"
          fill="currentColor"
        />
      </svg>
    );
  } else if (name === "support") {
    return (
      <svg
        className="w-5"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.7818 5.83334H16.6667C17.5872 5.83334 18.3333 6.57953 18.3333 7.5V10.8333C18.3333 11.7538 17.5872 12.5 16.6667 12.5H15.7818C15.3717 15.7885 12.5663 18.3333 9.16666 18.3333V16.6666C11.9281 16.6666 14.1667 14.428 14.1667 11.6666V6.66667C14.1667 3.90524 11.9281 1.66667 9.16666 1.66667C6.40524 1.66667 4.16666 3.90524 4.16666 6.66667V12.5H1.66666C0.746192 12.5 0 11.7538 0 10.8333V7.5C0 6.57953 0.746192 5.83334 1.66666 5.83334H2.55157C2.96166 2.54474 5.76698 0 9.16666 0C12.5663 0 15.3717 2.54474 15.7818 5.83334ZM1.66666 7.5V10.8333H2.5V7.5H1.66666ZM15.8333 7.5V10.8333H16.6667V7.5H15.8333ZM5.63286 12.3207L6.51631 10.9072C7.28467 11.3885 8.19316 11.6666 9.16666 11.6666C10.1402 11.6666 11.0487 11.3885 11.817 10.9072L12.7005 12.3207C11.676 12.9624 10.4647 13.3333 9.16666 13.3333C7.86866 13.3333 6.65735 12.9624 5.63286 12.3207Z"
          fill="currentColor"
        />
      </svg>
    );
  }
}
