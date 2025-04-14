import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const AuthContext = createContext()

export const AuthController = ({ children }) => {
  let navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false)


  useEffect(() => {
    let token = localStorage.getItem('token')
    if(token){
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogout = () => {
    try{
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        navigate('/');

    } catch (err){
        console.log(err);
    }
};

  const handleLogin = async (e, email, password) => {
    e.preventDefault()

    try {
      const response = await axios.post('http://localhost:5000/api/login', {email, password})
      console.log(response)
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
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
    <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, handleLogin, handleLogout}}>
      {children}
    </AuthContext.Provider>
  )
}
