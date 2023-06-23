import Link from "next/link";

interface Props {
  to: string;
}

const GetStarted = ({ to }: Props): JSX.Element => (
  <Link
    href={to}
    className={[
      "text-white bg-primary-600 border font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all ease-in-out",
      "hover:bg-vpurple-500 hover:border-vpurple-500 focus:ring-4 focus:ring-vpurple-500/50",
    ].join(" ")}
  >
    Get started
  </Link>
);

export const GetStartedWhite = ({ to }: Props): JSX.Element => (
  <Link
    href={to}
    className={[
      "text-white bg-primary-600 border font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all ease-in-out",
      "hover:bg-white hover:text-vpurple-500 hover:border-white focus:ring-4 focus:ring-white/50",
    ].join(" ")}
  >
    Get started
  </Link>
);

export default GetStarted;
