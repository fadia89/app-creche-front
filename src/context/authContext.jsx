import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const AuthContext = createContext()

export const AuthController = ({ children }) => {
  let navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [tokenStorage, setTokenStorage] = useState(null)


  useEffect(() => {
    setLoading(true)
    const token = localStorage.getItem('token')
    try{
      if(token){
        setIsAuthenticated(true)
        setTokenStorage(token)  // On met à jour le token dans le state
       
      }
    } catch (err){
      console.error('Error accessing localStroge')

    }
    finally{
      setLoading(false)
    }
    
  }, [])

  const handleLogout = () => {
    try{
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        navigate('/login');

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
    <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, handleLogin, handleLogout, tokenStorage}}>
      {children}
    </AuthContext.Provider>
  )
}
