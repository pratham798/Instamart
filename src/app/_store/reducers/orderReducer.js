"use client";

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import shopping from '@/app/_lib/api/shopping';

export const fetchOrderData = createAsyncThunk('order/fetchOrder',  async () => {
    const response = await shopping.getInitialData();
    return response;
  },
);

const initialState = {
  orderItems: [],
  paymentMethods: [],
  orderPaymentMethod: '',
  orderStatus: 'pending',
  isLoading: true,
  isError: false,
};

export const orderReducer = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrderData.pending, (state) => {
     state.isLoading = true;
     state.isError = false;
    })
    builder.addCase(fetchOrderData.fulfilled, (state, action) => {
     state.isLoading = false;
     state.isError = false;
     state.orderItems = action.payload.products;
     state.paymentMethods = action.payload.paymentMethods;
    })
    builder.addCase(fetchOrderData.rejected, (state) => {
     state.isError = true;
     state.isLoading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const { selectPaymentMethod } = orderReducer.actions;

export default orderReducer.reducer;
