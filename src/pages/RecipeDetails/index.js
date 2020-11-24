import React, { useState, useEffect } from 'react'
// nos sirve para obtener la variable de la ruta
import { useParams } from 'react-router-dom'
import recipesAPI from '../../APIs/recipeAPI'
const RecipeDetail = () => {

  const [recipeDetail, setRecipeDetail] = useState({})

  const getRecipeDetails = async () => {
    // recipeDetail = {}
    const { data } = await recipesAPI.fetchRecipeDetail(id)
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
          <div className="pb-6 font-bold ">{recipeDetail.method?.map(prep => <p className="flex pb-6">
          <svg className="mr-2 h-6 w-6 fill-current" version="1.1" x="0px" y="0px" viewBox="0 0 408.576 408.576">
          <g>
            <g>
              <path d="M204.288,0C91.648,0,0,91.648,0,204.288s91.648,204.288,204.288,204.288s204.288-91.648,204.288-204.288    S316.928,0,204.288,0z M318.464,150.528l-130.56,129.536c-7.68,7.68-19.968,8.192-28.16,0.512L90.624,217.6    c-8.192-7.68-8.704-20.48-1.536-28.672c7.68-8.192,20.48-8.704,28.672-1.024l54.784,50.176L289.28,121.344    c8.192-8.192,20.992-8.192,29.184,0C326.656,129.536,326.656,142.336,318.464,150.528z"/>
            </g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          </svg>
            {prep}</p>) }.</div>
        </div>
        
      </main>
    </div>
  )
}

export default RecipeDetail

