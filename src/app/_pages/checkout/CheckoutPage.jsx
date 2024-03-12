"use client";

import { useDispatch, useSelector } from "react-redux";


export default function CheckoutPage() {
  const cart = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  return (
    <div>
      {cart}
    </div>
  );
}
