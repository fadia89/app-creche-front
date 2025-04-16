import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";
import axios from "axios";


const Profile = () => {
  const {tokenStorage, isAuthenticated } = useContext(AuthContext);
  

  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState(null);

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/profile`, {
        headers: {  //POyr recupérer un user par rapport a son ID (c'est fait coté back)
          Authorization: `Bearer ${tokenStorage}`,
        },
      });
        //console.log(response)
      if (response.status === 200) {
        setUserProfile(response.data);
        //console.log(response.data)
      }
    } catch (err) {
      console.log(err);
      alert("Erreur lors de la récupération des informations de l'utilisateur");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    /*
    if (!isAuthenticated) {
      navigate('/login');
    }*/ //remplacer par ProtectedRoute

    if (tokenStorage) {
      fetchUserProfile();
    }
  }, []);

  if (loading) {
    return <p>Chargement du profil...</p>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow text-center">
      {!loading && userProfile && (
        <>
          <h1 className="text-2xl font-bold mb-4 text-gray-800">
            Hello, my name is {userProfile.first_Name}
          </h1>
          <div className="flex justify-center">
            <img
              src={`http://localhost:5000${userProfile.image}`}
              alt="Profile"
              className="w-48 h-48 object-cover rounded-full border-4 border-indigo-500"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
