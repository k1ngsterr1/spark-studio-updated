import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Parallax } from "swiper/modules";
import { CarouselProps } from "@shared/lib/data/images";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.scss";

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Parallax]}
      navigation
      parallax
      pagination={{ clickable: true }}
      spaceBetween={50}
      slidesPerView={1}
      className="carousel mt-20 cursor-none"
      centeredSlides={true}
      style={{
        "--swiper-pagination-color": "#FF5722",
        "--swiper-navigation-color": "#FF5722",
      }}
    >
      {images.map((photoObject, index) => (
        <SwiperSlide className="carousel__slide">
          <img
            src={photoObject.photo}
            key={index}
            alt="phone"
            className="carousel__slide__image mb-12 hoverable"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
