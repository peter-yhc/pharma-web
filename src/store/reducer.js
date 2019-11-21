const defaultState = {
  authenticated: false,
  patients: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'AUTHENTICATED':
      return {
        ...state,
        authenticated: action.authenticated,
      };
    case 'GET_PATIENTS':
      return {
        ...state,
        patients: action.patients,
      };
    case 'CREATE_PATIENT_SUCCESS':
    default:
      return state;
  }
};

export default reducer;
