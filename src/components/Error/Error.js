import React from 'react';
import styles from './Error.module.scss';

const Error = ({txt, clearError}) => {
  return (
    <div className={styles.errorContainer}>
      {txt}
      <div onClick={clearError} className={styles.closeError}>
        X
      </div>
    </div>
  );
};

export default Error;
