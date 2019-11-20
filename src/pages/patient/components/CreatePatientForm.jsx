/* eslint-disable prefer-destructuring */
import React, { useEffect, useRef } from 'react';
import { Button, Input, Select } from 'common';
import styles from './CreatePatientForm.module.scss';

const CreatePatientForm = ({ onCancel, onSubmit }) => {
  const datePickerRef = useRef();

  useEffect(() => {
    datePickerRef.current.max = new Date().toISOString().split('T')[0];
  }, []);

  return (
    <form className={styles.form}>
      <h3 className={styles.title}>Personal Details</h3>
      <section className={styles.personalDetailsSection}>
        <Input className={styles.username} label="Username" />
        <Input className={styles.name} label="Name" />
        <Input className={styles.dob} type="date" label="Date of Birth" customRef={datePickerRef} />
        <Select className={styles.sex} label="Sex" defaultValue="Sex">
          <option disabled>Sex</option>
          <option>M</option>
          <option>F</option>
        </Select>
        <Input className={styles.primaryContact} label="Primary Contact #" />
        <Input className={styles.secondaryContact} label="Secondary Contact #" />
      </section>
      <h3 className={styles.title}>Location Details</h3>
      <section className={styles.locationDetailsSection}>
        <Input className={styles.address} label="Address" />
        <Input className={styles.city} label="City" />
        <Input className={styles.country} label="Country" />
        <Input className={styles.postcode} label="Postal Code" />
      </section>
      <h3 className={styles.title}>Emergency Details</h3>
      <section className={styles.emergencyContactDetails}>
        <Input className={styles.emergencyName} label="Name" />
        <Input className={styles.emergencyNumber} label="Phone Number" />
      </section>
      <div className={styles.formControls}>
        <Button onClick={onCancel}>Cancel</Button>
        <Button className={styles.submitButton} onClick={onSubmit}>Create</Button>
      </div>
    </form>
  );
};

export default CreatePatientForm;
