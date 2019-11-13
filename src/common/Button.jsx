/* eslint-disable react/button-has-type */
import React from 'react';
import styles from './Button.module.scss';

const Button = ({
  type,
  disabled,
  className,
  children,
}) => (
  <button className={[styles.button, className].join(' ')} type={type} disabled={disabled}>
    {children}
  </button>
);

export default Button;
