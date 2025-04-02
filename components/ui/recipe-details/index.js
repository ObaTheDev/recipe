import React from 'react'
import Link from 'next/link';

const RecipeDetails = ({getRecipe}) => {
  return (
    <div>
           
      <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
      <div className="mb-10 text-emerald-700"><Link href={'/recipe-list'} className='mb-12'>Go to Recipe List</Link></div>
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="w-full lg:sticky top-o sm:flex gap-2">
            <img src={getRecipe.image} 
            alt={getRecipe.name} 
            className='w-4/5 rounded object cover'/>
          </div>
          <div className="">
            <h2 className="text-3xl font-extrabold dark:text-cyan-100 text-gray-950">{getRecipe.name}</h2>
            <div className=" gap-4 mt-5">
              <p className="text-2xl  text-gray-700 dark:text-cyan-100">{getRecipe.mealType[0]}</p>
              <div className="mt-5">
            <p className="text-xl text-gray-800 dark:text-cyan-100">{getRecipe.cuisine}</p>
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-bold dark:text-cyan-100 text-gray-700">Ingredients</h3>
            <ul className="space-y-3 list-disc mt-4 pl-4 text-sm dark:text-cyan-100 text-gray-700">
              {getRecipe.ingredients.map(item=> <li key={item.id}> {item}</li>)}
              
            </ul>
          </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default RecipeDetails;