"use client";

import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { removeItem, decreaseQuantity, increaseQuantity } from '@/app/_store/reducers/orderReducer';
import plusIcon from '@/app/_lib/assets/svg/plus.svg';
import minusIcon from '@/app/_lib/assets/svg/minus.svg';
import deleteIcon from '@/app/_lib/assets/svg/bin.svg';
import styles from './ItemCard.module.css';

export default function ItemCard({ itemId, name, image, price, quantity}) {
  const dispatch = useDispatch();
  const removeOrderItem = () => dispatch(removeItem(itemId));
  const decreaseOrderItem = () => dispatch(decreaseQuantity(itemId));
  const increaseOrderItem = () => dispatch(increaseQuantity(itemId));

  return (
    <div className={styles.container}>
      <div className={styles.product}>
        <Image  fill={true} src={image} alt="product_image" />
      </div>
      <div className={styles.info}>
        <span className={styles.header}>{name}</span>
        <div className={styles.other}>
          <span className={styles.price}>Price per item:<b>{` $${price}`}</b></span>
          <span className={styles.quantity}>
            <Image src={minusIcon} alt="add" onClick={decreaseOrderItem} />
              <span>{quantity}</span>
            <Image src={plusIcon} alt="minus" onClick={increaseOrderItem} />
          </span>
        </div>
      </div>
      <div className={styles.right}>
        <Image src={deleteIcon} alt="delete"  onClick={removeOrderItem}/>   
      </div>
    </div>
  );
}
