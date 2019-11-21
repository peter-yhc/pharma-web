import { getPatients, savePatient } from 'api/PharmaApi';

const setAuthenticated = (isAuthenticated) => ({
  type: 'AUTHENTICATED',
  authenticated: isAuthenticated,
});

const getPatientAction = () => async (dispatch) => {
  dispatch({
    type: 'GET_PATIENTS_IN_PROGRESS',
  });
  const patients = await getPatients();
  dispatch({
    type: 'GET_PATIENTS_COMPLETE',
    patients,
  });
};

const savePatientAction = (patientData) => async (dispatch) => {
  await savePatient(patientData);
  dispatch({
    type: 'CREATE_PATIENT_SUCCESS',
  });
};

export {
  getPatientAction,
  savePatientAction,
  setAuthenticated,
};
