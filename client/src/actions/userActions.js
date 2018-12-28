import { GET_USER, VERIFY_USER } from './types';
import axios from 'axios';
import API from '../utils/API';

export const verifyUser = user => {
  const res = await axios.post(`api/users/verify/${user.userName}`, data);
  dispatch({
    type: VERIFY_USER,
    payload: userName
  });
};
