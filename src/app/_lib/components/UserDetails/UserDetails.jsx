"use client";

import { useState } from 'react';
import { useDispatch } from "react-redux";
import Image from 'next/image';
import { setUserInfo } from '@/app/_store/reducers/userReducer';
import plusIcon from '@/app/_lib/assets/svg/plus.svg';
import styles from './UserDetails.module.css';

export default function UserDetails() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    userName: '',
    phoneNumber: '',
    userAddress: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateFormData(formData);

    if (Object.keys(errors).length === 0) {
      dispatch(setUserInfo(formData));
      setFormErrors({});
    } else {
      setFormErrors(errors);
    }
  }

  const validateFormData =  (data) => {
    const errors = {};
    // Validate phone number
    const phoneNumberRegex = /^\d{10}$/;
    if (!phoneNumberRegex.test(data.phoneNumber)) {
      errors.phoneNumber = 'Phone number must be 10 digits';
    }
    return errors;
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
            placeholder='Enter your name in alphabets'
            name="userName"
            pattern="[A-Za-z ]*"
            value={formData.userName}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.content}>
          <Image src={plusIcon} alt="delete" />
          <div className={styles.formBoundary}>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              className={`${styles.fieldInput} ${formErrors.phoneNumber && styles.fieldError}`}
              onChange={handleChange}
              placeholder='+91-xxx-xxx-xxxx'
              pattern="[0-9]*"
              required
            />
            {formErrors.phoneNumber && (<span className={styles.error}>{formErrors.phoneNumber}</span>)}
          </div>
        </div>
        <div className={styles.content}>
          <Image src={plusIcon} alt="delete" />
          <textarea
            placeholder='Enter your Address'
            className={styles.fieldArea}
            name="userAddress"
            value={formData.userAddress}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.fieldSubmit}>Confirm Details</button>
      </form>
    </div>
  );
}
