
import RecipeList from '@/components/ui/recipe-list'
import React from 'react'

async function ListOfRecipes(){
    try{
    const apiResponse = await fetch(`https://dummyjson.com/recipes`, {next:{revalidate:10}});
    const result = await apiResponse.json();
    return result.recipes;
    }catch(e){
        throw new Error(e);
    }
}

async function Recipes  ()  {
    const ListAllRecipes = await ListOfRecipes();
  return (
    <div className="">
        <RecipeList ListAllRecipes={ListAllRecipes}/>
        </div>
  )
}

export default Recipes