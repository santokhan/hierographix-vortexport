import Image from "next/image";
import logoSrc from "../../assets/images/logo.png";
import logoSrcWhite from "../../assets/images/logo-white.png";

const Logo = (props: { dark: boolean }) => (
  <div className="">
    {props.dark ? (
      <Image src={logoSrcWhite} alt="logo" className="h-10 object-contain" />
    ) : (
      <Image src={logoSrc} alt="logo" className="h-10 object-contain" />
    )}
  </div>
);

export default Logo;
