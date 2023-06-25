import Image from "next/image";
import HeroImg from "../../assets/images/frontend/expertise.png";
import styles from "./Hero.module.css";
import SubscribeForm from "@/components/home/hero/SubscribeForm";

export default function Hero() {
  return (
    <div className="relative overflow-hidden px-4">
      <Effect />
      <div className="max-w-screen-xl mx-auto">
        <div className="max-w-screen-sm mx-auto flex flex-col items-center space-y-8 py-16 lg:py-20">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-start lg:text-center leading-[1.2]">
              Taking Your Business to the Summit of{" "}
              <span className="text-teal-500">Digital Success</span>
            </h2>
            <p className="text-gray-400 text-start lg:text-center lg:text-lg lg:px-4">
              We specialize in unleashing the full potential of your business by
              combining the power of creativity, and technical expertise.
            </p>
          </div>
          <SubscribeForm />
        </div>
        {/* <Image
          src={HeroImg}
          alt="hero-image"
          className="w-full object-contain md:max-w-3xl mx-auto"
        /> */}
        <div className=" md:max-w-3xl mx-auto">
          <HeroImage />
        </div>
      </div>
    </div>
  );
}

export const Effect = () => <div className={styles.heroEffect}></div>;

export function HeroImage() {
  return <svg className="w-full" viewBox="0 0 800 464" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M192.633 225.479V293.275C192.633 321.18 215.254 343.801 243.159 343.801H294.302C317.973 343.801 337.163 324.612 337.163 300.94V300.94C337.163 277.268 356.353 258.078 380.025 258.078H442.381" stroke="url(#paint0_linear_2223_9654)" stroke-width="4.21053" />
    <path d="M192.633 225.479V293.275C192.633 321.18 215.254 343.801 243.159 343.801H294.302C317.973 343.801 337.163 324.612 337.163 300.94V300.94C337.163 277.268 356.353 258.078 380.025 258.078H442.381" stroke="url(#paint1_linear_2223_9654)" stroke-width="4.21053" />
    <rect x="37.2793" y="42.1768" width="307.436" height="183.331" rx="8.42105" fill="url(#paint2_linear_2223_9654)" />
    <rect x="53.8281" y="62.6401" width="113.415" height="142.404" fill="#5ED8AE" />
    <rect x="184.438" y="166.955" width="38.0916" height="38.0903" fill="#5ED8AE" />
    <rect x="236.885" y="166.955" width="38.0916" height="38.0903" fill="#BBABF9" />
    <rect x="289.33" y="166.955" width="38.0916" height="38.0903" fill="#5ED8AE" />
    <rect x="184.438" y="62.6401" width="142.243" height="11.0349" fill="#5ED8AE" />
    <rect x="184.438" y="106.746" width="92.5212" height="11.0349" fill="#BBABF9" />
    <rect x="184.438" y="130.653" width="52.4454" height="11.0349" fill="#BBABF9" />
    <rect x="246.471" y="130.653" width="52.4454" height="11.0349" fill="white" />
    <rect x="184.438" y="82.8398" width="62.0349" height="11.0349" fill="white" />
    <rect x="253.936" y="82.8398" width="72.7443" height="11.0349" fill="white" fill-opacity="0.38" />
    <rect x="438.889" y="42.1768" width="309.42" height="347.382" rx="8.42105" fill="url(#paint3_linear_2223_9654)" />
    <rect x="452.562" y="57.5249" width="282.079" height="316.686" rx="8.42105" fill="url(#paint4_linear_2223_9654)" />
    <rect x="466.771" y="219.835" width="182.537" height="12.407" fill="#494C67" />
    <rect x="466.771" y="246.696" width="86.1684" height="12.407" fill="#7154E7" />
    <rect x="544.303" y="313.152" width="98.6061" height="27.3833" fill="#7154E7" />
    <rect x="659.391" y="219.835" width="48.3579" height="12.407" fill="#74CAAD" />
    <rect x="562.926" y="246.696" width="73.7586" height="12.407" fill="#74CAAD" />
    <rect x="646.674" y="246.696" width="73.7586" height="12.407" fill="#494C67" />
    <rect x="466.771" y="273.558" width="127.015" height="12.407" fill="#494C67" />
    <rect x="604.006" y="273.558" width="77.4184" height="12.407" fill="#494C67" />
    <rect x="466.771" y="70.4858" width="253.66" height="129.929" fill="#494C67" />
    <circle cx="453.736" cy="366.888" r="53.7356" fill="url(#paint5_linear_2223_9654)" />
    <path d="M438.998 347.941L437.63 354.972H466.24L465.314 359.52H436.724L435.335 366.53H463.945L462.345 374.551L450.808 378.362L440.809 374.551L441.503 371.099H434.472L432.809 379.52L449.335 385.836L468.387 379.52L470.914 366.825L471.419 364.278L474.661 347.941H438.998Z" fill="#28264E" />
    <circle cx="110.543" cy="133.843" r="41.3495" fill="white" fill-opacity="0.14" />
    <circle cx="110.542" cy="133.843" r="29.4737" fill="white" fill-opacity="0.14" />
    <path d="M110.545 144.14L103.251 142.048L102.731 136.14H106.315L106.566 139.214L110.545 140.325L114.523 139.214L114.935 134.437H102.588L101.585 123.307H119.505L119.146 126.992H105.527L105.849 130.751H118.824L117.838 142.048L110.545 144.14ZM96.334 117.177H124.755L122.192 147.177L110.545 150.511L98.8965 147.177L96.334 117.177ZM99.7894 120.511L101.844 144.567L110.545 147.057L119.245 144.567L121.3 120.511H99.7894Z" fill="white" />
    <rect x="186.199" y="225.479" width="12.866" height="3.48479" fill="url(#paint6_linear_2223_9654)" />
    <rect x="435.609" y="252.901" width="3.28125" height="10.5109" fill="url(#paint7_linear_2223_9654)" />
    <defs>
      <linearGradient id="paint0_linear_2223_9654" x1="445.728" y1="335.858" x2="184.414" y2="335.858" gradientUnits="userSpaceOnUse">
        <stop stop-color="white" stop-opacity="0.68" />
        <stop offset="1" stop-color="white" stop-opacity="0.68" />
      </linearGradient>
      <linearGradient id="paint1_linear_2223_9654" x1="244.434" y1="246.782" x2="367.67" y2="246.782" gradientUnits="userSpaceOnUse">
        <stop stop-color="#77FFD1" stop-opacity="0" />
        <stop offset="0.465152" stop-color="#7EFF8B" />
        <stop offset="1" stop-color="#77FFD1" stop-opacity="0" />
      </linearGradient>
      <linearGradient id="paint2_linear_2223_9654" x1="190.997" y1="42.1768" x2="190.997" y2="225.508" gradientUnits="userSpaceOnUse">
        <stop stop-color="#9C85FB" />
        <stop offset="1" stop-color="#6F52E7" />
      </linearGradient>
      <linearGradient id="paint3_linear_2223_9654" x1="593.599" y1="42.1768" x2="593.599" y2="389.559" gradientUnits="userSpaceOnUse">
        <stop stop-color="#9C85FB" />
        <stop offset="1" stop-color="#6F52E7" />
      </linearGradient>
      <linearGradient id="paint4_linear_2223_9654" x1="591.345" y1="374.211" x2="594.276" y2="57.552" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2B2454" />
        <stop offset="1" stop-color="#232A43" />
      </linearGradient>
      <linearGradient id="paint5_linear_2223_9654" x1="422.994" y1="373.174" x2="506.209" y2="396.495" gradientUnits="userSpaceOnUse">
        <stop stop-color="#25EAA7" />
        <stop offset="1" stop-color="#72D1B1" />
      </linearGradient>
      <linearGradient id="paint6_linear_2223_9654" x1="195.313" y1="228.964" x2="195.313" y2="225.479" gradientUnits="userSpaceOnUse">
        <stop stop-color="#7B62E2" />
        <stop offset="1" stop-color="#8468F5" />
      </linearGradient>
      <linearGradient id="paint7_linear_2223_9654" x1="437.934" y1="263.412" x2="437.934" y2="252.901" gradientUnits="userSpaceOnUse">
        <stop stop-color="#7B62E2" />
        <stop offset="1" stop-color="#8468F5" />
      </linearGradient>
    </defs>
  </svg>
}
