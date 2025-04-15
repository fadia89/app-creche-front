import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const RecipesContext = createContext(null)


export const RecipesController = ({children}) => {
    const [recipes, setRecipes] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const fetchRecipes = async () => {
    
    try{
        const response = await axios.get('http://localhost:5000/api/recipes')
        // console.log(response)
        if(response.status === 200){
            setRecipes(response.data)
        }
    }
    catch(err)
    {

    }
    finally{
        setLoading(false)
    }
    }

    useEffect(() => {
        fetchRecipes()
    }, [])


    return(
        <RecipesContext.Provider value={{recipes, setRecipes, fetchRecipes}}>
            {!loading && children}
        </RecipesContext.Provider>
    )
}