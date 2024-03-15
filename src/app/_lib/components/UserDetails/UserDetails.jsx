"use client";

import { useState } from 'react';
import Image from 'next/image';
import plusIcon from '@/app/_lib/assets/svg/plus.svg';
import styles from './UserDetails.module.css';

export default function UserDetails() {
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = () => {
    e.preventDefault();
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}> Delivery Details </div>
      <form onSubmit={handleSubmit} className={styles.details}>
        <div className={styles.content}>
          <Image src={plusIcon} alt="delete" />
          <input
            type='text'
            className={styles.fieldInput}
            placeholder='Enter your Name'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div className={styles.content}>
          <Image src={plusIcon} alt="delete" />
          <input
            type="tel"
            value={phoneNumber}
            className={styles.fieldInput}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder='+91-xxxxx-xxxxx'
            required
          />
        </div>
        <div className={styles.content}>
          <Image src={plusIcon} alt="delete" />
          <textarea
            placeholder='Enter your Address'
            className={styles.fieldArea}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.fieldSubmit}>Confirm Details</button>
      </form>
    </div>
  );
}
