import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://yesno.wtf',
});

export const getStatus = async () => {
  const { data } = await axiosInstance('/api');
  return data.answer;
};
