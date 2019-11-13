import ky from 'ky';

const API_HOST = 'https://3yfu0goxx7.execute-api.ap-southeast-2.amazonaws.com/dev';

const savePatient = async (patientData) => {
  const parsed = await ky.post(`${API_HOST}/patients`, { js: patientData }).json();

  console.log(parsed);
};

const getPatients = async () => ky.get(`${API_HOST}/patients`).json();

const login = async (username, password) => {
  const request = await ky.post(`${API_HOST}/login`, { js: { username, password } });
  const token = request.headers;
  localStorage.setItem('pharma.token', token);
};

export {
  getPatients,
  savePatient,
  login,
};
