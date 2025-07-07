import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import axios from "axios";

const Documents = () => {
  const { tokenStorage, loading, setLoading } = useContext(AuthContext);
  const [documents, setDocuments] = useState([]);

  const apiUrl = import.meta.env.VITE_API_URL;

  const fetchDocuments = async () => {
  const token = tokenStorage;
  if (!token) {
    setLoading(false);
    return;
  }

  try {
    const response = await axios.get(`${apiUrl}/api/my-documents`, {
      headers: { Authorization: `Bearer ${tokenStorage}` },
    });
    if (response.status === 200) {
      setDocuments(response.data);
    }
  } catch (error) {
    if (error.response) {
      // La requête a répondu avec un code d'erreur
      if (error.response.status === 404 && error.response.data.message === "Parent not found for this user") {
        // Par exemple, afficher un message spécifique
        alert("Vous n'avez pas encore de documents associés, veuillez contacter l'administrateur.");
        
      } else {
        alert(`Erreur: ${error.response.data.message || "Impossible de récupérer les documents."}`);
      }
    } else {
      // Problème réseau ou autre
      alert("Erreur réseau, veuillez réessayer.");
    }
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    fetchDocuments();
  }, []);

  return (
    <div className="bg-gray-50">
      <h2 className="text-3xl font-bold mb-6  text-cyan-600 text-center">
        Liste des documents
      </h2>

      {loading ? (
        <p className="text-center text-gray-600">Chargement des documents...</p>
      ) : documents.length === 0 ? (
        <p className="text-center text-gray-600">Aucun document trouvé.</p>
      ) : (
        <ul className="space-y-4">
          {documents.map((doc) => (
            <li key={doc.id} className="p-2">
              <p className="font-bold text-lg">{doc.file_name}</p>
              <p className="text-gray-600">Type : {doc.type}</p>
              <p className="text-gray-600">
                Ajouté le : {new Date(doc.date_added).toLocaleDateString("fr-FR")}
              </p>
              <a
                href={`${apiUrl}/${doc.file_path.replace(/\\/g, "/")}`}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 bg-cyan-600 text-white rounded"
              >
                Télécharger
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Documents;
