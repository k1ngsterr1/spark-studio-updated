import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    menuOpen: false,
  },
  reducers: {
    toggleMenu(state) {
      state.menuOpen = !state.menuOpen;
    },
  },
});

export const { toggleMenu } = navigationSlice.actions;
export default navigationSlice.reducer;
