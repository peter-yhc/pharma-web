import React, { useContext, useEffect, useState } from 'react';
import { getPatients } from 'api/PharmaApi';
import AuthContext from 'authentication/AuthContext';
import PatientDataTable from 'patient/PatientDataTable';
import { PageTitle } from 'common';

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

  return (
    <>
      <PageTitle>Add / Edit Patient data</PageTitle>
      <PatientDataTable />
    </>
  );
};

export default PatientEditorPage;
