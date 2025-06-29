import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from "../../context/authContext";
import "../../styles/main.scss";

const Register = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated, setTokenStorage, setLoading } = useContext(AuthContext);

  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);

  const handleRegistration = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('first_name', first_name);
    formData.append('last_name', last_name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('role', 'parent');
    if (image) formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:8000/api/register', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      if (response.status === 201) {
        const token = response.data.token;
        if (token) {
          localStorage.setItem('token', token);
          setTokenStorage(token);
          setIsAuthenticated(true);
          alert(response.data.message);
          navigate('/profile');
        }
      }
    } catch (err) {
      console.error(err);
      alert("Erreur lors de l'inscription");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <h2 className="form-title">Inscription</h2>
      <form onSubmit={handleRegistration} className="register-form">
        <div className="form-group">
          <label htmlFor="last_name">Nom</label>
          <input type="text" id="last_name" required onChange={e => setLastName(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="first_name">Prénom</label>
          <input type="text" id="first_name" required onChange={e => setFirstName(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Adresse email</label>
          <input type="email" id="email" autoComplete="email" required onChange={e => setEmail(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" required onChange={e => setPassword(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="image">Photo de profil</label>
          <input type="file" id="image" name="image"   accept="image/*" onChange={e => setImage(e.target.files[0])} />
        </div>

        <button type="submit" className="submit-btn">Je m'inscris</button>
      </form>

      <p className="login-link">
        Vous avez déjà un compte ? <a href="/login">Connectez-vous</a>
      </p>
    </div>
  );
};

export default Register;
