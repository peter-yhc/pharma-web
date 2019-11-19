/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styles from './Input.module.scss';

const Select = ({
  className, customRef, children, label, ...props
}) => (
  <div className={[styles.inputGroup, className].join(' ')}>
    <label htmlFor={customRef}>{label}</label>
    <select
      className={styles.input}
      ref={customRef}
      {...props}
    >
      {children}
    </select>
  </div>
);

export default Select;
