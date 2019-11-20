/* eslint-disable prefer-destructuring */
import React, { useEffect, useRef, useState } from 'react';
import { Button, Input, Select } from 'common';
import styles from './CreatePatientForm.module.scss';

const CreatePatientForm = ({ onCancel, onSubmit }) => {
  const datePickerRef = useRef();
  const [patientData, updatePatientData] = useState({});

  useEffect(() => {
    datePickerRef.current.max = new Date().toISOString().split('T')[0];
  }, []);

  const handleFieldUpdate = (field) => (e) => {
    updatePatientData({
      ...patientData,
      [field]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(patientData);
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
        <Button className={styles.submitButton} onClick={handleSubmit}>Create</Button>
      </div>
    </form>
  );
};

export default CreatePatientForm;
