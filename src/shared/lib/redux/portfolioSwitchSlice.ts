import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const portfolioSwitchSlice = createSlice({
  name: "portfolioState",
  initialState: {
    portfolioState: "Сайты",
  },
  reducers: {
    switchState: (state, action: PayloadAction<string>) => {
      state.portfolioState = action.payload;
    },
  },
});

export const { switchState } = portfolioSwitchSlice.actions;
export default portfolioSwitchSlice.reducer;
