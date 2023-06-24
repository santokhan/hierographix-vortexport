import Headline from "@/components/shared/Headline";
import Styles from "./Partner.module.css";
import LogoIpsum1 from "./brands/LogoIpsum1";
import LogoIpsum2 from "./brands/LogoIpsum2";
import LogoIpsum3 from "./brands/LogoIpsum3";
import LogoIpsum4 from "./brands/LogoIpsum4";
import LogoIpsum21 from "./brands/LogoIpsum21";
import LogoIpsum22 from "./brands/LogoIpsum22";

function Partner() {
  const brandStyles = "h-8 min-w-[160px] text-white";

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-16 space-y-6 lg:space-y-12">
      <Headline>
        Trusted <span className="text-teal-500">Parternships</span>
      </Headline>
      <div
        className={`${Styles.brands} relative space-y-6 lg:space-y-12 overflow-hidden`}
      >
        <div
          className={`${Styles.partnerMoveLeft} flex justify-center items-center gap-x-8`}
        >
          {/* partner */}
          <LogoIpsum1 className={brandStyles} />
          <LogoIpsum2 className={brandStyles} />
          <LogoIpsum3 className={brandStyles} />
          <LogoIpsum4 className={brandStyles} />
          <LogoIpsum3 className={brandStyles} />
          <LogoIpsum1 className={brandStyles} />
          <LogoIpsum2 className={brandStyles} />
          <LogoIpsum3 className={brandStyles} />
          <LogoIpsum4 className={brandStyles} />
          <LogoIpsum3 className={brandStyles} />
          <LogoIpsum1 className={brandStyles} />
          <LogoIpsum2 className={brandStyles} />
          <LogoIpsum1 className={brandStyles} />
          <LogoIpsum2 className={brandStyles} />
          <LogoIpsum3 className={brandStyles} />
          <LogoIpsum4 className={brandStyles} />
          <LogoIpsum3 className={brandStyles} />
          <LogoIpsum1 className={brandStyles} />
          <LogoIpsum2 className={brandStyles} />
          <LogoIpsum3 className={brandStyles} />
          <LogoIpsum4 className={brandStyles} />
          <LogoIpsum3 className={brandStyles} />
          <LogoIpsum1 className={brandStyles} />
          <LogoIpsum2 className={brandStyles} />
        </div>
        <div
          className={`flex justify-center items-center gap-x-8 ${Styles.partnerMoveRight}`}
        >
          {/* partner */}
          <LogoIpsum21 className={brandStyles} />
          <LogoIpsum2 className={brandStyles} />
          <LogoIpsum22 className={brandStyles} />
          <LogoIpsum3 className={brandStyles} />
          <LogoIpsum3 className={brandStyles} />
          <LogoIpsum21 className={brandStyles} />
          <LogoIpsum1 className={brandStyles} />
          <LogoIpsum3 className={brandStyles} />
          <LogoIpsum3 className={brandStyles} />
          <LogoIpsum22 className={brandStyles} />
          <LogoIpsum1 className={brandStyles} />
          <LogoIpsum2 className={brandStyles} />
          <LogoIpsum21 className={brandStyles} />
          <LogoIpsum2 className={brandStyles} />
          <LogoIpsum22 className={brandStyles} />
          <LogoIpsum3 className={brandStyles} />
          <LogoIpsum3 className={brandStyles} />
          <LogoIpsum21 className={brandStyles} />
          <LogoIpsum1 className={brandStyles} />
          <LogoIpsum3 className={brandStyles} />
          <LogoIpsum3 className={brandStyles} />
          <LogoIpsum22 className={brandStyles} />
          <LogoIpsum1 className={brandStyles} />
          <LogoIpsum2 className={brandStyles} />
        </div>
      </div>
    </div>
  );
}

export default Partner;
