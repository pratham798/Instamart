"use client";

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
  userPhone: '',
  userAddress: '',
};

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => ({
      ...state,
      userName: action.payload.userName,
      userPhone: action.payload.phoneNumber,
      userAddress: action.payload.userAddress
    }),
  },
});

export const { setUserInfo } = userReducer.actions;

export default userReducer.reducer;
