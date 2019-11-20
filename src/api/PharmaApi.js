import axios from 'axios';

const API_HOST = 'https://y3fze98q5l.execute-api.ap-southeast-2.amazonaws.com/dev';

const savePatient = async (patientData) => {
  await axios({
    method: 'post',
    url: `${API_HOST}/patients`,
    headers: { Authorization: localStorage.getItem('pharma.token') },
    responseType: 'json',
    data: patientData,
  });
};

const getPatients = async () => {
  const result = await axios({
    method: 'get',
    url: `${API_HOST}/patients`,
    headers: { Authorization: localStorage.getItem('pharma.token') },
    responseType: 'json',
  });
  return result.data.patients;
};

const adminSignup = async ({
  username, password, repeatPassword, email,
}) => axios.post(`${API_HOST}/signup`, {
  username, password, repeatPassword, email,
});

const adminLogin = async (username, password) => {
  const response = await axios.post(`${API_HOST}/login`, { username, password });
  const token = response.headers['x-amzn-remapped-authorization'];
  localStorage.setItem('pharma.token', token);
};

export {
  getPatients,
  savePatient,
  adminLogin,
  adminSignup,
};
