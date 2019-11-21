import { getPatients, savePatient } from 'api/PharmaApi';

const setAuthenticated = (isAuthenticated) => ({
  type: 'AUTHENTICATED',
  authenticated: isAuthenticated,
});

const getPatientAction = () => async (dispatch) => {
  const patients = await getPatients();
  dispatch({
    type: 'GET_PATIENTS',
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
