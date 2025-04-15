import { useContext } from "react";
import { RecipesContext } from "../context/recipesContext";
import { FaClock, FaUser, FaUtensils } from "react-icons/fa"; // Icônes FontAwesome
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  
  const  {recipes, loading, error} = useContext(RecipesContext);
  


  // if (loading) return <p className="text-center text-lg text-indigo-600">Chargement des recettes...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <>
      <h1 className="mt-10 text-center text-4xl font-bold tracking-tight text-gray-900">
        Bienvenue sur notre site de recette !
      </h1>

      <div className="flex justify-center flex-wrap p-7 m-7">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
       
          {recipes.map((recipe) => (
             <Link to={`/recipe/${recipe._id}`}>
            <div key={recipe._id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{recipe.title}</h2>
              <p className="text-gray-600 mb-2">{recipe.description}</p>
              
              <div className="flex items-center text-gray-600 mb-2">
                <FaUser className="mr-2 text-indigo-500" />
                <span>Créé par : {recipe.user_Id ? recipe.user_Id.username || "Utilisateur inconnu" : "Anonyme"}</span>
              </div>

              <div className="flex items-center text-gray-600 mb-2">
                <FaUtensils className="mr-2 text-indigo-500" />
                <span>Catégorie : {recipe.category}</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <div className="flex items-center">
                  <FaClock className="mr-2 text-indigo-500" />
                  <span>Préparation : {recipe.preparation_Time} min</span>
                </div>
                <div className="flex items-center">
                  <FaClock className="mr-2 text-indigo-500" />
                  <span>Cuisson : {recipe.cooking_Time} min</span>
                </div>
              </div>
            </div>
          </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
