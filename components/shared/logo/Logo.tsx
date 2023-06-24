import Image from "next/image";
import logoSrc from "../../../app/assets/images/logo.png";
import logoSrcWhite from "../../../app/assets/images/logo-white.png";

interface Props {
  dark?: boolean;
}

const Logo = (props: Props) => (
  <div className="">
    <Image
      src={logoSrcWhite}
      alt="logo"
      className="h-6 lg:h-8 w-full object-contain hidden dark:block"
    />
    <Image
      src={logoSrc}
      alt="logo"
      className="h-6 lg:h-8 w-full object-contain dark:hidden"
    />
  </div>
);
export default Logo;
