import { Cursor } from "@shared/index";
import { MyRoutes } from "../pages/index";
import { useEffect } from "react";
import { useAppSelector } from "@shared/lib/redux/hooks";
import { RootState } from "@shared/lib/redux/store";
import ClickSpark from "@shared/ui/sparkEffect";

import "@shared/styles/scrollbar.scss";

function App() {
  const isMenuOpen = useAppSelector((state: RootState) => state.menu.isOpen);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <div className="app-wrapper">
      <ClickSpark />
      <Cursor />
      <MyRoutes />
    </div>
  );
}

export default App;
