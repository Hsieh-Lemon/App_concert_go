import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload); 
    },
  },
});

export const { addToCart } = cartSlice.actions;
export const selectCart = state => state.cart;

export default cartSlice.reducer;
