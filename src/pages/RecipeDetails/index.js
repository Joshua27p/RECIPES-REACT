import React, { useState, useEffect } from 'react'
// nos sirve para obtener la variable de la ruta
import { useParams } from 'react-router-dom'
import recipesAPI from '../../APIs/recipeAPI'
const RecipeDetail = () => {

  const [recipeDetail, setRecipeDetail] = useState({})

  const getRecipeDetails = async () => {
    const { data } = await recipesAPI.fetchRecipeDetail(id)
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
      <main className="mt-10">
        <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
          <p className="pb-6">Ingredientes </p>
          {recipeDetail.ingredients.map(ingredient => <p className="pb-6"> {ingredient}</p>)}

          <p className="pb-6">Preparacion.</p>

          <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
            pasos para preparar el platisho
        </div>
          {recipeDetail.method.map(prep => <p className="pb-6">{prep}</p>)}

        </div>
      </main>


    </div>
  )
}

export default RecipeDetail

