import img1 from "@assets/images/sites/mockups/SHBT_PHONE_MOCKUP.png";
import img2 from "@assets/images/sites/mockups/SS_PHONE_MOCKUP.png";
import img3 from "@assets/images/sites/mockups/AGRO_PHONE_MOCKUP.png";

export interface PhotoItem {
  photo: string;
}

export interface CarouselProps {
  images: PhotoItem[];
}

export const carouselImages: Record<string, CarouselProps> = {
  first: {
    images: [
      {
        photo: img1,
      },
      {
        photo: img2,
      },
      {
        photo: img3,
      },
    ],
  },
};
