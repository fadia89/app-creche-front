import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Users = () => {
    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(true)




    const fetchUsers = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/users`);
            //console.log(response)
            if (response.status === 200) {
                setUsers(response.data);
                console.log(response.data)
              }
          
        } catch (err) {
          console.log(err);
          alert("Erreur lors de la récupération des informations de l'utilisateur");
        } finally {
          setLoading(false);
        }
      };
    
      useEffect(() => {
          fetchUsers();
        
      }, []);

      return (
        <>
          <h1>Bienvenue à tous les utilisateurs</h1>
          {!loading && users && users.length > 0 ? (
            <div>
              {users.map((user) => (
                <div key={user._id} className="user-card">
                  {/* Le Link est appliqué à toute la ligne du nom de l'utilisateur */}
                  <h2>
                    <Link
                      to={`/user/${user._id}`}
                      className="user-link hover:underline text-blue-500 block" >
                      {user.first_Name }
                      {user.last_Name }
                    </Link>
                  </h2>
                  
                 
                </div>
              ))}
            </div>
          ) : (
            <p>Aucun utilisateur trouvé.</p>
          )}
        </>
      );
    };
export default Users;