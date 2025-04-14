import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import axios from "axios";
import { RecipesContext } from "../context/recipesContext";

const AddRecipe = () => {
  let navigate = useNavigate()
  const {isAuthenticated, tokenStorage} = useContext(AuthContext)
  const {fetchRecipes} = useContext(RecipesContext)

  useEffect(() => {
    if(!isAuthenticated){
      navigate('/login')
    }
  }, [])

    const [infoRecipe, setinfoRecipe] = useState({
      title : '',
      description : '',
      ingredients : '',
      instructions : '',
      preparation_Time : '',
      cooking_Time : '',
      servings : '',
      category : 'Entrée',
    });
    

  const handleAddRecipe = async (e) => {
    e.preventDefault() 

    try{
      const newRecipe = await axios.post('http://localhost:8000/api/recipes', infoRecipe,{
        headers: {
            'Authorization' : `Bearer ${tokenStorage}`
        }
    })
      console.log(newRecipe)
      if(newRecipe.status === 201){
        alert(newRecipe.data)
        navigate('/')
      }
    }
    catch(err){
      console.log(err)
      if(err){
        alert(err)
      }
    }
    finally{
      fetchRecipes()
    }
  }

  return(
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
        Ajouter une recette
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={handleAddRecipe} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-900">
            Nom de la recette
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="title"
              id="title"
              required
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              onChange={(e) => setinfoRecipe({...infoRecipe,title : e.target.value})}
            />
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-900">
            Description
          </label>
          <div className="mt-2">
            <textarea
              name="description"
              id="description"
              required
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              onChange={(e) => setinfoRecipe({...infoRecipe,description : e.target.value})}
            />
          </div>
        </div>

        <div>
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-900">
            Ingrédients
          </label>
          <div className="mt-2">
            <div className="flex space-x-4">
              <input
                type="text"
                name="ingredient_name"
                id="ingredients"
                required
                placeholder="Nom des ingrédients"
                className="block w-1/2 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                onChange={(e) => setinfoRecipe({...infoRecipe,ingredients : e.target.value})}
              />
            </div>
          </div>
        </div>
            

        <div>
          <label htmlFor="instructions" className="block text-sm font-medium text-gray-900">
            Instructions
          </label>
          <div className="mt-2">
            <div className="flex space-x-4">
              <input
                type="text"
                name="instruction"
                id="instructions"
                placeholder="Instructions"
                className="block w-3/4 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                onChange={(e) => setinfoRecipe({...infoRecipe,instructions : e.target.value})}
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="preparationTime" className="block text-sm font-medium text-gray-900">
            Temps de préparation
          </label>
          <input
            type="text"
            name="preparationTime"
            id="preparation_Time"
            required
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
            onChange={(e) => setinfoRecipe({...infoRecipe,preparation_Time : e.target.value})}
          />
        </div>

        <div>
          <label htmlFor="cookingTime" className="block text-sm font-medium text-gray-900">
            Temps de cuisson
          </label>
          <input
            type="number"
            name="cookingTime"
            id="cooking_Time"
            required
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
            onChange={(e) => setinfoRecipe({...infoRecipe,cooking_Time : e.target.value})}
          />
        </div>

        <div>
          <label htmlFor="servings" className="block text-sm font-medium text-gray-900">
            Nombre de portions
          </label>
          <input
            type="number"
            name="servings"
            id="servings"
            required
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
            onChange={(e) => setinfoRecipe({...infoRecipe,servings : e.target.value})}
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-900">
            Catégorie
          </label>
          <select
            name="category"
            id="category"
            required
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
            onChange={(e) => setinfoRecipe({...infoRecipe,category : e.target.value})}
          >
            <option value="Entrée">Entrée</option>
            <option value="Plat principal">Plat principal</option>
            <option value="Dessert">Dessert</option>
          </select>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Ajouter la recette
          </button>
        </div>
      </form>
    </div>
  </div>

  )

}


export default AddRecipe