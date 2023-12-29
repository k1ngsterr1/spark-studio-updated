import { createSlice } from "@reduxjs/toolkit";

const burgerSlice = createSlice({
  name: "burger",
  initialState: {
    isOpened: false,
  },
  reducers: {
    openMenu: (state) => {
      state.isOpened = !state.isOpened;
    },
  },
});

export const { openMenu } = burgerSlice.actions;
export default burgerSlice.reducer;
