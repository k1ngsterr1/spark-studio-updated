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
        <h4 className="w-[90%] mt-20 m-auto text-center">
          Наше <span className="orange">портфолио</span>
        </h4>
      </Slide>
      <Slide direction="right" triggerOnce={true}>
        <p className="mt-4 w-[90%] m-auto">
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
          <div>
            <Slide
              direction="left"
              className="w-full flex flex-col items-center text-center justify-center"
              delay={150}
            >
              <span className="parallax-slider__slide__text">
                Intelligence.io
              </span>
            </Slide>
            <Slide
              direction="right"
              className="w-full flex flex-col items-center text-center justify-center"
              delay={250}
            >
              <span className="parallax-slider__slide__sub-text">
                Разработка сайта
              </span>
            </Slide>
          </div>
        </SwiperSlide>
        <SwiperSlide className="parallax-slider__slide">
          <div>
            <Slide
              direction="left"
              className="w-full flex flex-col items-center text-center justify-center"
              // delay={250}
              fraction={0.1}
            >
              <span className="parallax-slider__slide__text w-full">
                Cargo Express
              </span>
            </Slide>
            <Slide
              direction="right"
              className="w-full flex flex-col items-center text-center justify-center"
              delay={250}
            >
              <span className="parallax-slider__slide__sub-text">
                Разработка сайта
              </span>
            </Slide>
          </div>
        </SwiperSlide>
        <SwiperSlide className="parallax-slider__slide">
          <div>
            <Slide
              direction="left"
              className="w-full flex flex-col items-center text-center justify-center"
              delay={150}
            >
              <span className="parallax-slider__slide__text w-full">
                Prime Properties
              </span>
            </Slide>
            <Slide
              direction="right"
              className="w-full flex flex-col items-center text-center justify-center"
              delay={250}
            >
              <span className="parallax-slider__slide__sub-text">
                Разработка Сайта
              </span>
            </Slide>
          </div>
        </SwiperSlide>
        <SwiperSlide className="parallax-slider__slide">
          <div>
            <Slide
              direction="left"
              className="w-full flex flex-col items-center text-center justify-center"
              delay={150}
            >
              <span className="parallax-slider__slide__text w-full">
                Sharbakty Bidai
              </span>
            </Slide>
            <Slide
              direction="right"
              className="w-full flex flex-col items-center text-center justify-center"
              delay={250}
            >
              <span className="parallax-slider__slide__sub-text">
                Разработка сайта
              </span>
            </Slide>
          </div>
        </SwiperSlide>
        <SwiperSlide className="parallax-slider__slide">
          <div>
            <Slide
              direction="left"
              className="w-full flex flex-col items-center text-center justify-center"
              delay={150}
            >
              <span className="parallax-slider__slide__text w-full">
                Special Solutions
              </span>
            </Slide>
            <Slide
              direction="right"
              className="w-full flex flex-col items-center text-center justify-center"
              delay={250}
            >
              <span className="parallax-slider__slide__sub-text">
                Разработка сайта
              </span>
            </Slide>
          </div>
        </SwiperSlide>
        <SwiperSlide className="parallax-slider__slide">
          <div>
            <Slide
              direction="left"
              className="w-full flex flex-col items-center text-center justify-center"
              delay={150}
            >
              <span className="parallax-slider__slide__text w-full">
                Cargo Express
              </span>
            </Slide>
            <Slide
              direction="right"
              className="w-full flex flex-col items-center text-center justify-center"
              delay={250}
            >
              <span className="parallax-slider__slide__sub-text">
                Разработка сайта
              </span>
            </Slide>
          </div>
        </SwiperSlide>
        <SwiperSlide className="parallax-slider__slide">
          <Slide
            direction="left"
            className="w-full flex items-center justify-center text-center"
            delay={150}
          >
            <span className="parallax-slider__slide__text">
              Prime Properties
            </span>
          </Slide>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
