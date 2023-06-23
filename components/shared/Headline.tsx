import { Poppins } from "next/font/google";

const poppins: any = Poppins({
  style: "normal",
  weight: "600",
  subsets: ["latin"],
});

export default function Headline(props: any): JSX.Element {
  return (
    <h3
      className={[
        "text-2xl lg:text-5xl font-black text-center leading-[1.2] text-gray-800",
        "dark:text-white",
        poppins.className,
        props.className,
      ].join(" ")}
    >
      {props.children}
    </h3>
  );
}
