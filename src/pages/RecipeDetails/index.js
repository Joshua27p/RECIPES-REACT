import React, { useState, useEffect } from 'react'
// nos sirve para obtener la variable de la ruta
import { useParams } from 'react-router-dom'
import recipesAPI from '../../APIs/recipeAPI'
 

const RecipeDetail = () => {
  
  const [recipeDetail, setRecipeDetail] = useState({})

  const getRecipeDetails = async () => {
    // recipeDetail = {}
    const { data } =g await recipesAPI.fetchRecipeDetail(id)
    //
    console.log(data)
    setRecipeDetail(data.recipe)
  }
  useEffect(() => {
    getRecipeDetails()
  }, [])


  // destructuramos la variable y obtenemos el id de cada objeto
  const { id } = useParams()
  return (

    <div className="max-w-screen-xl mx-auto">
      <h1 className="md:text-5xl flex justify-center text-gray-900 font-bold">
        {recipeDetail.title} </h1>
      <div className="flex justify-center">
        <img className="my-10 w-2/4" src={recipeDetail.img} alt="" href="/#"/>
       </div>
      <main className="mt-10">
        <div className="border-t-2 border-b-2 px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
          <p className="pb-6 font-bold md:text-2xl">Ingredients </p>
            {recipeDetail.ingredients?.map(ingredient => <p className="pb-6"> - {ingredient}</p>) }
        </div>
        <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
          <p className="pb-6 md:text-2xl font-bold">Directions </p>
          <div className="pb-6 font-bold ">{recipeDetail.method?.map(prep => <p className="flex pb-6">     {prep}</p>) }.</div>
        </div>
        
      </main>
    </div>
  )
}

export default RecipeDetail

