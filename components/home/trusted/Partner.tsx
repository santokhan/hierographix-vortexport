import Image from "next/image";
import partner1 from "../../../app/assets/images/partners/1.png";
import partner2 from "../../../app/assets/images/partners/2.png";
import partner3 from "../../../app/assets/images/partners/3.png";
import partner4 from "../../../app/assets/images/partners/4.png";
import partner5 from "../../../app/assets/images/partners/5.png";
import partner6 from "../../../app/assets/images/partners/6.png";
import Headline from "@/components/shared/Headline";

const Partner = () => (
  <div className="max-w-screen-lg mx-auto px-4 py-8 space-y-8">
    <Headline>
      Trusted <span className="text-teal-500">Parternships</span>
    </Headline>
    <div className="flex justify-center items-center flex-wrap gap-x-8 gap-y-5 relative">
      <div className="h-full w-1/4 absolute top-0 left-0 bg-gradient-to-l from-transparent to-vpurple-950"></div>
      <div className="h-full w-1/4 absolute top-0 right-0 bg-gradient-to-r from-transparent to-vpurple-950"></div>
      <Image src={partner1} alt="partner" className="h-8 w-30 object-contain" />
      <Image src={partner2} alt="partner" className="h-8 w-30 object-contain" />
      <Image src={partner3} alt="partner" className="h-8 w-30 object-contain" />
      <Image src={partner4} alt="partner" className="h-8 w-30 object-contain" />
      <Image src={partner5} alt="partner" className="h-8 w-30 object-contain" />
      <Image src={partner6} alt="partner" className="h-8 w-30 object-contain" />
      <Image src={partner5} alt="partner" className="h-8 w-30 object-contain" />
      <Image src={partner3} alt="partner" className="h-8 w-30 object-contain" />
      <Image src={partner3} alt="partner" className="h-8 w-30 object-contain" />
      <Image src={partner4} alt="partner" className="h-8 w-30 object-contain" />
    </div>
  </div>
);

export default Partner;
