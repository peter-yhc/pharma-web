import React from 'react';
import styles from './Loading.module.scss';

const Loading = () => (
  <div className={styles.loadingContainer}>
    <div className={styles.loading} />
  </div>
);

export default Loading;
