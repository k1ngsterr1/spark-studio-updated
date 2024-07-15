import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";

import "./utils/i18n.ts";

import { Provider } from "react-redux";
import { store } from "@shared/lib/redux/store.ts";

import "@shared/styles/global.scss";

window.onload = () => {
  console.log(
    `%c
                 


    ███████╗██████╗  █████╗ ██████╗ ██╗  ██╗    ███████╗████████╗██╗   ██╗██████╗ ██╗ ██████╗ 
    ██╔════╝██╔══██╗██╔══██╗██╔══██╗██║ ██╔╝    ██╔════╝╚══██╔══╝██║   ██║██╔══██╗██║██╔═══██╗
    ███████╗██████╔╝███████║██████╔╝█████╔╝     ███████╗   ██║   ██║   ██║██║  ██║██║██║   ██║
    ╚════██║██╔═══╝ ██╔══██║██╔══██╗██╔═██╗     ╚════██║   ██║   ██║   ██║██║  ██║██║██║   ██║
    ███████║██║     ██║  ██║██║  ██║██║  ██╗    ███████║   ██║   ╚██████╔╝██████╔╝██║╚██████╔╝
    ╚══════╝╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝    ╚══════╝   ╚═╝    ╚═════╝ ╚═════╝ ╚═╝ ╚═════╝ 
                                                                                                  


`,
    "color:#FF5722"
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);

