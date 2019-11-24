import ActionStatus from 'store/ActionStatus';

const defaultState = {
  authenticated: !!localStorage.getItem('pharma.token'),
  patients: [],
  patientLoading: false,
  patientSubmitting: ActionStatus.inactive,
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
        patientLoading: true,
      };
    case 'GET_PATIENTS_SUCCESS':
      return {
        ...state,
        patients: action.patients,
        patientLoading: false,
      };
    case 'CREATE_PATIENT_IN_PROGRESS':
      return {
        ...state,
        patientSubmitting: ActionStatus.inprogress,
      };
    case 'CREATE_PATIENT_SUCCESS':
      return {
        ...state,
        patientSubmitting: ActionStatus.success,
      };
    case 'CREATE_PATIENT_RESET':
      return {
        ...state,
        patientSubmitting: ActionStatus.clean,
      };
    default:
      return state;
  }
};

export default reducer;
