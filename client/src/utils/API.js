const axios = require('axios');

export default {
  createUser: data => {
    return axios.post('api/users', data);
  }
};
