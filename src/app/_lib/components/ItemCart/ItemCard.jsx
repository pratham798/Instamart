"use client";

import Image from 'next/image';
import plusIcon from '@/app/_lib/assets/svg/plus.svg';
import minusIcon from '@/app/_lib/assets/svg/minus.svg';
import deleteIcon from '@/app/_lib/assets/svg/bin.svg';
import styles from './ItemCard.module.css';

export default function ItemCard({ name, image, price, quantity}) {
  return (
    <div className={styles.container}>
      <div className={styles.product}>
        <Image  fill={true} src={image} alt="product_image" />
      </div>
      <div className={styles.info}>
        <span>{name}</span>
        <span className={styles.price}>{`Price: ${price} $`}</span>
      </div>
      <div className={styles.right}>
        <Image src={deleteIcon} alt="delete" />   
      </div>
    </div>
  );
}
