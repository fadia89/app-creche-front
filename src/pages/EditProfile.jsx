import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";


const EditProfile = () => {
  let navigate = useNavigate()
const { tokenStorage, isAuthenticated } = useContext(AuthContext);
const [loading, setLoading] = useState(true);
const [infoUser, setInfoUser] = useState({
    first_Name: '',
    last_Name: '',
    email: '',
    password: '',
    image: ''
  });

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    
    for (let key in infoUser) {
      formData.append(key, infoUser[key]);
    }
   
    
    try {
      const response = await axios.patch(`http://localhost:5000/api/user`, formData, {
        headers: {
          Authorization: `Bearer ${tokenStorage}`,
          'Content-Type': 'multipart/form-data' // Important pour que le backend comprenne les fichiers
        }
      });
      //console.log("Mise à jour réussie :", response.data);
      alert("Profil mis à jour !");
    } catch (err) {
      console.error(err);
      alert("Erreur lors de la mise à jour du profil");
    }
    finally{
      navigate('/Profile')
    }
  };
  

 const fetchUserEditProfile = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/profile`,{
        headers: {
          Authorization: `Bearer ${tokenStorage}`
        }
      });
      //console.log("Réponse utilisateur :", response);
       setInfoUser({
        ...infoUser,
        first_Name: response.data.first_Name,
        last_Name: response.data.last_Name,
        email: response.data.email
      });
    } catch (err) {
      console.log(err);
      alert("Erreur lors de la récupération des informations de l'utilisateur");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserEditProfile();
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Modifier mon profil</h2>
      {!loading ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Prénom"
            value={infoUser.first_Name}
            onChange={e => setInfoUser({ ...infoUser, first_Name: e.target.value })}
            className="w-full px-3 py-2 border rounded"
          />
          <input
            type="text"
            placeholder="Nom"
            value={infoUser.last_Name}
            onChange={e => setInfoUser({ ...infoUser, last_Name: e.target.value })}
            className="w-full px-3 py-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            value={infoUser.email}
            onChange={e => setInfoUser({ ...infoUser, email: e.target.value })}
            className="w-full px-3 py-2 border rounded"
          />
          <input
            type="password"
            placeholder="Nouveau mot de passe"
            value={infoUser.password}
            onChange={e => setInfoUser({ ...infoUser, password: e.target.value })}
            className="w-full px-3 py-2 border rounded"
          />
          <input
            type="file"
            name='image'
            onChange={e => setInfoUser({ ...infoUser, image: e.target.files[0] })}
            className="w-full px-3 py-2"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Sauvegarder
          </button>
        </form>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
};

export default EditProfile;
