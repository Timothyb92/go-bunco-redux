const axios = require('axios');

export default {
  createUser: data => {
    return axios.post('api/users', data);
  },
  verifyUser: data => {
    return axios.post(`/api/users/verify/${data.userName}`, data);
  }
};
