import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Parallax } from "swiper/modules";
import mob from "@assets/images/logo.webp";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.scss";

interface PhotoItem {
  image: string;
}

interface CarouselProps {
  images: PhotoItem[];
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Parallax]}
      navigation
      parallax
      pagination={{ clickable: true }}
      spaceBetween={50}
      speed={600}
      slidesPerView={1}
      centeredSlides={true}
      className="carousel mt-12"
      style={{
        "--swiper-pagination-color": "#FF5722",
        "--swiper-navigation-color": "#FF5722",
      }}
    >
      {images.map((photoObject, index) => (
        <SwiperSlide className="carousel__slide">
          <img
            src={photoObject.image}
            key={index}
            alt="phone"
            className="mb-12"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
