import { createSlice } from "@reduxjs/toolkit";

  const colorSlice = createSlice({
    name: "color",
    initialState: {
      colorMode: 'light', 
    },reducers: {
      setColorMode: (state, action) => {
        state.colorMode = action.payload;
      },
    },
  });
export const { setColorMode } = colorSlice.actions;
export const selectColorMode = (state) => state.color.colorMode;
export default colorSlice.reducer;