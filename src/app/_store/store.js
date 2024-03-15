"use client";

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import orderReducer from './reducers/orderReducer';
import userReducer from './reducers/userReducer';

const shoppingReducer = combineReducers({
  order: orderReducer,
  userInfo: userReducer,
});

export const store = configureStore({
  reducer: shoppingReducer,
});
