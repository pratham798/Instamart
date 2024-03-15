"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderData } from "@/app/_store/reducers/orderReducer";

import ItemCard from "@/app/_lib/components/ItemCart/ItemCard";
import styles from './CheckoutPage.module.css';
import EmptyCart from "@/app/_lib/components/EmptyCart/EmptyCart";
import UserDetails from "@/app/_lib/components/UserDetails/UserDetails";

export default function CheckoutPage() {
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(fetchOrderData());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const orderDetails = useSelector((state) => state.order.orderItems)

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
      <div className={styles.right}></div>
    </div>
  );
}
