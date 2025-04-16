import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";


const RecipeDetails= () => {
    const {id} = useParams()
    console.log (useParams)
    //hoock useParams() qui veint de react router

    const [recipe, setRecipe] = useState(null)
    const [loading, setLoading] = useState(true)

    const  fetchRecipeByID = async () => {
      if (!id) {
        console.error("L'ID de la recette est manquant !");
      }
        try{
            const response = await axios.get(`http://localhost:5000/api/recipe/${id}`
);

            console.log (response)
            if(response.status === 200){
                setRecipe(response.data)

            }

        }
        catch(err){
            console.log(err.response.data)
            if(err){
              alert(err.response.data)
            }
          }
        finally{
            setLoading(false)
        }
    }
    useEffect (() => {
      fetchRecipeByID()
    }, []);
    return (
      <div className="p-8 max-w-3xl mx-auto bg-white rounded-2xl shadow-xl mt-12">
        {recipe ? (
          <>
            <h1 className="text-4xl font-extrabold mb-6 text-indigo-700 text-center">
              {recipe.title}
            </h1>
    
            {recipe.image && (
              <img
                src={`http://localhost:5000${recipe.image}`}
                alt={recipe.title}
                className="w-full h-auto rounded-xl shadow-md mb-6 transition-transform duration-300 ease-in-out hover:scale-105"
              />
            )}
    
            <div className="space-y-4 text-gray-800 text-lg leading-relaxed">
              <p>
                <span className="font-semibold text-indigo-600">Description :</span>{" "}
                {recipe.description}
              </p>
    
              <p>
                <span className="font-semibold text-indigo-600">Ingrédients :</span>{" "}
                {recipe.ingredients}
              </p>
    
              <p>
                <span className="font-semibold text-indigo-600">Instructions :</span>{" "}
                {recipe.instructions}
              </p>
    
              <p>
                <span className="font-semibold text-indigo-600">Catégorie :</span>{" "}
                {recipe.category}
              </p>
    
              
              
            </div>
          </>
        ) : (
          <p className="text-red-500 text-center text-xl">Recette non trouvée.</p>
        )}
      </div>
    );
    
  }   

export default RecipeDetails
