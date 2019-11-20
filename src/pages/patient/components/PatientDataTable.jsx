import React from 'react';
import styles from 'pages/patient/components/PatientDataTable.module.scss';

const PatientDataTable = ({ patients }) => {
  console.log('table', patients)
  const renderPatientData = () => {
    patients.map((patient) => (
      <tr>
        <td className={styles.iconCell}><i className="la la-pen" /></td>
        <td>{patient.username}</td>
        <td>{patient.name}</td>
        <td>{patient.dob}</td>
        <td>{patient.sex}</td>
        <td>{patient.address}</td>
        <td>{patient.city}</td>
        <td>{patient.country}</td>
        <td>{patient.postalCode}</td>
        <td>{patient.phone1}</td>
        <td>{patient.phone2}</td>
        <td>{`${patient.emergencyContact} ${patient.emergencyNumber}`}</td>
      </tr>
    ));
  };

  return (
    <section>
      <table className={styles.patientTable}>
        <thead className={styles.patientTableHeader}>
          <tr>
            <th />
            <th>username</th>
            <th>name</th>
            <th>date of birth</th>
            <th>sex</th>
            <th>address</th>
            <th>city</th>
            <th>country</th>
            <th>postal code</th>
            <th>primary #</th>
            <th>secondary #</th>
            <th>emergency contact</th>
          </tr>
        </thead>
        <tbody className={styles.patientTableBody}>
          {renderPatientData()}
        </tbody>
      </table>
    </section>
  );
};

export default PatientDataTable;
