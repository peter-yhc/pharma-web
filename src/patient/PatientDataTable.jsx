import React from 'react';
import styles from './PatientDataTable.module.scss';

const PatientDataTable = () => {
  console.log('tab');

  return (
    <table className={styles.patientTable}>
      <thead className={styles.patientTableHeader}>
        <tr>
          <th />
          <th>username</th>
          <th>name</th>
          <th>age</th>
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
        <tr>
          <td className={styles.iconCell}><i className="la la-pen" /></td>
          <td>Joker1</td>
          <td>Arthur Fleck</td>
          <td>42</td>
          <td>M</td>
          <td>12 Clown Street</td>
          <td>Gotham</td>
          <td>USA</td>
          <td>1000</td>
          <td>(777) 777-7777</td>
          <td />
          <td>Batman (123) 123-2133</td>
        </tr>
        <tr>
          <td className={styles.iconCell}><i className="la la-pen" /></td>
          <td>Joker1</td>
          <td>Arthur Fleck</td>
          <td>42</td>
          <td>M</td>
          <td>12 Clown Street</td>
          <td>Gotham</td>
          <td>USA</td>
          <td>1000</td>
          <td>(777) 777-7777</td>
          <td />
          <td>Batman (123) 123-2133</td>
        </tr>
      </tbody>
    </table>
  );
};

export default PatientDataTable;
