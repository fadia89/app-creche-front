import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecipesContext = createContext();

export const RecipesController = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/recipes");
      setRecipes(response.data);
    } catch (err) {
      setError("Erreur lors du chargement des recettes");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <RecipesContext.Provider
      value={{recipes, setRecipes, fetchRecipes, loading, error}}
    >
      {children}
    </RecipesContext.Provider>
  );
};
