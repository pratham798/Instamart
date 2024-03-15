"use client";

import Image from 'next/image';
import Link from 'next/link';
import ErrorWeb from '@/app/_lib/assets/webp/website-error.webp'
import styles from './ErrorState.module.css';

export default function ErrorState() {
  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <Image src={ErrorWeb} fill={true} alt="product_image" />
      </div>
      <div className={styles.footer}> Something went wrong please retry again </div>
      <Link href="/" replace className={styles.redirectCta}>Return to Checkout</Link>
    </div>
  );
}
