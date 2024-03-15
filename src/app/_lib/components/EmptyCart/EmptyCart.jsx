"use client";

import Image from 'next/image';
import CartEmpty from '@/app/_lib/assets/webp/empty-cart.webp'
import styles from './EmptyCart.module.css';

export default function EmptyCart() {
  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <Image src={CartEmpty} fill={true} alt="product_image" />
      </div>
      <div className={styles.footer}> Your Cart is Empty </div>
    </div>
  );
}
