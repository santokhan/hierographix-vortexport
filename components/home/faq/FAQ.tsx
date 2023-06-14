"use client";
import Image from "next/image";
import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      ques: "How long does it take to complete a project?",
      ans: "The project timeline depends on the scope and complexity of the project. We work closely with clients to set realistic timelines and deliver projects within the agreed-upon timeframes.",
      unavailable: true,
    },
    {
      ques: "How much does your services cost?",
      ans: "The project timeline depends on the scope and complexity of the project. We work closely with clients to set realistic timelines and deliver projects within the agreed-upon timeframes.",
      unavailable: false,
    },
    {
      ques: "Can you handle projects for businesses of any size?",
      ans: "The project timeline depends on the scope and complexity of the project. We work closely with clients to set realistic timelines and deliver projects within the agreed-upon timeframes.",
      unavailable: false,
    },
    {
      ques: "Do you provide ongoing support after project completion?",
      ans: "The project timeline depends on the scope and complexity of the project. We work closely with clients to set realistic timelines and deliver projects within the agreed-upon timeframes.",
      unavailable: false,
    },
    {
      ques: "Will I have a dedicated point of contact throughout the project?",
      ans: "The project timeline depends on the scope and complexity of the project. We work closely with clients to set realistic timelines and deliver projects within the agreed-upon timeframes.",
      unavailable: false,
    },
    {
      ques: "Can you help with website optimization and search engine ranking?",
      ans: "The project timeline depends on the scope and complexity of the project. We work closely with clients to set realistic timelines and deliver projects within the agreed-upon timeframes.",
      unavailable: false,
    },
    {
      ques: "What sets VortExpert apart from other digital agencies?",
      ans: "The project timeline depends on the scope and complexity of the project. We work closely with clients to set realistic timelines and deliver projects within the agreed-upon timeframes.",
      unavailable: false,
    },
  ];
  const [state, setstate] = useState(faqs);

  function handleFAQ(index: number) {
    setstate(
      state.map((e: any, i: number) => {
        if (i !== index) {
          e.unavailable = false;
        } else {
          e.unavailable = !e.unavailable;
        }
        return e;
      })
    );
  }

  return (
    <section>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-start max-w-screen-xl px-4 py-12 mx-auto lg:py-20">
        <div className="w-full">
          <Image
            src={require("../../../app/assets/images/faqs.png")}
            alt="mockup"
            className="w-full max-h-[600px] object-contain p-8"
          />
        </div>
        <div className="w-full max-w-lg space-y-8">
          <h3 className="text-2xl lg:text-4xl font-bold leading-[1.2]">
            <span className="text-teal-400">Frequently</span> Asked Questions
          </h3>
          <ul className="list-none">
            {state.map((e, i) => (
              <li
                key={i}
                className="border-b border-gray-200 dark:border-gray-600 py-6"
              >
                <div className="">
                  <button
                    type="button"
                    className="w-full flex gap-8 Acorditems-center justify-between"
                    onClick={() => {
                      handleFAQ(i);
                    }}
                  >
                    <h5 className="w-full text-lg font-semibold text-gray-100 text-start">
                      {e.ques}
                    </h5>
                    <i
                      className={`w-2 fa fa-angle-down text-teal-400 transition-transform ease-out duration-200 text-md ${
                        e.unavailable && "-rotate-180"
                      }`}
                    ></i>
                  </button>
                  <p
                    className={`text-gray-400 font-normal overflow-y-hidden ${
                      e.unavailable ? "h-auto py-3" : "h-0"
                    }`}
                  >
                    {e.ans}
                  </p>
                </div>
                <hr className="border-white/20 last:border-none" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function AcordItem({ data }: any) {
  const [crnt, setcrnt] = useState(false);

  return (
    <>
      <li>
        <button
          type="button"
          className="w-full flex gap-8 Acorditems-center justify-between"
          onClick={() => {
            setcrnt(!crnt);
          }}
        >
          <h5 className="w-full text-lg font-semibold text-white text-start">
            {data.ques}
          </h5>
          <i
            className={`w-2 fa fa-angle-down text-teal-400 transition-transform ease-out duration-200 text-md ${
              crnt && "-rotate-180"
            }`}
          ></i>
        </button>
        <p
          className={`text-gray-400 font-normal overflow-y-hidden ${
            crnt ? "h-auto py-3" : "h-0"
          }`}
        >
          {data.ans}
        </p>
      </li>
      <hr className="border-white/20 last:border-none" />
    </>
  );
}
