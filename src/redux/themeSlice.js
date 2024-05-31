import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themeMode: 'light', // 初始主题模式为 light
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleThemeMode: (state) => {
      // 切换主题模式为与当前相反的模式
      state.themeMode = state.themeMode === 'light' ? 'dark' : 'light';
    },
    // 如果需要根据设备的颜色模式自动切换主题，可以添加一个额外的 reducer 函数
    // toggleThemeModeByColorScheme: (state, action) => {
    //   state.themeMode = action.payload; // 设置主题模式为设备的颜色模式
    // },
  },
});

export const { toggleThemeMode } = themeSlice.actions;

// 如果需要根据设备的颜色模式自动切换主题，可以导出相应的 reducer 函数
// export const { toggleThemeMode, toggleThemeModeByColorScheme } = themeSlice.actions;

export const selectThemeMode = (state) => state.theme.themeMode;

export default themeSlice.reducer;
