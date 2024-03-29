/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styles from './Input.module.scss';

const Input = ({
  className, customRef, label, ...props
}) => (
  <div className={[styles.inputGroup, className].join(' ')}>
    <label htmlFor={customRef}>{label}</label>
    <input
      className={styles.input}
      ref={customRef}
      {...props}
    />
  </div>
);

export default Input;
