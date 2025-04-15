import './index.css';
import React from 'react';
import { Link } from 'react-router-dom';

function App() {

  

  return (
    <>
    <h1>Recipe App</h1>
    {/* Lien vers la recette détaillée avec l'ID */}
    <Link to={`/recipe/${recipe._id}`}>
      <div key={recipe._id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow hover:bg-gray-50 cursor-pointer">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{recipe.title}</h2>
        <p className="text-gray-600 mb-2 line-clamp-2">{recipe.description}</p>
      </div>
    </Link>
  </>
      
  )
}

export default App
