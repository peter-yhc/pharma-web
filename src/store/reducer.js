const defaultState = {
  authenticated: !!localStorage.getItem('pharma.token'),
  patients: [],
  patientLoadingStatus: false,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'AUTHENTICATED':
      return {
        ...state,
        authenticated: action.authenticated,
      };
    case 'GET_PATIENTS_IN_PROGRESS':
      return {
        ...state,
        patientLoadingStatus: true,
      };
    case 'GET_PATIENTS_COMPLETE':
      return {
        ...state,
        patients: action.patients,
        patientLoadingStatus: false,
      };
    case 'CREATE_PATIENT_SUCCESS':
    default:
      return state;
  }
};

export default reducer;
