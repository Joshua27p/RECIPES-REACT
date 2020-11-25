import React, { useContext, useState, useEffect } from 'react'
import myRecipesAPI from '../../APIs/myrecipesAPI';
import RecipeCard from '../../components/RecipeCard';
import { UserContext } from '../../context';
 
  
  const MyRecipes = () => {
  const userObject = useContext(UserContext);
  const userParse = JSON.parse(userObject.user);
  const usuarioId = userParse.userId
  const [myRecipeStorage, setMyrecipes] = useState([]);
  

  const getMyRecipes = async (id) => {
    const { data } = await myRecipesAPI.getRecipe(id)
    // console.log(data)
    setMyrecipes(data.recipes)
  }

  useEffect(() => {
    console.log(usuarioId)
    getMyRecipes(usuarioId)
  }, [])

  return (
    <div className='container'>
        <div>
          {myRecipeStorage.map((myRecipe)=>(<RecipeCard key={myRecipe.recipeId} {...myRecipe} />) )}        
        </div> 

     </div>
     )
 }
 export default MyRecipes;