import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "@features/navigation/model/index";
import selectorReducer from "@shared/ui/selector/model/index";
import loadReducer from "./loaderSlice";
import menuStateReducer from "./menuStateSlice";
import burgerReducer from "./burgerSlice";
import portfolioSwitchReducer from "./portfolioSwitchSlice";
import popupSlice from "./popupSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    popup: popupSlice,
    menuState: menuStateReducer,
    selector: selectorReducer,
    loader: loadReducer,
    burger: burgerReducer,
    portfolioState: portfolioSwitchReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
