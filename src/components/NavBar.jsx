import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const NavBar = () => {
  const { handleLogout, isAuthenticated } = useContext(AuthContext);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
       
        <div className="text-white text-xl font-bold">
          MyRecipes
        </div>

       
        <div className="flex-1 flex justify-center">
          <ul className="flex space-x-6 text-white items-center">
            <li>
              <Link to="/" className="hover:bg-indigo-500 px-3 py-2 rounded-md text-lg font-medium">
                Home
              </Link>
            </li>
            

            {!isAuthenticated ? (
              <>
                <li>
                  <Link to="/login" className="hover:bg-indigo-500 px-3 py-2 rounded-md text-lg font-medium">
                    Se connecter
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="hover:bg-indigo-500 px-3 py-2 rounded-md text-lg font-medium">
                    S'inscrire
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/addRecipe" className="hover:bg-indigo-500 px-3 py-2 rounded-md text-lg font-medium">
                    Ajouter
                  </Link>
                </li>
                <li>
                  <Link to="/profile" className="hover:bg-indigo-500 px-3 py-2 rounded-md text-lg font-medium">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/users" className="hover:bg-indigo-500 px-3 py-2 rounded-md text-lg font-medium">
                    Users
                  </Link>
                 </li>
                
                <li>
                  <button
                    onClick={handleLogout}
                    className="hover:bg-indigo-500 px-3 py-2 rounded-md text-lg font-medium text-white"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
