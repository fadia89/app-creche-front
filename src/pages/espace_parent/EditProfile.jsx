import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  let navigate = useNavigate();
  const { tokenStorage, isAuthenticated } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [infoUser, setInfoUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    image: '',
    address: '',
    phone: ''
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Ajout des données du formulaire dans le FormData
    for (let key in infoUser) {
      formData.append(key, infoUser[key]);
    }

    try {
      const response = await axios.patch(`http://localhost:8000/api/profile`, formData, {
        headers: {
          Authorization: `Bearer ${tokenStorage}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      alert("Profil mis à jour !");
    } catch (err) {
      console.error(err);
      alert("Erreur lors de la mise à jour du profil");
    } finally {
      navigate('/profile');
    }
  };


  const fetchUserEditProfile = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/profile`, {
        headers: {
          Authorization: `Bearer ${tokenStorage}`,
        },
      });


      setInfoUser({
        ...infoUser,
        first_name: response.data.first_name,
        last_name: response.data.last_name,
        email: response.data.email,
        image: response.data.image,
        address: response.data.address,
        phone: response.data.phone
      });
    } catch (err) {
      console.log(err);
      alert('Error retrieving user information');
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchUserEditProfile();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-12 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-3xl font-semibold text-indigo-600 mb-6 text-center">
        Modifier mon profil
      </h2>

      {!loading ? (
        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
            <input
              type="text"
              placeholder="Prénom"
              value={infoUser.first_name}
              onChange={e => setInfoUser({ ...infoUser, first_name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>


          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
            <input
              type="text"
              placeholder="Nom"
              value={infoUser.last_name}
              onChange={e => setInfoUser({ ...infoUser, last_name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>


          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={infoUser.email}
              onChange={e => setInfoUser({ ...infoUser, email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>


          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nouveau mot de passe</label>
            <input
              type="password"
              placeholder="Mot de passe"
              value={infoUser.password}
              onChange={e => setInfoUser({ ...infoUser, password: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>


          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
            <input
              type="text"
              placeholder="Téléphone"
              value={infoUser.phone}
              onChange={e => setInfoUser({ ...infoUser, phone: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>


          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Adresse</label>
            <input
              type="text"
              placeholder="Adresse"
              value={infoUser.address}
              onChange={e => setInfoUser({ ...infoUser, address: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Image de profil</label>
            <input
              type="file"
              name="image"
              onChange={e => setInfoUser({ ...infoUser, image: e.target.files[0] })}
              className="w-full px-3 py-2 text-gray-600 file:mr-4 file:py-2 file:px-4
                         file:rounded-md file:border-0 file:text-sm file:font-semibold
                         file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            />
          </div>

          
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 transition"
          >
            Sauvegarder
          </button>
        </form>
      ) : (
        <p className="text-center text-gray-500">Chargement...</p>
      )}
    </div>
  );
};

export default EditProfile;
