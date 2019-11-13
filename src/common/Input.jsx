import React from 'react';
import styles from './Input.module.scss';

const Input = ({
  type, placeholder, onChange, required,
}) => (
  <input className={styles.input} type={type} onChange={onChange} placeholder={placeholder} required={required} />
);

export default Input;
