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
  savePatient(patientData)
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

const resetPatientSubmission = () => ({
  type: 'CREATE_PATIENT_INACTIVE',
});

export {
  getPatientAction,
  savePatientAction,
  setAuthenticated,
  resetPatientSubmission,
};
