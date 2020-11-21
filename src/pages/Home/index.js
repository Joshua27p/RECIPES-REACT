import React from 'react'
import Banner from '../../components/Banner'
import RecipeCard from '../../components/RecipeCard'

const Home = () => {
  return (
    <div className="container">
      <Banner />
      <div className="flex flex-wrap justify-around pt-6">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </div>
  )
}

export default Home
