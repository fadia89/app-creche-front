import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import  {jwtDecode } from 'jwt-decode';






export const AuthContext = createContext()

export const AuthController = ({ children }) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  let navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [tokenStorage, setTokenStorage] = useState(null)
  const [userId, setUserId] = useState(null);
  const [userRole, setUserRole] = useState(null);



  useEffect(() => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const decoded = jwtDecode(token);
        // Vérifier expiration
        const now = Date.now().valueOf() / 1000;
        if (decoded.exp < now) {
          handleLogout();
        } else {
          setIsAuthenticated(true);
          setUserId(decoded.id);
          setUserRole(decoded.role);
          setTokenStorage(token);
        }
      }
    } catch (err) {
      console.err("Error decoding token :", err);
      handleLogout();
    } finally {
      setLoading(false);
    }
  }, [])

const handleLogout = () => {
  try {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setTokenStorage(null);
    setUserId(null); // Reset user ID
    setUserRole(null);  // Reset role user
    navigate('/login');

  } catch (err) {
    console.log(err);
    console.log('Error in logout:', err);
  }
};

const handleLogin = async (e, email, password) => {
  e.preventDefault();

  try {
    const response = await axios.post(`${apiUrl}/api/login`, { email, password });

    if (response.status === 200) {
      const token = response.data.token;
      localStorage.setItem('token', token);

      setIsAuthenticated(true);
      setTokenStorage(token);

      const decoded = jwtDecode(token);
      setUserId(decoded.id);
      setUserRole(decoded.role);
      alert("Connexion réussie !");

      if (decoded.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/profile');
      }
    } else {
      alert("Identifiants incorrects");
    }
  } catch (err) {
    console.error(err);
    alert('Échec de la connexion');
  }
};

return (
  <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, handleLogin, handleLogout, tokenStorage,setTokenStorage, userId, setLoading, userRole }}>
    {children}
  </AuthContext.Provider>
)
}
