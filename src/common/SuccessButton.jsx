import React from 'react';
import defaultButtonStyles from './Button.module.scss';
import styles from './SuccessButton.module.scss';

const SuccessButton = ({ className }) => (
  <button className={[defaultButtonStyles.button, styles.successButton, className].join(' ')} type="button" disabled>
    <i className="la la-check" />
  </button>
);

export default SuccessButton;
