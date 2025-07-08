import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/authContext";
import { Typography } from "@mui/material";

const CAPACITY = 30;

const Dashboard = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const { tokenStorage } = useContext(AuthContext);
  const [registrationCount, setRegistrationCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // This state is just used to trigger a refresh in useEffect
  const [refreshFlag, setRefreshFlag] = useState(false);

  const fetchRegistration = async () => {

    try {
      setLoading(true);
      const response = await axios.get(`${apiUrl}/api/registrations`, {
        headers: {
          Authorization: `Bearer ${tokenStorage}`,
        },
      });
      if (response.status === 200) {
        const acceptedRegistrations = response.data.filter(
          (reg) => reg.status === "accepted"
        );
        setRegistrationCount(acceptedRegistrations.length);
        setError(null);
      } else {
        setError("Erreur lors de la récupération des inscriptions.");
      }
    } catch (err) {
      console.error(err);
      setError("Erreur lors du chargement des inscriptions.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (tokenStorage) {
      fetchRegistration();
    } else {
      setError("Token manquant, veuillez vous connecter.");
      setLoading(false);
    }
  }, [tokenStorage,setRefreshFlag]);

  const placesDisponibles = CAPACITY - registrationCount;

  if (loading) {
    return <Typography>Chargement...</Typography>;
  }

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>
        Tableau de bord
      </Typography>
      {/*Button to manually trigger the refresh of registrations */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => setRefreshFlag((prev) => !prev)} // Invert the value of the flag to trigger useEffect
        style={{ marginBottom: 20 }}
      >
        Rafraîchir les inscriptions
      </Button>

      {error && <Typography color="error">{error}</Typography>}

      {!error && (
        <>
          <Typography variant="h6">
            Nombre d’enfants inscrits : {registrationCount}
          </Typography>
          <Typography
            variant="h6"
            color={placesDisponibles > 0 ? "green" : "error"}
          >
            Places disponibles : {placesDisponibles >= 0 ? placesDisponibles : 0}
          </Typography>
        </>
      )}
    </div>
  );
};

export default Dashboard;
