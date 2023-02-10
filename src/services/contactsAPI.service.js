import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const postNewUser = async users => {
  const { data } = await axiosInstance.post('/users/signup', users);
  return data.answer;
};
