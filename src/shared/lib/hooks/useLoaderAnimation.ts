import { useEffect } from "react";
import gsap from "gsap";

export const useLoaderAnimation = (loaderWrapperRef: any) => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(loaderWrapperRef.current, {
      autoAlpha: 1,
      duration: 0.5,
    });

    // Simulate loading for 3 seconds
    tl.to(loaderWrapperRef.current, {
      delay: 3000,
    });

    // Disappear Animation
    tl.to(loaderWrapperRef.current, {
      autoAlpha: 0,
      duration: 0.5,
    });
  }, []);
};
