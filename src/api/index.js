import axios from 'axios';
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

const http = axios.create({
  baseURL: 'https://randomuser.me/api/',
  responseType: 'json',
  timeout: 10000,
});

const getUsers = async (page = 1,results = 1) => {
  try {
    return await http
      .get(`?page=${page}&results=${results}&seed=abc&inc=cell,name,location,phone,picture`, { cancelToken: source.token })
      .then((res) => res.data.results)
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('cancelled');
    } else {
      throw error;
    }
  }
};

export { getUsers };
