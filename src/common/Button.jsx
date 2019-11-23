/* eslint-disable react/button-has-type */
import React from 'react';
import styles from './Button.module.scss';

const Button = ({
  type,
  disabled,
  className,
  children,
  onClick,
  variant,
}) => {
  let color;
  switch (variant) {
    case 'blue':
      color = styles.blue;
      break;
    case 'green':
      color = styles.green;
      break;
    default:
      color = styles.white;
  }

  return (
    <button
      className={[styles.button, className, color].join(' ')}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
