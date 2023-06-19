"use client";

import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

interface Slider {
  src: string;
}

export const slider: Slider[] = [
  { src: "../../../app/assets/images/portfolio/featured.png" },
  { src: "../../../app/assets/images/portfolio/featured.png" },
  { src: "../../../app/assets/images/portfolio/featured.png" },
];

export default function SimpleSlider() {
  return (
    <div className="block space-y-4">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="testimonial-slider relative"
      >
        {slider.map((e: Slider, i) => (
          <SwiperSlide key={i} className="pb-12">
            <Image
              src={require("../../../app/assets/images/portfolio/featured.png")}
              alt="mockup"
              className="w-full max-h-[360px] object-cover rounded-lg overflow-hidden"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
