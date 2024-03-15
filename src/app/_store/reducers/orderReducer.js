"use client";

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import shopping from '@/app/_lib/api/shopping';

export const fetchOrderData = createAsyncThunk('order/fetchOrder',  async () => {
    const response = await shopping.getInitialData();
    const orderAmount = response?.products?.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    response.orderAmount = orderAmount;
    return response;
  },
);

const initialState = {
  orderItems: [],
  totalAmount: '',
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
     state.orderAmount = action.payload.orderAmount;
     state.paymentMethods = action.payload.paymentMethods;
    })
    builder.addCase(fetchOrderData.rejected, (state) => {
     state.isError = true;
     state.isLoading = false;
    });
  },
});

export const { selectPaymentMethod } = orderReducer.actions;

export default orderReducer.reducer;
