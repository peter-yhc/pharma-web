import React, { useContext, useEffect, useState } from 'react';
import { getPatients } from 'api/PharmaApi';
import AuthContext from 'authentication/AuthContext';

const PatientEditorPage = () => {
  const [patients, setPatients] = useState([]);
  const authContext = useContext(AuthContext);
  useEffect(() => {
    getPatients()
      .then((data) => {
        setPatients(data);
      })
      .catch(() => {
        authContext.setAuthenticated(false);
      });
  }, []);

  console.log(patients);
  return (
    <>
      <span>Patient Page</span>
    </>
  );
};

export default PatientEditorPage;
