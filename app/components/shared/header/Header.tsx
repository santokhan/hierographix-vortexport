"use client";
import { useEffect, useRef, useState } from "react";
import Logo from "../logo/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SocialMedia } from "../footer/Footer";

interface Navs {
  name: string;
  url?: string;
}
interface Dropodown {
  icon: string;
  name: string;
  url: string;
}
interface NavsDD {
  name: string;
  url: string;
  dropdown: Dropodown[];
}

const navs = [
  { name: "Home", url: "/" },
  {
    name: "Expertise",
    dropdown: [
      { icon: "speaker", name: "Marketing", url: "marketing" },
      { icon: "design", name: "Design", url: "design" },
      {
        icon: "code",
        name: "Frontend Development",
        url: "frontend-development",
      },
      {
        icon: "curly-braces",
        name: "Backend Development",
        url: "backend-development",
      },
      { icon: "command-line", name: "Dev Ops", url: "dev-ops" },
      {
        icon: "brain",
        name: "Vortexpert's AI & Data Research",
        url: "data-research",
      },
    ],
  },
  { name: "Our Portfolio", url: "our-portfolio" },
  { name: "Blog", url: "blog" },
];

const Header = (): JSX.Element => (
  <header className="h-16 relative">
    {/* Both will `"h-16"` */}
    <div className="h-16 fixed top-0 left-0 w-full border-b lg:border-none border-gray-600 z-[1] bg-vpurple-950">
      <Navbar />
    </div>
  </header>
);

export function Navbar(): JSX.Element {
  // mobile dropdown toggler, by default it will be false
  const [dropdown, setdropdown] = useState<boolean>(false);
  function handleDropdown() {
    setdropdown(!dropdown);
  }
  const pathName = usePathname();

  return (
    <nav className="max-w-screen-xl mx-auto h-full flex flex-wrap items-center justify-between px-4">
      {/* Logo */}
      <Link href="/" className="flex items-center mt-1">
        <Logo dark={true} />
      </Link>
      <TogglerAndDDMobile dropdown={dropdown} handleDropdown={handleDropdown} />
      {/* Navs */}
      <div className="hidden lg:flex gap-8 items-center w-full lg:w-auto font-medium">
        {navs.map((e: any, i: number) =>
          e.dropdown ? (
            <NavDropdown nav={e} key={i} />
          ) : (
            <a
              key={i}
              href={e.url}
              className={`rounded block px-5 text-gray-400 hover:text-vpurple-500 ${
                pathName === e.url &&
                "text-vpurple-500 underline underline-offset-4 decoration-2"
              }`}
            >
              {e.name}
            </a>
          )
        )}
      </div>
      {/* Contact Us */}
      <Link
        href="#"
        className="hidden lg:flex items-center border border-white/50 h-10 px-4 rounded-lg hover:text-white hover:border-vpurple-500 hover:bg-vpurple-500 transition-colors ease-in focus:ring-4 focus:ring-vpurple-500/50"
      >
        Contact Us
      </Link>
    </nav>
  );
}

// dropdown for individual nav item
export function NavDropdown({ nav }: { nav: NavsDD }): JSX.Element {
  const [dd, setdd] = useState(false);
  const dropdownRef = useRef<any>(null);
  const toggler = useRef<any>(null);
  function handleDD() {
    setdd(!dd);
  }

  useEffect(() => {
    function handleClick(e: Event) {
      if (dropdownRef && dropdownRef.current) {
        if (
          !dropdownRef.current.contains(e.target) &&
          !toggler.current.contains(e.target)
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
        className="flex gap-3 items-center text-gray-400 rounded hover:text-vpurple-500"
        onClick={handleDD}
        ref={toggler}
      >
        {nav.name}
        <i className={`fa fa-angle-down ${dd && "-rotate-180"}`}></i>
      </button>
      {/* dropdown desktop */}
      {dd && (
        <div
          className="absolute top-10 left-0 w-72 mt-1 flex flex-col bg-white z-[2] rounded-lg py-2 shadow-xl"
          ref={dropdownRef}
        >
          {nav.dropdown.map((ele: any, ind: number) => (
            <a
              key={ind}
              href={ele.url}
              className="rounded px-5 h-12 flex items-center text-gray-800 hover:text-vpurple-500"
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
        className="inline-flex items-center p-2 text-sm text-gray-100 rounded-lg lg:hidden hover:text-white focusring-2 focus:ring-gray-200"
        onClick={handleDropdown}
      >
        {/* <svg
         width="18"
         height="16"
         viewBox="0 0 18 16"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
       >
         <path
           d="M0 0H18V2H0V0ZM0 7H18V9H0V7ZM0 14H18V16H0V14Z"
           fill="currentColor"
         />
       </svg> */}
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
export function NavDropdownMobile({ nav }: { nav: NavsDD }): JSX.Element {
  const [dd, setdd] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        type="button"
        className="flex gap-3 items-center text-gray-400 rounded hover:text-vpurple-500"
        onClick={() => {
          setdd(!dd);
        }}
      >
        {nav.name}
        <i className={`fa fa-angle-down ${dd && "-rotate-180"}`}></i>
      </button>
      {/* dropdown desktop */}
      {dd && (
        <div className="flex flex-col bg-white z-[2] rounded-lg py-2">
          {nav.dropdown.map((ele: any, ind: number) => (
            <a
              key={ind}
              href={ele.url}
              className="rounded px-5 h-12 flex items-center text-gray-800 hover:text-vpurple-500"
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
      <div className="w-screen h-screen font-medium fixed right-0 top-16 bg-vpurple-950 z-[2]">
        <div className="relative flex flex-col items-center justify-start gap-6 py-8">
          {navs.map((e: any, i: number) =>
            e.dropdown ? (
              <NavDropdownMobile nav={e} key={i} />
            ) : (
              <a
                key={i}
                href={e.url}
                className="rounded block px-5 text-gray-400 hover:text-vpurple-500"
              >
                {e.name}
              </a>
            )
          )}
          <SocialMedia />
        </div>
      </div>
    )
  );
}

export default Header;
