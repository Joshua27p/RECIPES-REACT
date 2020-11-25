import { URL } from './constants';
import axios from 'axios';

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