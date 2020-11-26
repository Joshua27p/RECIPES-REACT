import { URL } from './constants';
import axios from 'axios';
//AuthAPI es la autenticacion, donde utilizamos axios para llamar al servicio y hacer un POST del LOGIN y del REGISTER
// Login va bucar  lo parametros username y pasword, y register va guardar Username Password y name
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
