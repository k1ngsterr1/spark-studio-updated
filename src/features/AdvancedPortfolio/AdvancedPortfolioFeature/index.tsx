import { useState } from "react";
import { Slide } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Pagination, Navigation, Parallax } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.scss";

export const AdvancedPortfolioFeature = () => {
  const [bgImage, setBgImage] = useState("one");

  const backgrounds: { [key: number]: string } = {
    0: "zero", // First slide background class
    1: "one", // Second slide background class
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
  };

  const handleSlideChange = (swiper: SwiperType) => {
    const newBgImage = backgrounds[swiper.activeIndex];
    setBgImage(newBgImage);
  };

  return (
    <>
      <Slide direction="left" triggerOnce={true}>
        <h4 className="mt-20 text-center">
          Наше <span className="orange">портфолио</span>
        </h4>
      </Slide>
      <Slide direction="right" triggerOnce={true}>
        <p className="mt-4">
          Идейные соображения высшего порядка, а также консультация с широким
          активом позволяет оценить значение дальнейших направлений развития. Не
          следует, однако забывать, что реализация.
        </p>
      </Slide>
      <Swiper
        modules={[Pagination, Parallax]}
        parallax
        pagination={{ clickable: true }}
        spaceBetween={50}
        speed={600}
        slidesPerView={1}
        centeredSlides={true}
        onSlideChange={handleSlideChange}
        className="parallax-slider mt-12 w-100"
        style={{
          "--swiper-pagination-color": "#FF5722",
          "--swiper-navigation-color": "#FF5722",
        }}
      >
        <div
          slot="container-start"
          data-swiper-parallax="0%"
          className={`${bgImage}`}
        ></div>
        <SwiperSlide className="parallar-slider__slide">
          <span className="text-2xl orange">Example 1</span>
        </SwiperSlide>
        <SwiperSlide className="parallar-slider__slide">
          <span className="text-2xl orange">Example 2</span>
        </SwiperSlide>
        <SwiperSlide className="parallar-slider__slide">
          <span className="text-2xl orange">Example 3</span>
        </SwiperSlide>
        <SwiperSlide className="parallar-slider__slide">
          <span className="text-2xl orange">Example 1</span>
        </SwiperSlide>
        <SwiperSlide className="parallar-slider__slide">
          <span className="text-2xl orange">Example 2</span>
        </SwiperSlide>
        <SwiperSlide className="parallar-slider__slide">
          <span className="text-2xl orange">Example 3</span>
        </SwiperSlide>
        <SwiperSlide className="parallar-slider__slide">
          <span className="text-2xl orange">Example 3</span>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
