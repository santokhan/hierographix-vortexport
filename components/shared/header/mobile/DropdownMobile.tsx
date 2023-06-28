"use client";

import Link from "next/link";
import ActiveNav from "../../ActiveNav";
import { useState } from "react";
import { NavsDD, navs } from "../NavList";
import { SocialMedia } from "../../footer/Footer";
import Icons from "../dropdown/icons/Icons";
import { ContactOutlineVisible } from "../ContactUs";
import Styles from './DropdownMobile.module.css'

export default function TogglerAndDDMobile() {
  // mobile dropdown toggler, by default it will be false
  const [dropdown, setdropdown] = useState<boolean>(false);
  function handleDropdown() {
    setdropdown(!dropdown);
  }
  return (
    <div className="relative">
      <button
        type="button"
        className={[
          "inline-flex items-center p-2 text-sm text-gray-800 dark:text-gray-100 rounded-lg lg:hidden hover:dark:text-white",
        ].join(" ")}
        onClick={handleDropdown}
      >
        {dropdown ? <Cross /> : <Bars />}
      </button>
      <DropdownMobile dropdown={dropdown} handleDropdown={handleDropdown} />
    </div>
  );
}

export function DropdownMobile(props: {
  dropdown: boolean;
  handleDropdown: () => void;
}) {
  return (
    props.dropdown && (
      <div className={["w-screen h-screen font-medium fixed right-0 top-16 bg-white dark:bg-vpurple-950/95 backdrop-blur-sm z-[2]",
        "transition-transform ease-in-out origin-top-right", Styles.animateMobileDropdown].join(" ")}>
        <div className="relative flex flex-col items-center justify-start gap-6 py-8">
          {navs.map((e: any, i: number) =>
            e.dropdown ? (
              <NavDropdownMobile
                nav={e}
                key={i}
                handleDropdown={props.handleDropdown}
              />
            ) : (
              <ToMobile
                key={i}
                name={e.name}
                url={e.url}
                handleDropdown={props.handleDropdown}
              />
            )
          )}
          <ContactOutlineVisible />
          <SocialMedia />
        </div>
      </div>
    )
  );
}
// dropdown nested for mobile sidebar
export function NavDropdownMobile(props: {
  nav: NavsDD;
  handleDropdown: () => void;
}) {
  return (
    <div className="flex flex-col items-center gap-6 group">
      <button
        type="button"
        className="flex gap-3 items-center text-gray-800 rounded hover:text-vpurple-500 dark:text-gray-300"
      >
        {props.nav.name}
        <i className="fa fa-angle-down group-hover:-rotate-180 transition-transform ease-out"></i>
      </button>
      {/* dropdown desktop */}
      <div
        className={[
          "hidden group-hover:flex flex-col items-center",
          "w-80 mt-1 z-[2] py-3 px-5",
          "bg-white /95 backdrop-blur-sm shadow-xl rounded-lg",
        ].join(" ")}
      >
        {props.nav.dropdown.map((ele: any, ind: number) => (
          <Link
            key={ind}
            href={ele.url}
            className={`rounded w-full flex items-center gap-2 h-12 text-gray-800 hover:text-vpurple-500 dark:hover:text-vpurple-500 dark:text-gray-800 border-b last:border-none ${ActiveNav(ele.url) && "text-vpurple-500 dark:text-vpurple-500"
              }`}
            onClick={props.handleDropdown}
          >
            <div className="flex items-center justify-center">
              <Icons name={ele.icon} className="h-6 w-6" />
            </div>
            {ele.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export const ToMobile = (props: { name: string; url: string; handleDropdown: () => void }) => (
  <Link
    href={props.url}
    className={[
      "transition-all ease-in-out",
      ActiveNav(props.url)
        ? "rounded block text-vpurple-500 dark:text-vpurple-500"
        : "rounded block text-gray-800 dark:text-gray-300 hover:dark:text-vpurple-500",
    ].join(" ")}
    onClick={props.handleDropdown}
  >
    {props.name}
  </Link>
);

// Static components, not functional
export const Bars = () => (
  <svg
    className="h-6 w-6"
    viewBox="0 0 21 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.667 1H5.66702"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.667 9.16699H1.00032"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.667 17.3335H10.3336"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Cross = () => (
  <svg
    className="h-6 w-6"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.5 1L0.999999 13.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.5"
    />
    <path
      d="M1 1L13.5 13.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
