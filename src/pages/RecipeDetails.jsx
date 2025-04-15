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
      <div className="p-6">
        {recipe ? (
          <>
            <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
            <p className="mb-2">{recipe.description}</p>
            <p><strong>Ingrédients :</strong> {recipe.ingredients}</p>
            <p><strong>Instructions :</strong> {recipe.instructions}</p>
            <p><strong>Catégorie :</strong> {recipe.category}</p>
            
            <div>
              <strong>Étapes :</strong>
              <ul>
                {recipe.step && recipe.step.length > 0 ? (
                  recipe.step.map((step, index) => (
                    <li key={index}>{step}</li> 
                  ))
                ) : (
                  <p>Aucune étape définie.</p> 
                )}
              </ul>
            </div>
          </>
        ) : (
          <p>Recette non trouvée.</p> 
        )}
      </div>
    );
    
};

export default RecipeDetails
