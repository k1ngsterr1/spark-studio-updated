// store.ts
import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "@features/navigation/model/index";
import selectorReducer from "@shared/ui/selector/model/index";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    selector: selectorReducer,
  },
  devTools: process.env.NODE_ENV !== "production", // Explicitly enabling DevTools
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
