import React from 'react';
import Button from './Button';
import styles from './LoadingButton.module.scss';

const LoadingButton = ({ children, className, variant }) => (
  <Button className={className} type="button" variant={variant}>
    <div className={styles.loadingIcon} />
    <span>{children}</span>
  </Button>
);

export default LoadingButton;
