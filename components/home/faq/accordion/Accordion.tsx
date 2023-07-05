"use client";
import { useState } from "react";
import Styles from "./Accordion.module.css";

export const faqs = [
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

export default function Accordions() {
  // function handleFAQ(index: number) {
  //   setstate(
  //     state.map((e: any, i: number) => {
  //       if (i !== index) {
  //         e.unavailable = false;
  //       } else {
  //         e.unavailable = !e.unavailable;
  //       }
  //       return e;
  //     })
  //   );
  // }

  return (
    <ul className="list-none">
      {faqs.map((e, i) => (
        <AccordItem data={e} key={i} />
      ))}
    </ul>
  );
}

export function AccordItem(props: any) {
  const data = props.data;

  const [expand, setexpand] = useState<boolean | null>(null);

  function handleExpand() {
    setexpand(!expand);
  }

  return (
    <li className="border-b border-gray-200 dark:border-gray-800">
      {/* Accordion toggler */}
      <button
        type="button"
        className="w-full flex gap-8 items-center justify-between py-5"
        onClick={handleExpand}
      >
        <h5 className="w-full text-base font-semibold text-gray-200 text-start">
          {data.ques}
        </h5>
        <i
          className={`w-2 fa fa-angle-down text-teal-400 transition-transform ease-out ${expand && "-rotate-180"
            }`}
        ></i>
      </button>

      {expand === true && <p className={["text-gray-400 font-normal origin-top overflow-hidden pb-5", Styles.expand].join(" ")}>
        {data.ans}
      </p>}
    </li>
  );
}
