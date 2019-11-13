import React from 'react';
import styles from './Input.module.scss';

const Input = ({ type, placeholder, onChange }) => (
  <input className={styles.input} type={type} onChange={onChange} placeholder={placeholder}/>
);

export default Input;
