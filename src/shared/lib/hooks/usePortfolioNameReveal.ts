import { useRef, useCallback } from "react";
import gsap from "gsap";

type usePortfolioNameRevealReturnType = {
  portfolioTab: React.RefObject<HTMLDivElement>;
  tabOnHoverAnimation: () => void;
  tabOffHoverAnimation: () => void;
};

export const usePortfolioNameReveal = (): usePortfolioNameRevealReturnType => {
  const portfolioTab = useRef<HTMLDivElement>(null);

  const tabOnHoverAnimation = useCallback(() => {
    if (portfolioTab.current) {
      const tab = portfolioTab.current;

      gsap.to(tab, {
        translateX: 1000,
      });
    }
  }, []);

  const tabOffHoverAnimation = useCallback(() => {
    if (portfolioTab.current) {
      const tab = portfolioTab.current;

      gsap.to(tab, {
        translateX: -1000,
      });
    }
  }, []);

  return {
    portfolioTab,
    tabOnHoverAnimation,
    tabOffHoverAnimation,
  };
};
