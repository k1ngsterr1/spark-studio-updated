import { createSlice } from "@reduxjs/toolkit";

const menuStateSlice = createSlice({
  name: "menuState",
  initialState: {
    menuState: "",
  },
  reducers: {
    noneState: (state) => {
      state.menuState = "";
    },
    serviceState: (state) => {
      state.menuState = "services";
    },
  },
});

export const { noneState, serviceState } = menuStateSlice.actions;
export default menuStateSlice.reducer;
