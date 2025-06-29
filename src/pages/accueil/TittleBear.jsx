import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faInfo } from '@fortawesome/free-solid-svg-icons';
import Schedules from '../../components/accueil/Schedules';
import LivingEnvironement from '../../components/accueil/LivingEnvironment';
import "../../styles/main.scss"
import Promise from '../../components/accueil/Promise';
import AdmissionrRegistration from '../../components/accueil/AdmissionrRegistration';
import Prices from '../../components/accueil/Prices';
import OurPartners from '../../components/accueil/OurPartners';
import ContactHome from '../../components/accueil/ContactHome';



const TittleBear = () => {

  return (
    <div className="bear-container">

      <section className="cards">
        <div className="card informations" >
          <div className="card-header">
            {/* General Information */}
            <FontAwesomeIcon icon={faInfo} />
            <h3 >Informations Générales</h3>
          </div>
          <p><strong>Nom :</strong> Micro-Crèche Les P'tits Oursons</p>
          <p><strong>Type :</strong> Crèche collectif / Micro-crèche</p>
          <p><strong>Status :</strong> Associatif</p>
          <p><strong>Adresse :</strong> 278 rue Duguesclin, 69003 LYON </p>
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
        <h3 >🧸 Bienvenue à la Micro-Crèche Les P'tits Oursons !</h3>
        <p >
          Une crèche pleine de tendresse ! Vous recherchez un lieu bienveillant et sécurisant pour votre enfant ? Un endroit où il pourra s'épanouir en toute confiance ? La micro-crèche Les P'tits Oursons accueille les enfants de 0 à 4 ans, et jusqu'à 6 ans pour ceux en situation de handicap ou atteints d’une maladie chronique.
        </p>
        <p>
          Située à proximité de l’EAJE "Oursons et Compagnie", nous travaillons en étroite collaboration pour offrir le meilleur accompagnement à vos petits bouts.
        </p>
      </section>

      {/* Nos Valeurs */}
      <section className="section">
        <h3>🥰 Nos valeurs et notre engagement auprès des familles</h3>
        <ul >
          <li>Bien-être et épanouissement des enfants</li>
          <li>Respect des familles et des habitudes de chacun</li>
          <li>Implication et engagement de notre équipe</li>
        </ul>
      </section>

      {/* Our Promise */}
      <Promise />

      {/* Our Services */}
      <section className="section">
        <h3 >🎈 Nos prestations et services</h3>
        <ul>
          <li>Partage des bonnes pratiques entre professionnels</li>
          <li>Réunions d'équipe et formations régulières</li>
          <li>Analyse des pratiques professionnelles pour une amélioration continue</li>
        </ul>
      </section>

      {/* Our team */}
      <section className="section">
        <h3>👩‍👧‍👦 Notre équipe</h3>
        <ul>
          <li>1 éducatrice de jeunes enfants</li>
          <li>1 auxiliaire de puériculture</li>
          <li>2 employées de crèche</li>
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

export default TittleBear;
