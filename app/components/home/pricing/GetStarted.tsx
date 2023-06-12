import Link from "next/link";

interface Props {
  to: string;
}

const GetStarted = ({ to }: Props): JSX.Element => (
  <Link
    href={to}
    className="text-white bg-primary-600 border hover:bg-vpurple-500 focus:ring-4 focus:ring-vpurple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:border-vpurple-500"
  >
    Get started
  </Link>
);

export default GetStarted;
