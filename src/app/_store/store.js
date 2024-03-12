"use client";

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartReducer';

const shoppingReducer = combineReducers({
  cart: cartReducer,
});

export const store = configureStore({
  reducer: shoppingReducer,
});
