import React, { useState, useEffect } from 'react'
import recipesAPI from '../../APIs/recipeAPI'
import Banner from '../../components/Banner'
import RecipeCard from '../../components/RecipeCard'
 

const Home = () => {
  //useState tiene 2 constsantes, la variable que va cambiar y la función que la cambia
  const [recipes, setRecipes] = useState([])

  const getRecipes = async () => {
    const { data } = await recipesAPI.fetchRecipes()
    // console.log(data.recipes)
    setRecipes(data.recipes)
  }

  useEffect(() => {
    getRecipes()
  }, [])

  return (
    <div className="container">
      <Banner />
   
      <div className="flex flex-wrap justify-around pt-6">
        {recipes.map(recipe => (
          <RecipeCard key={recipe.recipeId} {...recipe} />
        ))}
      </div>
     
    </div>
  )
}

export default Home
