import comingSoon from "@assets/additional/coming_soon.svg";
import { Menu } from "@features/index";
import { Button } from "@shared/ui/button";
import { Header } from "@widgets/Header/ui";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

export const ComingSoonPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Menu />
      <div className="main mt-40 m-auto flex items-center justify-between mb-16">
        <Fade>
          <h1 className="font-macherie text-custom-orange">Coming Soon</h1>
        </Fade>
        <Fade delay={200}>
          <span className="text-sm mt-4">
            The quiter you become, the more you able to hear
          </span>
        </Fade>
        <Fade delay={300} className="flex items-center justify-center">
          <img className="w-[50%] mt-20" src={comingSoon} alt="coming_soon" />
        </Fade>
        <Fade delay={400}>
          <Button
            onClick={() => navigate("/home")}
            text="Главная"
            marginTop="mt-12"
          />
        </Fade>
      </div>
    </>
  );
};
