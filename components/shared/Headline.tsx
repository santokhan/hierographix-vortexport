import { Poppins } from "next/font/google";

const poppins = Poppins({ style: "normal", weight: "600", subsets: ["latin"] });

const Headline = ({ children, className }: any) => (
  <h3
    className={[
      "text-2xl lg:text-5xl font-black text-center leading-[1.2] text-gray-800",
      "dark:text-white",
      poppins.className,
      className,
    ].join(" ")}
  >
    {children}
  </h3>
);

export default Headline;
