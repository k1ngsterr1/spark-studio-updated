import img1 from "@assets/images/apps/phone_1.webp";
import img2 from "@assets/images/apps/phone_BSHOP.webp";
import img3 from "@assets/images/apps/phone_mobauto.webp";

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
