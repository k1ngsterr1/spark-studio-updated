import { useEffect } from "react";
import gsap from "gsap";

export const useProgressBar = (progressBarRef: any) => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(progressBarRef.current, {
      autoAlpha: 1,
      duration: 0.5,
      width: "10%",
    });

    // Simulated staggered loading
    tl.to(progressBarRef.current, {
      duration: 0.5,
      width: "30%",
      ease: "power1.inOut",
    })
      .to(progressBarRef.current, {
        duration: 1,
        width: "60%",
        ease: "power1.inOut",
      })
      .to(progressBarRef.current, {
        duration: 0.5,
        width: "80%",
        ease: "power1.inOut(1, 0.3)",
      });

    // Disappear Animation
    tl.to(progressBarRef.current, {
      duration: 0.5,
      width: "100%",
      onComplete: () => {
        gsap.set(progressBarRef.current, { width: "100%" }); // Reset the progress bar after the animation completes
      },
    });
  }, []);
};
