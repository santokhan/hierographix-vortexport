import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export interface PropsText {
  children: any;
  className: string;
}

export default function Text(props: PropsText): JSX.Element {
  return (
    <p className={`${props.className} ${manrope.className} lg:text-lg`}>
      {props.children}
    </p>
  );
}
