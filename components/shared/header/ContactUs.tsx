import Link from "next/link";

export default function Contact() {
  return (
    <div className="hidden w-1/4 lg:flex justify-end items-center">
      <Link
        href="#"
        className="lg:flex items-center h-10 px-4 rounded-lg bg-vpurple-500 text-white hover:bg-vpurple-600 focus:ring-4 focus:ring-vpurple-500/50 transition-all duration-200 ease-in-out"
      >
        Contact Us
      </Link>
    </div>
  );
}
