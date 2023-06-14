"use client";
import { useEffect, useRef, useState } from "react";
import Logo from "../logo/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navs, NavsDD } from "./NavList";
import Contact from "./ContactUs";
import { SocialMedia } from "@/components/shared/footer/Footer";

export default function Header(): JSX.Element {
  return (
    <header className="h-16 relative">
      {/* Both will `"h-16"` */}
      <div className="h-16 fixed top-0 left-0 w-full border-b lg:border-none dark:border-gray-600 z-[11] bg-white/95 backdrop-blur-sm shadow dark:bg-vpurple-950/95">
        <Navbar />
      </div>
    </header>
  );
}

export function Navbar(): JSX.Element {
  // mobile dropdown toggler, by default it will be false
  const [dropdown, setdropdown] = useState<boolean>(false);
  function handleDropdown() {
    setdropdown(!dropdown);
  }
  return (
    <nav className="max-w-screen-xl mx-auto h-full flex flex-wrap items-center justify-between px-4">
      <Link href="/" className="flex items-center mt-1 w-1/4">
        <Logo dark={true} />
      </Link>
      <TogglerAndDDMobile dropdown={dropdown} handleDropdown={handleDropdown} />
      {/* Navs */}
      <div className="hidden lg:flex gap-12 items-center w-full lg:w-auto font-medium">
        {navs.map((e: any, i: number) =>
          e.dropdown ? (
            <NavDropdown nav={e} key={i} />
          ) : (
            <To key={i} name={e.name} url={e.url} />
          )
        )}
      </div>
      <Contact />
    </nav>
  );
}
// dropdown for individual nav item
export function NavDropdown({ nav }: { nav: NavsDD }): JSX.Element {
  const [dd, setdd] = useState(false);
  const dropdownRef = useRef<any>(null);
  const togglerRef = useRef<any>(null);
  function handleDD() {
    setdd(!dd);
  }
  const pathName = usePathname();

  useEffect(() => {
    function handleClick(e: Event) {
      if (dropdownRef.current && togglerRef.current) {
        if (
          !dropdownRef.current.contains(e.target) &&
          !togglerRef.current.contains(e.target)
        ) {
          if (dd === true) {
            setdd(false);
          }
        }
      }
    }
    document.addEventListener("click", handleClick);
  }, [dd]);

  return (
    <div className="relative h-full flex items-center">
      <button
        type="button"
        className="flex gap-3 items-center text-gray-800 rounded hover:text-vpurple-500 dark:text-gray-300"
        onClick={handleDD}
        ref={togglerRef}
      >
        {nav.name}
        <i className={`fa fa-angle-down ${dd && "-rotate-180"}`}></i>
      </button>
      {/* dropdown desktop */}
      {dd && (
        <div
          className="absolute top-10 left-0 w-72 mt-1 flex flex-col items-start bg-white/95 backdrop-blur-sm z-[2] rounded-lg py-3 shadow-xl"
          ref={dropdownRef}
        >
          {nav.dropdown.map((ele: any, ind: number) => (
            <a
              key={ind}
              href={ele.url}
              className={`rounded flex items-center h-10 px-5 text-gray-800 hover:text-vpurple-500 dark:hover:text-vpurple-500 dark:text-gray-800 ${
                pathName === ele.url && "text-vpurple-500 dark:text-vpurple-500"
              }`}
            >
              {ele.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

interface TypeToggler {
  dropdown: boolean;
  handleDropdown: () => void;
}
export function TogglerAndDDMobile({ dropdown, handleDropdown }: TypeToggler) {
  return (
    <div className="relative">
      <button
        type="button"
        className="inline-flex items-center p-2 text-sm text-gray-800 dark:text-gray-100 rounded-lg lg:hidden hover:text-white focusring-2 focus:ring-gray-200"
        onClick={handleDropdown}
      >
        {dropdown ? (
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
        ) : (
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
        )}
      </button>
      <DropdownMobile dropdown={dropdown} />
    </div>
  );
}
// dropdown nested for mobile sidebar
export function NavDropdownMobile({ nav }: { nav: NavsDD }): JSX.Element {
  const [dd, setdd] = useState(false);
  const pathName = usePathname();
  return (
    <div className="flex flex-col items-center gap-6">
      <button
        type="button"
        className="flex gap-3 items-center text-gray-800 rounded hover:text-vpurple-500 dark:text-gray-300"
        onClick={() => {
          setdd(!dd);
        }}
      >
        {nav.name}
        <i className={`fa fa-angle-down ${dd && "-rotate-180"}`}></i>
      </button>
      {/* dropdown desktop */}
      {dd && (
        <div className="flex flex-col items-center z-[2] rounded-lg py-2 border-y border-vpurple-500">
          {nav.dropdown.map((ele: any, ind: number) => (
            <a
              key={ind}
              href={ele.url}
              className={`rounded flex items-center h-10 px-5 text-gray-800 hover:text-vpurple-500 dark:text-gray-300 ${
                pathName === ele.url && "text-vpurple-500 dark:text-vpurple-500"
              }`}
            >
              {ele.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
export function DropdownMobile({ dropdown }: { dropdown: boolean }) {
  return (
    dropdown && (
      <div className="w-screen h-screen font-medium fixed right-0 top-16 bg-white/95 dark:bg-vpurple-950/95 backdrop-blur-sm z-[2]">
        <div className="relative flex flex-col items-center justify-start gap-6 py-8">
          {navs.map((e: any, i: number) =>
            e.dropdown ? (
              <NavDropdownMobile nav={e} key={i} />
            ) : (
              <To key={i} name={e.name} url={e.url} />
            )
          )}
          <SocialMedia />
        </div>
      </div>
    )
  );
}
export function To(props: { name: string; url: string }) {
  const pathName = usePathname();
  return (
    <a
      href={props.url}
      className={
        pathName === props.url
          ? "rounded block text-vpurple-500 dark:text-vpurple-500 underline underline-offset-4 decoration-2"
          : "rounded block text-gray-800 dark:text-gray-300 hover:text-vpurple-500"
      }
    >
      {props.name}
    </a>
  );
}
