import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaby} from '@fortawesome/free-solid-svg-icons';

const LivingEnvironement = () => {
    return (
        <div className="card vie">
            <div className="card-header">
                <FontAwesomeIcon icon={faBaby} />
                <h3>Cadre de Vie</h3>
            </div>
            <p>
                🧩 Un cadre idéal pour les petits explorateurs ! Située au cœur du 3ème arrondissement de Lyon, la crèche est facilement accessible en métro et en bus.
            </p>
        </div>
    )
}
export default LivingEnvironement;