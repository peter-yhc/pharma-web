/* eslint-disable prefer-destructuring */
import React, { useContext, useRef } from 'react';
import PatientContext from 'context/PatientContext';
import { savePatient } from 'api/PharmaApi';
import CreatePatientForm from './CreatePatientForm';
import styles from './NewPatientModal.module.scss';

const NewPatientModal = () => {
  const modalRef = useRef();
  const patientContext = useContext(PatientContext);

  document.addEventListener('keydown', (e) => {
    const key = e.key || e.keyCode;
    if (key === 'Escape' || key === 'Esc' || key === 27) {
      modalRef.current.classList.remove(styles.show);
    }
  });

  const showModal = (e) => {
    e.preventDefault();
    modalRef.current.classList.add(styles.show);
  };

  const handleClose = (e) => {
    e.preventDefault();
    modalRef.current.classList.remove(styles.show);
  };

  const handleCreateNewPatient = async (newPatientData) => {
    modalRef.current.classList.remove(styles.show);
    await savePatient(newPatientData);
    patientContext.reload();
  };

  return (
    <>
      <a className={styles.newPatientAction} href="/#" onClick={showModal}>
        New Patient
      </a>
      <div className={styles.modal} ref={modalRef}>
        <div className={styles.modalContent}>
          <CreatePatientForm onCancel={handleClose} onSubmit={handleCreateNewPatient} />
        </div>
      </div>
    </>
  );
};

export default NewPatientModal;
