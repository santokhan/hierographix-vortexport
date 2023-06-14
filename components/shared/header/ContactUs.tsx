import Link from "next/link";

export default function Contact() {
  return (
    <div className="hidden w-1/4 lg:flex justify-end items-center">
      <Link
        href="#"
        className="lg:flex items-center border border-vpurple-500/50 h-10 px-4 rounded-lg text-vpurple-500 hover:text-white hover:border-vpurple-500 hover:bg-vpurple-500 transition-colors ease-in focus:ring-4 focus:ring-vpurple-500/50 dark:text-white dark:border-white/50 dark:hover:border-vpurple-500"
      >
        Contact Us
      </Link>
    </div>
  );
}
