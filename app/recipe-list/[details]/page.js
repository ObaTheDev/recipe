
import React from 'react'
import RecipeDetails from '@/components/ui/recipe-details';

async function  fetchSingleRecipe(recipeId){
  try{
    const apiResponse = await fetch(`https://dummyjson.com/recipes/${recipeId}`, {next:{revalidate: 10}});
    const result = await apiResponse.json();
    return result
  }catch(e){
    throw new Error(e)
  }
}
async function RecipeDetailsPage ({params}) {
  const Params = await params
  const getRecipe = await fetchSingleRecipe(Params.details)
  return (
    <div>
      <RecipeDetails getRecipe = {getRecipe}/>
    </div>
  )
}

export default RecipeDetailsPage