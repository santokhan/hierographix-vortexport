"use client";
import Headline from "@/components/shared/Headline";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { useState } from "react";

const reviews = [
  {
    name: "John Smith",
    position: "CEO of XYZ Company",
    comment:
      "Working with VortExpert has been an absolute game-changer for our business. Their expertise and strategic approach have significantly improved our online presence and boosted our revenue. We highly recommend their services to any business looking for exceptional results in the digital realm.",
    src: "smith",
  },
  {
    name: "John ",
    position: "CEO of XYZ Company",
    comment:
      "Working with VortExpert has been an absolute game-changer for our business. Their expertise and strategic approach have significantly improved our online presence and boosted our revenue.",
    src: "smith",
  },
  {
    name: "Smith",
    position: "CEO of XYZ Company",
    comment:
      "We highly recommend their services to any business looking for exceptional results in the digital realm.",
    src: "smith",
  },
  {
    name: "Santo",
    position: "CEO of XYZ Company",
    comment:
      "Working with VortExpert has been an absolute game-changer for our business. Their expertise and strategic approach have significantly improved our online presence and boosted our revenue. We highly recommend their services to any business looking for exceptional results in the digital realm.",
    src: "smith",
  },
];

export default function TestiMonial() {
  const [crnt, setcrnt] = useState(0);
  // if array length is 4 maxSlideIndex will be 3
  const maxSlideIndex = reviews.length - 1;
  function increment() {
    if (maxSlideIndex > crnt) {
      setcrnt(crnt + 1);
    } else {
      setcrnt(0);
    }
  }
  function decrement() {
    if (crnt > 0) {
      setcrnt(crnt - 1);
    } else {
      setcrnt(maxSlideIndex);
    }
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 space-y-10 lg:space-y-16">
      <Headline>
        <span className="text-teal-400">Testimonial</span> VortExpert's
        Excellence
      </Headline>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
        <div className="min-w-[380px] max-w-[380px] overflow-auto space-y-8">
          <svg
            width="77"
            height="59"
            viewBox="0 0 77 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M49.6993 59C47.3264 59 45.4028 57.0613 45.4028 54.6697V33.5813C45.4028 32.7379 45.6472 31.9128 46.106 31.2074L65.7666 0.978186C66.1636 0.367751 66.8391 0 67.5633 0H74.6499C76.1836 0 77.2233 1.57306 76.6323 2.99941L66.4028 27.6899L73.173 28.44C75.3511 28.6813 77 30.5359 77 32.7443V54.6697C77 57.0613 75.0764 59 72.7034 59H49.6993ZM4.29655 59C1.92363 59 0 57.0613 0 54.6697V32.2886L20.3638 0.978186C20.7608 0.367751 21.4363 0 22.1605 0H29.2471C30.7808 0 31.8205 1.57306 31.2295 2.99941L21 27.6899L31.5972 28.864V54.6697C31.5972 57.0613 29.6736 59 27.3007 59H4.29655Z"
              fill="#74CAAD"
            />
          </svg>

          <div className="flex">
            {reviews.map(
              (e, i) =>
                i === crnt && (
                  <div
                    className="min-w-[360px] h-60 max-w-[380px] space-y-5 transition-all ease-out"
                    key={i}
                  >
                    <div className="flex gap-4 items-center">
                      <Image
                        src={require("../../../app/assets/images/profile.png")}
                        alt={e.name}
                        className="w-14 h-14 object-contain"
                      />
                      <div className="space-y-1">
                        <h5 className="font-semibold">{e.name}</h5>
                        <p className="text-gray-400">{e.position}</p>
                      </div>
                    </div>
                    <p className="text-gray-400">{e.comment}</p>
                  </div>
                )
            )}
          </div>
          <div className="flex justify-between items-center">
            {/* decrement button */}
            <button
              type="button"
              className="text-vpurple-500 w-6 h-6 rounded-full hover:bg-white/10 flex justify-center items-center"
              onClick={decrement}
            >
              <i className="fa fa-angle-left"></i>
            </button>
            <div className="flex gap-3">
              {/* button loop */}
              {reviews.map((e, i) => (
                <button
                  key={i}
                  type="button"
                  className={`block w-2 h-2 rounded-full hover:ring-2 ring-vpurple-500/20 ${
                    crnt === i ? " bg-vpurple-500" : " bg-vpurple-500/50"
                  }`}
                  onClick={() => {
                    setcrnt(i);
                  }}
                ></button>
              ))}
            </div>
            {/* increment button */}
            <button
              type="button"
              className="text-vpurple-500 w-6 h-6 rounded-full hover:bg-white/10 flex justify-center items-center"
              onClick={increment}
            >
              <i className="fa fa-angle-right"></i>
            </button>
          </div>
        </div>
        <div className="">
          <Image
            src={require("../../../app/assets/images/testimonials.png")}
            alt="testimonial"
          />
        </div>
      </div>
    </div>
  );
}
