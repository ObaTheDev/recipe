import React from 'react'
import Link from 'next/link'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
const RecipeList = ({ListAllRecipes}) => {
  return (
    <div>
        <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
            <h2 className="text-4xl font-bold dark:text-yellow-800 text-gray-800 mb-2">Recipes</h2>
            <div className="mb-10 text-blue-700"><Link href={'/'} className='mb-12'>Go to Home</Link></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {ListAllRecipes && ListAllRecipes.length > 0 ? ListAllRecipes.map(recipe => 
                <Link key={recipe.id} href={`/recipe-list/${recipe.id}`}>
                <Card className={`hover:scale-[1.1] transition-all`}>
                    <CardContent className="bg-white  dark:bg-[#212121] overflow-hidden shadow-md cursor-pointer ">
                        <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                            <img key={recipe.id} src={recipe.image}
                                alt = {recipe.name}
                                className='h-full w-full object-cover object-top'
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg text-center font-bold dark:text-amber-100 text-gray-900">{recipe.name}</h3>
                        </div>
                        <div className="mt-2 flex items-center flex-wrap gap-2">
                            <p className="text-lg dark:text-amber-50 text-gray-600">Rating: {recipe.rating}</p>
                            <div className="ml-auto ">
                            <p className="text-lg dark:text-amber-50 text-gray-600 font-bold">{recipe.cuisine}</p>
                        </div>
                        </div>
                        
                        
                    </CardContent>
                </Card>
                </Link>) : null}
            </div>
        </div>
    </div>
  )
}

export default RecipeList