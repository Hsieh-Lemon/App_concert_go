import { configureStore, createSlice } from "@reduxjs/toolkit";


  const initialState = { colorMode: "light" };

  const colorSlice = createSlice({
    name: "color",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      setColorMode:(state)=>{
        state.colorMode = state.colorMode === "light" ? "dark" : "light";
   
      }
    },
  });
  export const selectColorMode = (state) => state.color.colorMode;
  export const {setColorMode} = colorSlice.actions;
  export default colorSlice.reducer;