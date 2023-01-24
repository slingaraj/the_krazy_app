import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, {payload}) {
      if (state && payload) {
        state.push({
          ...payload,
        });
      }
    },
    clear(state) {
      return [];
    },
  },
});

export const {addToCart, clear} = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export default cartReducer;
