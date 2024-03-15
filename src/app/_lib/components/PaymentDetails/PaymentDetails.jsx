"use client";

import { useSelector } from "react-redux";
import styles from './PaymentDetails.module.css';

export default function PaymentDetails({orderAmount}) {
  const userData = useSelector((state) => ({
    userName: state?.userInfo?.userName,
    userNumber: state?.userInfo?.userPhone,
    userAddress: state?.userInfo?.userAddress,
  }));

  const userDataFilled = userData?.userName && userData?.userNumber && userData?.userAddress;

  return (
    <div className={styles.container}>
      <div className={styles.header}> Order Summary </div>
      <div className={styles.breakdown}> 
        <span>Order Amount</span>
        <span>{`$${orderAmount}`}</span>
      </div>
      <div className={styles.breakdown}> 
        <span>Delivery Fee</span>
        <span>+$15</span>
      </div>
      <div className={styles.breakdown}> 
        <span>Grand Total</span>
        <span>{`Price: $${parseFloat(orderAmount) + 15}`}</span>
      </div>
      <div className={`${styles.payment} ${!userDataFilled && styles.disabled}`}> 
        Proceed to Payment
      </div>
    </div>
  );
}
