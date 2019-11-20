import React, { useEffect } from 'react';
import PatientDataTable from 'pages/patient/components/PatientDataTable';
import { PageTitle } from 'common';
import NewPatientModal from 'pages/patient/components/NewPatientModal';
import { getPatientAction } from 'store/actions';
import { useDispatch, useSelector } from 'react-redux';

const PatientEditorPage = () => {
  const patients = useSelector((state) => state.patients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPatientAction());
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
