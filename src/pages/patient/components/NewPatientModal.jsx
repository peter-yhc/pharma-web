/* eslint-disable prefer-destructuring */
import React, { useRef } from 'react';
import { getPatientAction, savePatientAction } from 'store/actions';
import { useDispatch } from 'react-redux';
import CreatePatientForm from './CreatePatientForm';
import styles from './NewPatientModal.module.scss';

const NewPatientModal = () => {
  const modalRef = useRef();
  const dispatch = useDispatch();

  document.addEventListener('keydown', (e) => {
    const key = e.key || e.keyCode;
    if ((key === 'Escape' || key === 'Esc' || key === 27) && modalRef.current) {
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
    await dispatch(savePatientAction(newPatientData));
    await dispatch(getPatientAction());
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
