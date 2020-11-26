import { URL } from './constants';
import axios from 'axios';
// en este objeto endremos las recetas de los carts y el detallado( que va con id para diferenciarlos
// uno se mostrara en el home y el otro en el recipe-detail
//creando una función dentro de un objeto

const recipesAPI = {
  fetchRecipes: async () => {
    const response = await axios.get(`${URL}/recipes`);
    return response;
  },
  fetchRecipeDetail: async (id) => {
    const response = await axios.get(`${URL}/recipes/${id}`)
    return response;
  }
}


export default recipesAPI;
