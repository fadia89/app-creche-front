import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faInfo } from '@fortawesome/free-solid-svg-icons';
import OurPartners from '../../components/accueil/OurPartners';
import "../../styles/main.scss";
import ContactHome from '../../components/accueil/ContactHome';
import AdmissionrRegistration from '../../components/accueil/AdmissionrRegistration';
import Prices from '../../components/accueil/Prices';
import Promise from '../../components/accueil/Promise';
import Schedules from '../../components/accueil/Schedules.jsx';
import LivingEnvironement from '../../components/accueil/LivingEnvironment.jsx';

const Bear = () => {


  return (
    <div className="bear-container">
      <section className="cards">
        {/* General Information */}
        <div className="card informations" tabIndex="0">
          <div className="card-header">
            <FontAwesomeIcon icon={faInfo} />
            <h3>Informations Générales</h3>
          </div>
          <p><strong>Nom :</strong> Oursons et Compagnie</p>
          <p><strong>Type :</strong> EAJE Collectif</p>
          <p><strong>Status :</strong> Associatif</p>
          <p><strong>Adresse :</strong> 230 Rue de Créqui, Lyon 03</p>
          <p className="phone">
            <FontAwesomeIcon icon={faPhone} /> 04 82 53 33 23
          </p>
          <a href="mailto:creche.lesoursons@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} /> creche.lesoursons@gmail.com
          </a>
        </div>
        {/* Living environment */}
        <LivingEnvironement />
        {/* Schedules */}
        <Schedules />
      </section>
      {/* Presentation */}
      <section className="section">
        <h3>🧸Bienvenue chez Oursons et Compagnie</h3>
        <p>
          Un cocon pour grandir en douceur ! Vous cherchez un lieu chaleureux et sécurisé pour votre enfant ? Un espace où il pourra explorer, apprendre et s’épanouir ? La crèche Oursons et Compagnie accueille les enfants de 0 à 4 ans, et jusqu’à 6 ans pour ceux en situation de handicap ou atteints d’une maladie chronique.
        </p>
      </section>
      {/* Nos Valeurs */}
      <section className="section">
        <h3>🥰 Nos valeurs : bienveillance et engagement</h3>
        <ul>
          <li>Le bien-être et l’épanouissement des enfants</li>
          <li>Le respect des familles et de leur diversité</li>
          <li>Une approche écoresponsable et bienveillante</li>
        </ul>
      </section>

      {/* Our Promise */}
      <Promise />
      {/* Our Services */}

      <section className="section">
        <h3>🎈 Nos prestations et services</h3>
        <ul>
          <li>Des activités d’éveil adaptées à chaque âge</li>
          <li>Une salle de jeu stimulante et sécurisée</li>
          <li>Un chef cuisinier pour des repas équilibrés et savoureux</li>
          <li>Un patio aménagé pour profiter de l’extérieur</li>
          <li>Un suivi médical et pédagogique de qualité</li>
        </ul>
      </section>
      {/* Our team */}
      <section className="section">
        <h3>👩‍👧‍👦 Notre équipe</h3>
        <ul>
          <li>1 éducatrice de jeunes enfants, directrice de la structure</li>
          <li>1 infirmière à temps partiel</li>
          <li>1 éducatrice de jeunes enfants</li>
          <li>3 auxiliaires de puériculture</li>
          <li>5 employées de crèche</li>
          <li>1 employé d’entretien</li>
          <li>1 cuisinier</li>
          <li>1 secrétaire à temps partiel</li>
          <li>1 médecin</li>
        </ul>
      </section>
      {/* Admission requirements  */}
      <AdmissionrRegistration />

      {/* Rates and Financial Aid */}
      <Prices />

      {/* Our Partnerss */}
      <OurPartners />

      {/* Contact */}
      <ContactHome />

    </div>
  );

};

export default Bear;
