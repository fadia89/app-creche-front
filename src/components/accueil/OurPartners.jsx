import ville_de_lyon3 from '../../assets/images/ville_de_lyon3.png'
import metropole_grand_lyon from '../../assets/images/metropole_grand_lyon.png';

const OurPartners = () => {
  return (
    <section className="section our-partners">
      <h3>🤝 Nos partenaires</h3>
      <ul>
        <li>🏛️ La mairie via le P.A.I.P.E.</li>
        <li>👨‍⚕️ La Métropole de Lyon via la Protection Maternelle et Infantile (PMI)</li>
        <li>🏫 Les services sociaux, écoles et centres médico-psychologiques</li>
        <li>🎓 Les centres de formation de la petite enfance</li>
      </ul>
      <div className="logos">
        <img src={ville_de_lyon3} alt="Ville de Lyon 3" />
        <img src={metropole_grand_lyon} alt="Métropole de Lyon" />
      </div>
    </section>
  );
};

export default OurPartners;
