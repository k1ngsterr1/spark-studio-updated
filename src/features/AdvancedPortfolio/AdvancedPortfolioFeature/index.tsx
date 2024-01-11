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
    0: "zero",
    1: "one",
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
        modules={[Parallax]}
        parallax
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
        <SwiperSlide className="parallax-slider__slide">
          <Slide
            direction="left"
            className="w-full flex items-center text-center justify-center"
            delay={150}
          >
            <span className="parallax-slider__slide__text orange">
              Sharbakty.kz
            </span>
          </Slide>
        </SwiperSlide>
        <SwiperSlide className="parallax-slider__slide">
          <Slide
            direction="left"
            className="w-full flex items-center text-center justify-center"
            delay={150}
          >
            <span className="parallax-slider__slide__text text-custom-black">
              Special Solution
            </span>
          </Slide>
        </SwiperSlide>
        <SwiperSlide className="parallax-slider__slide">
          <Slide
            direction="left"
            className="w-full flex items-center justify-center orange"
            delay={150}
          >
            <span className="parallax-slider__slide__text">Jintropine</span>
          </Slide>
        </SwiperSlide>
        <SwiperSlide className="parallax-slider__slide">
          <Slide
            direction="left"
            className="w-full flex items-center justify-center"
            delay={150}
          >
            <span className="parallax-slider__slide__text orange">
              YourDomain
            </span>
          </Slide>
        </SwiperSlide>
        <SwiperSlide className="parallax-slider__slide">
          <Slide
            direction="left"
            className="w-full flex items-center justify-center"
            delay={150}
          >
            <span className="parallax-slider__slide__text text-custom-black">
              DREKT.IO
            </span>
          </Slide>
        </SwiperSlide>
        <SwiperSlide className="parallax-slider__slide">
          <Slide
            direction="left"
            className="w-full flex items-center text-center justify-center"
            delay={150}
          >
            <span className="parallax-slider__slide__text  text-custom-black">
              Retro Website
            </span>
          </Slide>
        </SwiperSlide>
        <SwiperSlide className="parallax-slider__slide">
          <Slide
            direction="left"
            className="w-full flex items-center justify-center text-center"
            delay={150}
          >
            <span className="parallax-slider__slide__text text-custom-black">
              Prime Properties
            </span>
          </Slide>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
