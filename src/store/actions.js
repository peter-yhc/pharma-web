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
      type: 'GET_PATIENTS_SUCCESS',
      patients,
    });
  }).catch(() => {
    dispatch(setAuthenticated(false));
  });
};

const savePatientAction = (patientData) => async (dispatch) => {
  dispatch({
    type: 'CREATE_PATIENT_IN_PROGRESS',
  });
  await savePatient(patientData)
    .then(() => {
      dispatch({
        type: 'CREATE_PATIENT_SUCCESS',
      });
    }).catch(() => {
      dispatch({
        type: 'CREATE_PATIENT_FAILED',
      });
    });
};

const resetPatientForm = () => ({
  type: 'CREATE_PATIENT_RESET',
});

export {
  getPatientAction,
  savePatientAction,
  setAuthenticated,
  resetPatientForm,
};
