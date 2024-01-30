import React from "react";
import { useTabAnimations } from "@shared/lib/hooks/useTabAnimation";
import { PortfolioTab } from "@shared/ui/portfolioTab";
import { Fade } from "react-awesome-reveal";

interface PortfolioItemProps {
  name: string;
  img: string;
  onClick: () => void;
}

export const PortfolioItem: React.FC<PortfolioItemProps> = ({
  name,
  img,
  onClick,
}) => {
  const { ref, onHoverAnimation, offHoverAnimation } = useTabAnimations();

  return (
    <Fade cascade direction="right">
      <PortfolioTab
        tabRef={ref}
        onHover={onHoverAnimation}
        offHover={offHoverAnimation}
        name={name}
        img={img}
        onClick={onClick}
      />
    </Fade>
  );
};
