import React, { useContext, useEffect, useState } from 'react';
import { getPatients } from 'api/PharmaApi';
import AuthContext from 'authentication/AuthContext';
import PatientDataTable from 'patient/PatientDataTable';
import { PageTitle } from 'common';
import NewPatientModal from 'patient/NewPatientModal';

const PatientEditorPage = () => {
  const [patients, setPatients] = useState([]);
  const authContext = useContext(AuthContext);
  useEffect(() => {
    getPatients()
      .then((data) => {
        console.log(data);
        setPatients(data);
      })
      .catch(() => {
        authContext.setAuthenticated(false);
      });
  }, []);

  return (
    <>
      <PageTitle>Add / Edit Patient data</PageTitle>
      <PatientDataTable patients={patients} />
      <NewPatientModal />
    </>
  );
};

export default PatientEditorPage;
