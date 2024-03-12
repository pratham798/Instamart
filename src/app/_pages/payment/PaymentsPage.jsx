"use client";

import { useDispatch, useSelector } from "react-redux";


export default function PaymentPage() {
  const paymentMethods = useSelector((state) => state.cart.paymentMethods);

  const dispatch = useDispatch();

  return (
    <div>
      {paymentMethods}
    </div>
  );
}