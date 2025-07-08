import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import Calendar from "react-calendar";
import axios from "axios";
import "react-calendar/dist/Calendar.css";

const CalendarEvents = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [dateSelected, setDateSelected] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const { tokenStorage } = useContext(AuthContext);

  //Format a date in YYYY-MM-DD format
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const formatDuration = (durationInSeconds) => {
    if (!duration) return "Durée non spécifiée";
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);
    return minutes === 0
      ? `${hours}h`
      : `${hours}h${minutes}min`;
  };

  const fetchEvents = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/events`, {
        headers: { Authorization: `Bearer ${tokenStorage}` },
      });
      setEvents(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Dates des événements dans un Set pour un accès rapide
  const eventDatesSet = new Set(events.map((event) => event.event_date));

  // Filtrage des événements du jour sélectionné
  const selectedDateStr = formatDate(dateSelected);
  const filteredEvents = events.filter(
    (event) => event.event_date === selectedDateStr
  );

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-50">
      <h2 className="text-3xl font-extrabold mb- text-center text-cyan-600">
        📆 Calendrier des événements
      </h2>

      <div className="flex justify-center mb-10">
        <Calendar
          onChange={setDateSelected}
          value={dateSelected}
          tileContent={({ date, view }) => {
            if (view === "month" && eventDatesSet.has(formatDate(date))) {
              return (
                <div className="flex justify-center items-center mt-1">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                </div>
              );
            }
            return null;
          }}
        />
      </div>

      <h3 className="text-xl font-semibold text-black-800 mb-4  ">
        Événements du{" "}
        <span className="text-cyan-600">
          {dateSelected.toLocaleDateString()}
        </span>

      </h3>

      {loading ? (
        <p className="text-center text-gray-500">Chargement...</p>
      ) : filteredEvents.length === 0 ? (
        <p className="text-center text-gray-500 italic">
          Aucun événement ce jour-là.
        </p>
      ) : (
        <ul className="space-y-5">
          {filteredEvents.map((event) => (
            <li
              key={event.id}
              className="flex border border-cyan-300 rounded-lg bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
            >

              <div className="w-2 rounded-l-lg bg-cyan-600"></div>

              <div className="p-4 flex flex-col justify-between flex-grow">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  {event.name}
                </h4>

                <div className="text-gray-600 space-y-1 text-sm">
                  <p>
                    <span role="img" aria-label="clock">
                      🕒
                    </span>{" "}
                    {formatDuration(event.duration)}
                  </p>
                  <p>
                    <span role="img" aria-label="location">
                      📍
                    </span>{" "}
                    {event.location}
                  </p>
                  {event.description && (
                    <p>
                      <span role="img" aria-label="notes">
                        📝
                      </span>{" "}
                      {event.description}
                    </p>
                  )}
                  {event.quota && (
                    <p>
                      <span role="img" aria-label="quota">
                        👥
                      </span>{" "}
                      Quota : {event.quota}
                    </p>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CalendarEvents;
