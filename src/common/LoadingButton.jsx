import React from 'react';
import defaultButtonStyle from './Button.module.scss';
import styles from './LoadingButton.module.scss';

const LoadingButton = ({ children, className }) => (
  <button className={[defaultButtonStyle.button, className].join(' ')} type="button" disabled>
    <div className={styles.loadingIcon} />
    <span>{children}</span>
  </button>
);

export default LoadingButton;
