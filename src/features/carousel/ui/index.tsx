import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";

import "./styles.scss";

interface CarouselProps {
  imageFirst: any;
  imageSecond: any;
  imageThird: any;
}

export const Carousel: React.FC<CarouselProps> = ({
  imageFirst,
  imageSecond,
  imageThird,
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={50}
      slidesPerView={1}
      centeredSlides={true}
      className="carousel mt-12"
      // style={{
      //   "--swiper-pagination-color": "#FF5722",
      //   "--swiper-navigation-color": "#FF5722",
      // }}
    >
      <SwiperSlide className="carousel__slide">
        <img src={imageFirst} alt="phone" className="mb-12" />
      </SwiperSlide>
      <SwiperSlide className="carousel__slide">
        <img src={imageSecond} alt="phone" className="mb-12" />
      </SwiperSlide>
      <SwiperSlide className="carousel__slide">
        <img src={imageThird} alt="phone" className="mb-12" />
      </SwiperSlide>
    </Swiper>
  );
};
