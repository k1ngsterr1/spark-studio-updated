import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
  name: "popup",
  initialState: {
    isOpened: false,
  },
  reducers: {
    openWindow: (state) => {
      state.isOpened = true;
    },
    closeWindow: (state) => {
      state.isOpened = false;
    },
  },
});

export const { openWindow, closeWindow } = popupSlice.actions;
export default popupSlice.reducer;
