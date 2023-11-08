import { Loader } from "@shared/index";
import { useAppSelector } from "@shared/lib/redux/hooks";
import { Menu } from "@features/menu/ui";
import { Header } from "@widgets/Header/ui";

export const HomePage = () => {
  const isOpen = useAppSelector((state) => state.menu.isOpen);

  return (
    <>
      <Loader />
      <Header />
      <Menu />
    </>
  );
};
