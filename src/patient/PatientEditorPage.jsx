import React, { useEffect, useState } from 'react';
import withAuthentication from 'authentication/withAuthentication';
import { getPatients } from 'api/PharmaApi';

const PatientEditorPage = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    getPatients().then((data) => {
      setPatients(data);
    });
  }, []);

  console.log(patients);
  return (
    <>
      <span>Patient Page</span>
    </>
  );
};

export default withAuthentication(PatientEditorPage);
