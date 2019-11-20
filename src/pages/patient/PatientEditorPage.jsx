import React, { useContext, useEffect } from 'react';
import PatientDataTable from 'pages/patient/components/PatientDataTable';
import { PageTitle } from 'common';
import NewPatientModal from 'pages/patient/components/NewPatientModal';
import PatientContext from 'context/PatientContext';

const PatientEditorPage = () => {
  const patientContext = useContext(PatientContext);

  useEffect(() => {
    patientContext.reload();
  }, []);

  return (
    <>
      <PageTitle>Add / Edit Patient data</PageTitle>
      <PatientDataTable patients={patientContext.data} />
      <NewPatientModal />
    </>
  );
};

export default PatientEditorPage;
