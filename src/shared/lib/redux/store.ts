import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "@features/navigation/model/index";
import selectorReducer from "@shared/ui/selector/model/index";
import loadReducer from "./loaderSlice";
import menuStateReducer from "./menuStateSlice";
import burgerReducer from "./burgerSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    menuState: menuStateReducer,
    selector: selectorReducer,
    loader: loadReducer,
    burger: burgerReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
