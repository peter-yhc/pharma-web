import React, { useEffect } from 'react';
import PatientDataTable from 'pages/patient/components/PatientDataTable';
import { PageTitle } from 'common';
import NewPatientModal from 'pages/patient/components/NewPatientModal';
import { getPatientAction } from 'store/actions';
import { useDispatch, useSelector } from 'react-redux';
import Loading from 'common/Loading';

const PatientEditorPage = () => {
  const patients = useSelector((state) => state.patients);
  const isLoading = useSelector((state) => state.patientLoadingStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPatientAction());
  }, []);

  return (
    <>
      <PageTitle>Add / Edit Patient data</PageTitle>
      {
        isLoading && patients.length === 0
          ? <Loading />
          : (
            <>
              <NewPatientModal />
              <PatientDataTable patients={patients} />
            </>
          )
      }
    </>
  );
};

export default PatientEditorPage;
