import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
  name: "popup",
  initialState: {
    isOpened: false,
  },
  reducers: {
    openWindow: (state) => {
      state.isOpened = !state.isOpened;
    },
  },
});

export const { openWindow } = popupSlice.actions;
export default popupSlice.reducer;
