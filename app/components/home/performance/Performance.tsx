/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import PerformanceImage from "../../assets/images/performance/performance-rating.png";

function Performance() {
  const ratings = [
    {
      desc: "Our track record is speaks for itself. We have consistently delivered exceptional result for a diverse range of client across industries.",
      icon: "light",
      title: "Proven success",
    },
    {
      desc: "Our client Rep about our services. Their testimonials highlight our ability to surpass acceptations and drive tangible business growth.",
      icon: "client",
      title: "Client satisfaction",
    },
    {
      desc: "We believe in data-driven strategies. Our performance metrics demonstrate the concrete result we achieve, from increased website traffic to higher conversion rates.",
      icon: "database",
      title: "Measurable impact",
    },
    {
      desc: "Our dedication does not end with project completion. We provide our ongoing support and maintenance to ensure sustained success.",
      icon: "support",
      title: "Ongoing support",
    },
  ];

  return (
    <section className="bg-white">
      <div className="lg:flex lg:gap-20 max-w-screen-xl px-4 py-12 mx-auto lg:py-20">
        <div className="w-full">
          <Image
            src={PerformanceImage}
            alt="mockup"
            className="w-full max-h-[600px] object-contain p-4"
          />
        </div>
        <div className="w-full max-w-lg space-y-4">
          <h3 className="text-2xl lg:text-4xl font-bold leading-[1.2]">
            <span className="text-gray-900">Performance</span>{" "}
            <span className="text-teal-400">Rating</span>
          </h3>
          <div className="flex justify-between">
            <p className="font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
              Excellence in Action
            </p>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
          <ul className="list-none space-y-6">
            {ratings.map((e, i) => (
              <li key={i} className="space-y-2">
                <div className="flex gap-3 items-center">
                  <div className="bg-teal-500/50 rounded-full w-12 h-12 flex justify-center items-center">
                    <Icon name={e.icon} />
                  </div>
                  <h5 className="text-xl font-semibold text-gray-900">
                    {e.title}
                  </h5>
                </div>
                <p className="text-gray-700 font-normal">{e.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Icon({ name }: { name: string }) {
  if (name === "light") {
    return (
      <svg
        width="20"
        height="20"
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
        width="20"
        height="20"
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
        width="15"
        height="16"
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
        width="19"
        height="19"
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

export default Performance;
