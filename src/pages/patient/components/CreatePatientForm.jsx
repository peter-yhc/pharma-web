/* eslint-disable prefer-destructuring */
import React, { useEffect, useRef, useState } from 'react';
import {
  Button, Input, LoadingButton, Select,
} from 'common';
import { useDispatch, useSelector } from 'react-redux';
import { resetPatientSubmission, savePatientAction } from 'store/actions';
import ActionStatus from 'store/ActionStatus';
import SuccessButton from 'common/SuccessButton';
import styles from './CreatePatientForm.module.scss';

const CreatePatientForm = ({ onCancel, onSuccess }) => {
  const datePickerRef = useRef();
  const [patientData, updatePatientData] = useState({});
  const dispatch = useDispatch();
  const patientSubmitting = useSelector((state) => state.patientSubmitting);

  useEffect(() => {
    datePickerRef.current.max = new Date().toISOString().split('T')[0];
  }, []);

  useEffect(() => {
    if (patientSubmitting === ActionStatus.success) {
      setTimeout(() => {
        onSuccess();
      }, 500);
    }
  }, [patientSubmitting]);

  const handleFieldUpdate = (field) => (e) => {
    updatePatientData({
      ...patientData,
      [field]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(savePatientAction(patientData));
    setTimeout(() => {
      dispatch(resetPatientSubmission());
    }, 500);
  };

  const renderActionButton = () => {
    switch (patientSubmitting) {
      case ActionStatus.inprogress:
        return <LoadingButton className={styles.commonButtonStyle}>Submitting</LoadingButton>;
      case ActionStatus.success:
        return <SuccessButton className={styles.commonButtonStyle} />;
      default:
        return <Button className={[styles.submitButton, styles.commonButtonStyle].join(' ')} onClick={handleSubmit}>Create</Button>;
    }
  };

  return (
    <form className={styles.form}>
      <h3 className={styles.title}>Personal Details</h3>
      <section className={styles.personalDetailsSection}>
        <Input className={styles.username} label="Username" onChange={handleFieldUpdate('username')} />
        <Input className={styles.name} label="Name" onChange={handleFieldUpdate('name')} />
        <Input className={styles.dob} type="date" label="Date of Birth" customRef={datePickerRef} onChange={handleFieldUpdate('dob')} />
        <Select className={styles.sex} label="Sex" defaultValue="Sex" onChange={handleFieldUpdate('sex')}>
          <option disabled>Sex</option>
          <option>M</option>
          <option>F</option>
        </Select>
        <Input className={styles.primaryContact} label="Primary Contact #" onChange={handleFieldUpdate('phone1')} />
        <Input className={styles.secondaryContact} label="Secondary Contact #" onChange={handleFieldUpdate('phone2')} />
      </section>
      <h3 className={styles.title}>Location Details</h3>
      <section className={styles.locationDetailsSection}>
        <Input className={styles.address} label="Address" onChange={handleFieldUpdate('address')} />
        <Input className={styles.city} label="City" onChange={handleFieldUpdate('city')} />
        <Input className={styles.country} label="Country" onChange={handleFieldUpdate('country')} />
        <Input className={styles.postcode} label="Postal Code" onChange={handleFieldUpdate('postalCode')} />
      </section>
      <h3 className={styles.title}>Emergency Details</h3>
      <section className={styles.emergencyContactDetails}>
        <Input className={styles.emergencyName} label="Name" onChange={handleFieldUpdate('emergencyContact')} />
        <Input className={styles.emergencyNumber} label="Phone Number" onChange={handleFieldUpdate('emergencyNumber')} />
      </section>
      <div className={styles.formControls}>
        <Button onClick={onCancel}>Cancel</Button>
        {
          renderActionButton()
        }
      </div>
    </form>
  );
};

export default CreatePatientForm;
