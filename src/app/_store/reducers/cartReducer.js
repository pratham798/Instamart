"use client";

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: ['yo1', 'yo2'],
  paymentMethods: [],
};

export const cartReducer = createSlice({
  name: 'cartReducer',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const { addItems, addPaymentMethods } = cartReducer.actions;

export default cartReducer.reducer;