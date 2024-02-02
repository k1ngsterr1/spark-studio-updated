import { Swiper, SwiperSlide } from "swiper/react";
import { DevicesGalleryProps } from "@shared/lib/data/portfolioContent";

import "swiper/css";
import "swiper/css/navigation";
import "./styles.scss";

export const DevicesGallery: React.FC<DevicesGalleryProps> = ({
  devicesImages,
}) => {
  return (
    <Swiper
      navigation
      slidesPerView={1}
      centeredSlides={true}
      className="devices_carousel"
      style={{
        "--swiper-pagination-color": "#FF5722",
        "--swiper-navigation-color": "#FF5722",
      }}
    >
      {devicesImages.map((photoObject, index) => (
        <SwiperSlide className="devices_carousel__slide">
          <img
            src={photoObject.photo}
            key={index}
            alt="devices_photo"
            className="devices_carousel__slide__photo"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
