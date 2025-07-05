import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import axios from "axios";

const Activities = () => {
    const { tokenStorage, setLoading } = useContext(AuthContext);
    const [activities, setActivities] = useState([]);
    const [expandedDescriptions, setExpandedDescriptions] = useState({}); // keep open/closed state by id

    const fetchActivities = async () => {
        const token = tokenStorage;
        if (!token) {
            setLoading(false);
            return;
        }
        try {
            const response = await axios.get(`http://localhost:8000/api/my-activities`, {
                /// Adds an Authorization header to the HTTP request, using the Bearer token scheme.
                headers: {
                    Authorization: `Bearer ${tokenStorage}`,
                },
            });

            if (response.status === 200) {
                setActivities(response.data);
            }
        } catch (err) {
            alert("Error retrieving activities.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchActivities();
    }, []);

    const toggleDescription = (id) => {
        setExpandedDescriptions((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };



    return (

        <div className="bg-gray-50">
            <h2 className="text-3xl font-bold mb-6 text-cyan-600 text-center">Liste des activités</h2>

            {activities.length === 0 ? (
                <p className="text-center text-gray-500 text-lg">Aucune activité trouvée.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {activities.map((activity) => {
                        const isExpanded = expandedDescriptions[activity.id];

                        return (
                            <div
                                key={activity.id}
                                className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center h-full transition-transform duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:border hover:border-cyan-300"
                            >
                                <img
                                    src={`http://localhost:8000/images/${activity.image}`}
                                    alt={activity.name}
                                    className="w-48 h-32 object-cover rounded mb-4"
                                />
                                <h3 className="text-lg font-semibold mb-2">{activity.name}</h3>

                                <p className="text-sm text-gray-500">
                                    Date : {new Date(activity.activity_date).toLocaleDateString()}
                                </p>

                                {activity.description && (
                                    <>
                                        <p className="text-sm text-gray-600 mb-2">
                                            {isExpanded || activity.description.length <= 50
                                                ? activity.description
                                                : `${activity.description.slice(0, 50)}...`}
                                        </p>

                                        {activity.description.length > 50 && (
                                            <button
                                                onClick={() => toggleDescription(activity.id)}
                                                className="text-blue-600 hover:underline text-sm mb-2"
                                            >
                                                {isExpanded ? "Réduire" : "Plus de détails"}
                                            </button>
                                        )}

                                        {activity.image && (
                                            <a
                                                href={`http://localhost:8000/download/images/${activity.image}`}
                                                download
                                                className="inline-block mt-2 px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 text-sm"
                                            >
                                                Télécharger
                                            </a>
                                        )}
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );

};

export default Activities;
