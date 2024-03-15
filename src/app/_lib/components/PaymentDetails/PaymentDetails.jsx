"use client";

import styles from './PaymentDetails.module.css';

export default function PaymentDetails({orderAmount}) {
  return (
    <div className={styles.container}>
      <div className={styles.header}> Order Summary </div>
      <div className={styles.breakdown}> 
        <span>Order Amount</span>
        <span>{`$${orderAmount}`}</span>
      </div>
      <div className={styles.breakdown}> 
        <span>Delivery Fee</span>
        <span>$15</span>
      </div>
      <div className={styles.breakdown}> 
        <span>Discount</span>
        <span>-$100</span>
      </div>
      <div className={styles.breakdown}> 
        <span>Grand Total</span>
        <span>{`Price: $${orderAmount}`}</span>
      </div>
      <div className={styles.payment}> Proceed to Payment </div>
    </div>
  );
}
