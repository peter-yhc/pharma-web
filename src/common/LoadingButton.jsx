import React from 'react';
import styles from './LoadingButton.module.scss';

const LoadingButton = ({ children, className }) => (
  <button className={[styles.button, className].join(' ')} type="button" disabled>
    <div className={styles.loadingIcon} />
    <span>{children}</span>
  </button>
);

export default LoadingButton;
