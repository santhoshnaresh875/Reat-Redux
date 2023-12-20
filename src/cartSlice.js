// src/cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, thumbnail } = action.payload;
      const existingItem = state.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ id, title, price, thumbnail, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const idToRemove = action.payload.id;
      return state.filter(item => item.id !== idToRemove);
    },
    // Add other reducers as needed (e.g., incrementQuantity, decrementQuantity)
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
