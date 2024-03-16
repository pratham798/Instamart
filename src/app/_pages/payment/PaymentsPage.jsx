"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPaymentMethod } from "@/app/_store/reducers/orderReducer";
import upiIcon from '@/app/_lib/assets/svg/upi.svg';
import cardsIcon from '@/app/_lib/assets/svg/cards.svg';
import deliveryIcon from '@/app/_lib/assets/svg/delivery.svg';
import styles from './PaymentsPage.module.css';

export default function PaymentPage() {
  const dispatch = useDispatch();
  const payment = useSelector((state) => ({
    methods: state?.order?.paymentMethods,
    selectedMethod: state?.order?.orderPaymentMethod,
    status: state?.order?.orderStatus,
    amount: state?.order?.orderAmount,
  }));
  const paymentMethods = payment?.methods;
  const selectedPaymentMethod = payment?.selectedMethod;

  const handleSelectedOption = useCallback((method) => {
    dispatch(selectPaymentMethod(method));
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>Payment</div>
      <div className={styles.paymentWrapper}>
        <div className={styles.paymentMethods}>
          {paymentMethods.map((method) => (
            <div className={
              `${styles.method} ${styles.radioButton} ${selectedPaymentMethod === method && styles.selected}`} 
              onClick={() => handleSelectedOption(method)}
              key={method}
            >
              <Image className={styles.methodImage} src={ method === 'UPI' ? upiIcon : cardsIcon } alt="method" />
              <span>{method}</span>
            </div>
          ))}
          <div className={
            `${styles.method} ${styles.radioButton} ${selectedPaymentMethod === 'COD' && styles.selected}`} 
            onClick={() => handleSelectedOption('COD')}>
            <Image className={styles.methodImage} src={deliveryIcon} alt="delivery" />
            <span>Cash on Delivery</span>
          </div>
        </div>
        <div className={styles.paymentInfo}>
          <div className={styles.title}> Payment Details </div>
          <div className={styles.breakdown}>
            <span>Amount:</span>
            <span>${payment.amount?.toFixed(2)}</span>
          </div>
          <div className={styles.breakdown}>
            <span>Merchant Fee:</span>
            <span>$0.00</span>
          </div>
          <div className={styles.breakdown}>
            <span>Payment Mode:</span>
            <span>{selectedPaymentMethod}</span>
          </div>
          <Link href="/payment/status" className={`${styles.confirmation}`}> 
            Confirm Order
          </Link>
        </div>
      </div>
    </div>
  );
}
