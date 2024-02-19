import { Cursor } from "@shared/index";
import { MyRoutes } from "../pages/index";
import { useEffect } from "react";
import { RootState } from "@shared/lib/redux/store";
import { Popup } from "@features/Popup/ui";
import { useSelector } from "react-redux";
import ClickSpark from "@shared/ui/sparkEffect";

import "@shared/styles/scrollbar.scss";

function App() {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);
  const isWindowOpen = useSelector((state: RootState) => state.popup.isOpened);

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
      {isWindowOpen && <Popup />}
      <MyRoutes />
    </div>
  );
}

export default App;
