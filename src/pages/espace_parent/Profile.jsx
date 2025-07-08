import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CalendarEvents from "./CalendarEvents";
import Activities from "./Activities";
import Documents from "./Documents";

const Profile = () => {
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  const { tokenStorage } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState(null);
  const [isParent, setIsParent] = useState(false); 

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/profile`, {
        headers: {
          Authorization: `Bearer ${tokenStorage}`,
        },
      });

      if (response.status === 200) {
        const data = response.data;
        setUserProfile(data);
        setIsParent(!!data.isParentarent); // ✅ Vérifie si la clé `parent` existe
      }
    } catch (err) {
      console.error(err);
      alert("Erreur lors de la récupération du profil.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (tokenStorage) {
      fetchUserProfile();
    } else {
      setLoading(false);
    }
  }, [tokenStorage]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg animate-pulse">Chargement du profil...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      {userProfile && (
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
            Bienvenue, {userProfile.first_name}
          </h1>

          <div className="flex justify-center mb-6">
            <img
              src={`${apiUrl}${userProfile.image}`}
              alt="Photo de profil"
              className="w-40 h-40 rounded-full object-cover border-4 border-cyan-700 shadow-md"
            />
          </div>

          <button
            onClick={() => navigate(`/edit-profile`)}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-cyan-700 text-white text-lg font-semibold hover:bg-cyan-800 transition duration-300 shadow-lg"
          >
            ✏️ Modifier le profil
          </button>
        </div>
      )}

      <div className="space-y-16">
        <CalendarEvents />
        
        {isParent && (
          <>
            <Activities />
            <Documents />
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
