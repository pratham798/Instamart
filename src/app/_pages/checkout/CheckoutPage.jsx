"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderData } from "@/app/_store/reducers/orderReducer";

import ItemCard from "@/app/_lib/components/ItemCart/ItemCard";
import styles from './CheckoutPage.module.css';
import EmptyCart from "@/app/_lib/components/EmptyCart/EmptyCart";
import UserDetails from "@/app/_lib/components/UserDetails/UserDetails";
import PaymentDetails from "@/app/_lib/components/PaymentDetails/PaymentDetails";

export default function CheckoutPage() {
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(fetchOrderData());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const order = useSelector((state) => ({
    orderItems: state?.order?.orderItems,
    orderAmount: state?.order?.orderAmount?.toFixed(2)
  }));

  const orderDetails = order?.orderItems;

  return (
    <div className={styles.checkoutContainer}>
      <div className={styles.left}>
        {orderDetails?.length > 0 && <UserDetails />}
        <div className={styles.cartWrapper}>
          <div className={styles.cartHeader}>Shopping Cart</div>
          <div className={styles.cart}>
            {orderDetails?.length > 0 ? (
              orderDetails?.map((order) => {
                return(
                  <ItemCard 
                    key={order.id}
                    name={order.title}
                    image={order.image}
                    price={order.price}
                    quantity={order.quantity}
                  />
                );
              })) : (
                <EmptyCart />
              )
            }
          </div>
        </div>
      </div>
      {orderDetails?.length > 0 && <PaymentDetails orderAmount={order?.orderAmount}/>}
    </div>
  );
}
