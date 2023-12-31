import Link from "next/link";

export default function ContactOutline() {
  return (
    <div className="hidden lg:w-1/4 lg:flex justify-end items-center">
      <Link
        href="#"
        className={[
          "lg:flex items-center h-10 px-4 rounded-lg bg-vpurple-500 text-white border border-transparent",
          "hover:bg-transparent hover:border hover:border-vpurple-500 hover:text-vpurple-500 focus:ring-4 focus:ring-vpurple-500/50",
          "transition-all duration-200 ease-in-out"]
          .join(" ")
        }
      >
        Contact Us
      </Link>
    </div>
  );
}
export function ContactOutlineVisible() {
  return (
    <div className="block">
      <Link
        href="#"
        className={[
          "flex items-center h-10 px-4 rounded-lg bg-vpurple-500 text-white border border-transparent",
          "hover:bg-transparent hover:border hover:border-vpurple-500 hover:text-vpurple-500 focus:ring-4 focus:ring-vpurple-500/50",
          "transition-all duration-200 ease-in-out"]
          .join(" ")
        }
      >
        Contact Us
      </Link>
    </div>
  );
}

export function ContactFill() {
  return (
    <div className="hidden lg:w-1/4 lg:flex justify-end items-center">
      <Link
        href="#"
        className={[
          "lg:flex items-center h-10 px-4 rounded-lg bg-vpurple-500 text-white ",
          "hover:bg-vpurple-600 focus:ring-4 focus:ring-vpurple-500/50",
          "transition-all duration-200 ease-in-out"]
          .join(" ")
        }
      >
        Contact Us
      </Link>
    </div>
  );
}
