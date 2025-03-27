import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-center items-center w-full">
        <ul className="flex space-x-6 text-white">
          <li>
            <Link to="/" className="hover:bg-blue-500 px-3 py-2 rounded-md text-lg font-medium">Home</Link>
          </li>
          <li>
            <Link to="/login" className="hover:bg-blue-500 px-3 py-2 rounded-md text-lg font-medium">Se connecter</Link>
          </li>
          <li>
            <Link to="/register" className="hover:bg-blue-500 px-3 py-2 rounded-md text-lg font-medium">S'inscrire</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
