import { useEffect, useRef, useState } from "react";
import { reviews } from "../Testimonial";
import Image from "next/image";

export function SliderSanto() {
  const [crnt, setcrnt] = useState(0);
  // if array length is 4 maxSlideIndex will be 3
  const maxSlideIndex = reviews.length - 1;
  const [translate, settranslate] = useState(0);
  const snap = useRef<any>(null);
  const snapWidth = 380;

  // max translate 380 * 4 = 1520

  function decrement() {
    if (0 < crnt) {
      setcrnt(crnt - 1);
      settranslate(translate - snapWidth);
    } else {
      // setcrnt(maxSlideIndex);
      // settranslate(maxSlideIndex * 380);
    }
  }

  function increment() {
    if (crnt < maxSlideIndex) {
      setcrnt(crnt + 1);
      settranslate(translate + snapWidth);
    } else {
      // setcrnt(0);
      // settranslate(0);
    }
  }

  const [grabbing, setgrabbing] = useState(false);
  useEffect(() => {
    let startPos: number;

    function handleGrabbing(ev: any) {
      if (ev.clientX < startPos) {
        if (startPos - ev.clientX > 50) {
          setcrnt(1);
          snap.current.removeEventListener("mousemove", handleGrabbing);
        } else {
        }
        snap.current.style.transform = `translateX(-${
          (startPos - ev.clientX) * 2
        }px)`;
      } else {
        snap.current.style.transform = `translateX(${
          (ev.clientX - startPos) * 2
        }px)`;
      }
    }

    function grabStart(e: any) {
      setgrabbing(true);
      startPos = e.clientX;

      snap.current.classList.replace("cursor-grab", "cursor-grabbing");

      snap.current.addEventListener("mousemove", handleGrabbing);
    }

    function grabStop() {
      setgrabbing(false);

      snap.current.classList.replace("cursor-grabbing", "cursor-grab");

      snap.current.removeEventListener("mousemove", handleGrabbing);
    }

    snap.current.addEventListener("mousedown", grabStart);
    snap.current.addEventListener("mouseup", grabStop);
  }, [grabbing]);

  return (
    <div className="max-w-[380px] h-[340px] overflow-hidden flex flex-col justify-between">
      <div
        className="w-full flex transition-all duration-[400ms] ease-in-out cursor-grab"
        style={{ transform: `translateX(-${translate}px)` }}
        ref={snap}
      >
        {reviews.map((e, i) => (
          <div
            key={i}
            className={`min-w-[380px] h-full space-y-5 transition-all duration-[400ms] ease-in-out text-start 
                ${crnt === i ? "scale-1" : "scale-75"} `}
          >
            <div className="flex gap-4 items-center">
              <Image
                src={require("../../../../app/assets/images/profile.png")}
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
        ))}
      </div>
      <div className="flex justify-between items-center ">
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
  );
}
