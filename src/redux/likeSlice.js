import { createSlice } from '@reduxjs/toolkit';

export const likeSlice = createSlice({
  name: 'likes',
  initialState: {
    likes: [],
  },
  reducers: {
    addLike: (state, action) => {
      state.likes.push(action.payload); 
    },
    removeLike: (state, action) => {
      state.likes = state.likes.filter(item => item.itemname !== action.payload.itemname); // 确保修改 state.likes 数组
    },
  },
});

export const { addLike, removeLike } = likeSlice.actions;
export const selectLikes = state => state.likes.likes; 
export default likeSlice.reducer;

