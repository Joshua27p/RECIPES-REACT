import React, { useState, useEffect, useContext } from 'react'
import recipesAPI from '../../APIs/recipeAPI'
import Banner from '../../components/Banner'
import RecipeCard from '../../components/RecipeCard'
import { SearchContext } from '../../context/index'

const Home = () => {
  //useState tiene 2 constsantes, la variable que va cambiar y la función que la cambia
  const { valueSearch } = useContext(SearchContext) 

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
         
        {recipes.filter(recipe=>(recipe.title.toUpperCase().includes(valueSearch.toUpperCase()))).map(recipe => (
          <RecipeCard key={recipe.recipeId} {...recipe} />
        ))}
      </div>
    </div>
  )
}

export default Home
