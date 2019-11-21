import { getPatients, savePatient } from 'api/PharmaApi';

const setAuthenticated = (isAuthenticated) => {
  if (!isAuthenticated) {
    localStorage.removeItem('pharma.token');
  }

  return {
    type: 'AUTHENTICATED',
    authenticated: isAuthenticated,
  };
};

const getPatientAction = () => async (dispatch) => {
  dispatch({
    type: 'GET_PATIENTS_IN_PROGRESS',
  });
  getPatients().then((patients) => {
    dispatch({
      type: 'GET_PATIENTS_COMPLETE',
      patients,
    });
  }).catch(() => {
    dispatch(setAuthenticated(false));
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
