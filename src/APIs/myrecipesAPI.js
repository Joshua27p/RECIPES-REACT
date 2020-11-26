import { URL } from './constants';
import axios from 'axios';
//Este componente fue creado para que en GET no muestre con el USERID que recetas fueron almacenadas, y POST va servirnos para
// mandar al servicio las recetas que guardemos
const myRecipesAPI = {
    getRecipe: async(userid) =>{
    console.log(userid)
    const response = await axios.get(`${URL}/recipes/user/${userid}`)
    return response
    },
    postRecipe: async(userId, recipeId) =>{
        const response = await axios.post(`${URL}/recipes/user`,{
            userId,
            recipeId,
        });
        return response;
    }   
}

export default myRecipesAPI;