// src/yourReduxStore.js

import { createSlice, configureStore } from '@reduxjs/toolkit';

// Define an initial state for your store
const initialState = {
  cart: [],
};

// Create a Redux slice for managing the cart state
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    // Add other reducers as needed (e.g., remove from cart, update quantity, etc.)
  },
});

// Export the actions created by the cart slice
export const { addToCart } = cartSlice.actions;

// Create the Redux store using the configureStore function
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    // Add other reducers here if you have more slices
  },
});

export default store;
