import { URL } from './constants';
import axios from 'axios';
 //creando una función dentro de un objeto
const recipesAPI = {
  fetchRecipes: async() =>{
      const response = await axios.get(`${URL}/recipes`);
      return response;
  }
}

export default recipesAPI;
