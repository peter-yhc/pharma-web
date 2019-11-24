import React from 'react';
import Button from './Button';
import styles from './SuccessButton.module.scss';

const SuccessButton = ({ className, variant }) => (
  <Button className={[className, styles.successButton].join(' ')} type="button" variant={variant}>
    <i className="la la-check" />
  </Button>
);

export default SuccessButton;
