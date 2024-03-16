"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from "react-redux";
import OrderConfirm from '@/app/_lib/assets/webp/order-confirm.webp'
import ErrorState from '@/app/_lib/components/ErrorState/ErrorState';
import styles from './OrderStatus.module.css';

export default function OrderStatus() {
  const orderStatus = useSelector((state) => state?.order?.orderStatus);

  if(!orderStatus || orderStatus !== 'success') return <ErrorState />
  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <Image src={OrderConfirm} fill={true} alt="product_image" />
      </div>
      <Link href="/" replace className={styles.redirectCta}>Return to Shopping</Link>
    </div>
  );
}
