// @ts-nocheck
"use client";
import Image from "next/image";
import { useState } from "react";
import Styles from "./SimpleSlider.module.css";

export default function SimpleSlider() {
  const slider = [
    { src: "assets/images/portfolio/featured.png" },
    { src: "assets/images/portfolio/featured.png" },
    { src: "assets/images/portfolio/featured.png" },
  ];
  const [crnt, setcrnt] = useState(0);
  // if array length is 4 maxSlideIndex will be 3
  const maxSlideIndex = slider.length - 1;
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
    <div className="block space-y-4">
      {slider.map(
        (e, i) =>
          i === crnt && (
            <Image
              src={require("../../../app/assets/images/portfolio/featured.png")}
              alt="mockup"
              className={`w-full max-h-[580px] object-cover transition-opacity duration-200 ease-linear rounded-lg overflow-hidden ${Styles.simpleSlider}`}
              key={i}
            />
          )
      )}
      <div className="flex justify-between items-center px-2">
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
          {slider.map((e, i) => (
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
  );
}
