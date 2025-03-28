import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

export const AuthController = ({ children }) => {
  let navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = async (e, email, password) => {
    e.preventDefault()

    try {
      // Appel d'api a mettre ici
      if (email === "test@example.com" && password === "password") {
        localStorage.setItem('token', 'fake-jwt-token');
        setIsAuthenticated(true);
        alert("Connexion réussie !");
        navigate('/'); 
      } else {
        alert("Identifiants incorrects");
      }
    } catch (err) {
      console.error(err);
      alert('Échec de la connexion');
    }
  };

  return (
    <AuthContext.Provider value={[isAuthenticated, setIsAuthenticated, handleLogin]}>
      {children}
    </AuthContext.Provider>
  )
}
