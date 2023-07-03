"use client";

import Logo from "../logo/Logo";
import Link from "next/link";
import { navs, NavsDD } from "./NavList";
import Contact from "./ContactUs";
import Icons from "./dropdown/icons/Icons";
import activeNav from "../ActiveNav";
import TogglerAndDDMobile from "./mobile/DropdownMobile";
import Styles from './Header.module.css'

export default function Header() {
  return (
    <header className="h-16 relative">
      {/* Relative and absolute both will `"h-16"` */}
      <div className="h-16 fixed top-0 left-0 w-full z-[11] bg-white backdrop-blur-sm shadow dark:bg-vpurple-950/95">
        <Navbar />
      </div>
    </header >
  );
}

export function Navbar() {
  return (
    <nav className="max-w-screen-xl mx-auto h-full flex flex-wrap items-center justify-between px-4">
      {/* Mobile setup start */}
      <Link href="/" className="flex items-center mt-1 lg:w-1/4">
        <Logo dark={true} />
      </Link>
      <TogglerAndDDMobile />
      {/* Mobile setup end */}

      {/* Navs */}
      <div className="hidden lg:flex gap-12 items-center w-full lg:w-auto h-full font-medium">
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
export function NavDropdown({ nav }: { nav: NavsDD }) {
  // const [dd, setdd] = useState(false);
  // const dropdownRef = useRef<any>(null);
  // const togglerRef = useRef<any>(null);
  // useEffect(() => {
  //   function handleClick(e: Event) {
  //     if (dropdownRef.current && togglerRef.current) {
  //       if (
  //         !dropdownRef.current.contains(e.target) &&
  //         !togglerRef.current.contains(e.target)
  //       ) {
  //         if (dd === true) {
  //           setdd(false);
  //         }
  //       }
  //     }
  //   }
  //   document.addEventListener("click", handleClick);
  // }, [dd]);

  return (
    <div className={["relative h-full flex items-center group", Styles.dropdownToggler].join(" ")}>
      <button
        type="button"
        className="flex gap-3 items-center text-gray-800 rounded group-hover:text-vpurple-500 dark:text-gray-300"
      >
        {nav.name}
        <i className="fa fa-angle-down group-hover:-rotate-180 transition-transform ease-out"></i>
      </button>

      {/* dropdown desktop */}
      <div
        className={[
          "transition-all ease-in-out origin-top-left",
          "absolute top-14 left-0 w-80 mt-1 bg-white z-[2] rounded-lg py-3 px-5 shadow-xl",
          "flex flex-col items-start",
          Styles.dropDownBox
        ].join(" ")}
      >
        {nav.dropdown.map((ele: any, ind: number) => (
          <Link
            key={ind}
            href={ele.url}
            className={[
              "transition-all ease-in-out",
              "rounded w-full flex items-center gap-2 h-12 text-gray-800 border-b last:border-none",
              "hover:text-vpurple-500 dark:hover:text-vpurple-500 dark:text-gray-800",
              activeNav(ele.url)
                ? "text-vpurple-500 dark:text-vpurple-500"
                : "",
            ].join(" ")}
          >
            <div className="flex items-center justify-center">
              <Icons name={ele.icon} className="h-5 w-5" />
            </div>
            {ele.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function To(props: { name: string; url: string }) {
  return (
    <Link
      href={props.url}
      className={[
        "transition-all ease-in-out",
        activeNav(props.url)
          ? "rounded block text-vpurple-500 dark:text-vpurple-500"
          : "rounded block text-gray-800 dark:text-gray-300 hover:dark:text-vpurple-500",
      ].join(" ")}
    >
      {props.name}
    </Link>
  );
}
