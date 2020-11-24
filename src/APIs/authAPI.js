import { URL } from './constants';
import axios from 'axios';

const authAPI = {
  login: async (username, password) => {
    const response = await axios.post(`${URL}/user/login`, {  
        username,
        password,
    });
    return response;
  },
  register: async (username, password, name) => {
    const response = await axios.post(`${URL}/user/register`,{
        user:{
            username,
            password,
            name,
        }
    });
    return response;
  }
 
}


export default authAPI;
