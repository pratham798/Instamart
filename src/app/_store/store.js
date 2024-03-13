"use client";

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import orderReducer from './reducers/orderReducer';

const shoppingReducer = combineReducers({
  order: orderReducer,
});

export const store = configureStore({
  reducer: shoppingReducer,
});
