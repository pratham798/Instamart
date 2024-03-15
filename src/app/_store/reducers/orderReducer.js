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
  orderAmount: 0,
  paymentMethods: [],
  orderPaymentMethod: 'COD',
  orderStatus: 'success',
  isLoading: true,
  isError: false,
};

export const orderReducer = createSlice({
  name: 'order',
  initialState,
  reducers: {
    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const updatedOrderItems = state.orderItems.map(item => {
        if (item.id === productId) return { ...item, quantity: item.quantity + 1};
        return item;
      });
      const updatedProduct = updatedOrderItems.find(item => item.id === productId);
      const newTotalAmount = state.orderAmount + updatedProduct.price;

      return {
        ...state,
        orderItems: updatedOrderItems,
        orderAmount: newTotalAmount,
      };
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const updatedOrderItems = state.orderItems.map(item => {
        if (item.id === productId) return { ...item, quantity: item.quantity - 1};
        return item;
      });
      const updatedProduct = updatedOrderItems.find(item => item.id === productId);
      if(updatedProduct.quantity < 1) return state;
      const newTotalAmount = state.orderAmount - updatedProduct.price;

      return {
        ...state,
        orderItems: updatedOrderItems,
        orderAmount: newTotalAmount,
      };
    },
    removeItem: (state, action) => {
      const removedObject = state.orderItems.find(orderItem => orderItem.id === action.payload);
      if(removedObject) {
        const totalPriceReduced = removedObject.quantity * removedObject.price;
        const updatedAmount = state.orderAmount - totalPriceReduced;
        const updatedOrderItems = state.orderItems.filter(orderItem => orderItem.id !== action.payload);

        return {
          ...state,
          orderAmount: updatedAmount,
          orderItems: updatedOrderItems,
        }
      }
      return state;
    },
    selectPaymentMethod: (state, action) => ({
      ...state,
      orderPaymentMethod: action.payload,
    })
  },
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

export const { increaseQuantity, decreaseQuantity, removeItem, selectPaymentMethod } = orderReducer.actions;

export default orderReducer.reducer;
