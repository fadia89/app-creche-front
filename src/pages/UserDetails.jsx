import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";



const UserDetails = () => {


    console.log(useParams)
    const [userDetails, setUserDetails] = useState(null)
    const [loading, setLoading] = useState(true)
    const {id} = useParams()



    const fetchUsersDetails = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/user/${id}`);
            //console.log(response)
          if (response.status === 200) {
            setUserDetails(response.data);
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
          fetchUsersDetails();
        
      }, []);

      return (
        <>
          {!loading && userDetails && (
            <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md text-center">
                <img src={userDetails.image ? `http://localhost:5000${userDetails.image}` : 'https://png.pngtree.com/thumb_back/fh260/background/20220812/pngtree-user-flat-gray-color-rounded-raster-icon-he-figure-isolated-photo-image_19485746.jpg'} />

                <h1 className="text-xl font-semibold">{userDetails.first_Name}</h1> <br></br>
                <h1 className="text-xl font-semibold">{userDetails.last_Name}</h1>
                <p className="text-gray-600">{userDetails.email}</p>
                <button className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition">
                Edit Profile
                </button>
            </div>
          )}
        </>
      );
    }
export default UserDetails