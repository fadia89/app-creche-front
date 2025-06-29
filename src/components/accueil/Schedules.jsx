import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const Schedules = () => {
    const [showAll, setShowAll] = useState(false);

    const horaires = [
        "Lundi : 08h00 - 18h00",
        "Mardi : 08h00 - 18h00",
        "Mercredi : 08h00 - 18h00",
        "Jeudi : 08h00 - 18h00",
        "Vendredi : 08h00 - 18h00",
        "Samedi : fermé",
        "Dimanche : fermé",
    ];
    return (
        <div className="card horaires" tabIndex="0">
            <div className="card-header">
                <FontAwesomeIcon icon={faClock} />
                <h3>Horaires</h3>
            </div>
            <p><strong>Heures d'ouverture :</strong></p>
            <div className={`horaires-list ${showAll ? 'expanded' : ''}`}>
                {(showAll ? horaires : horaires.slice(0, 3)).map((h, i) => (
                    <p key={i}>{h}</p>
                ))}
            </div>
            <button onClick={() => setShowAll(!showAll)}>
                {showAll ? "Réduire" : "Plus d'horaires"}
            </button>
        </div>

    )
}

export default Schedules;