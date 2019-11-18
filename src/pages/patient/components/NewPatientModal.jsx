import React, { useRef } from 'react';
import { Button } from 'common';
import styles from 'pages/patient/components/NewPatientModal.module.scss';

const NewPatientModal = () => {
  const modalRef = useRef();
  const handleNewPatient = (e) => {
    e.preventDefault();
    modalRef.current.classList.add(styles.show);
  };

  const handleClose = (e) => {
    e.preventDefault();
    console.log('closing')
    modalRef.current.classList.remove(styles.show);
  };

  return (
    <>
      <a className={styles.newPatientAction} href="/#" onClick={handleNewPatient}>
        New Patient
      </a>
      <div className={styles.modal} ref={modalRef}>
        <div className={styles.modalContent}>
          <p>Some text in the Modal..</p>
          <Button onClick={handleClose}>Close</Button>
        </div>
      </div>
    </>
  );
};

export default NewPatientModal;
