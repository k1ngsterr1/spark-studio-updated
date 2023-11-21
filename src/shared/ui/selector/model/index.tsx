import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectState {
  selectedOption: string;
}

const initialState: SelectState = {
  selectedOption: "Сайты",
};

const selectorSlice = createSlice({
  name: "selector",
  initialState,
  reducers: {
    changeOption: (state, action: PayloadAction<string>) => {
      state.selectedOption = action.payload;
    },
  },
});

export const { changeOption } = selectorSlice.actions;
export default selectorSlice.reducer;
