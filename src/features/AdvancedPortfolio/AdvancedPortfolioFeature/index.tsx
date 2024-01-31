import { useState } from "react";
import { Slide } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation, Parallax, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

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
    8: "eight",
  };

  const slidesData = [
    {
      id: 0,
      title: "AS & Partners",
      description: "Разработка сайта",
    },
    {
      id: 2,
      title: "Cargo Express PV",
      description: "Разработка сайта",
    },
    {
      id: 3,
      title: "Prime Properties",
      description: "Разработка сайта",
    },
    {
      id: 4,
      title: "Sharbakty Bidai",
      description: "Разработка сайта",
    },
    {
      id: 5,
      title: "Special Solutions",
      description: "Разработка сайта",
    },
    {
      id: 6,
      title: "Zippity",
      description: "Разработка сайта",
    },
    {
      id: 7,
      title: "AGRO PARTNERS PV",
      description: "Разработка сайта",
    },
    {
      id: 8,
      title: "China Drive",
      description: "Разработка сайта",
    },
    {
      id: 9,
      title: "Intelligence.IO",
      description: "Разработка сайта",
    },
  ];

  const handleSlideChange = (swiper: SwiperType) => {
    const newBgImage = backgrounds[swiper.activeIndex];
    setBgImage(newBgImage);
  };

  return (
    <>
      <Slide direction="left">
        <h4 className="w-[90%] mt-20 m-auto text-center">
          Наше <span className="orange">портфолио</span>
        </h4>
      </Slide>
      <Slide direction="right">
        <p className="mt-4 w-[90%] m-auto min-[1024px]:text-center !w-[50%]">
          Идейные соображения высшего порядка, а также консультация с широким
          активом позволяет оценить значение дальнейших направлений развития. Не
          следует, однако забывать, что реализация.
        </p>
      </Slide>
      <Swiper
        modules={[Parallax, Autoplay, Navigation]}
        parallax
        spaceBetween={50}
        speed={600}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
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
        {slidesData.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="parallax-slider__slide hoverable"
          >
            <div>
              <Slide
                direction="left"
                className="w-full flex flex-col items-center text-center justify-center"
                delay={150}
              >
                <span className="parallax-slider__slide__text">
                  {slide.title}
                </span>
              </Slide>
              <Slide
                direction="right"
                className="w-full flex flex-col items-center text-center justify-center"
                delay={250}
              >
                <span className="parallax-slider__slide__sub-text">
                  {slide.description}
                </span>
              </Slide>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
