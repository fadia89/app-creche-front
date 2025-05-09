import React from "react";
import { MapIcon, PhoneIcon, InformationCircleIcon, ClockIcon } from "@heroicons/react/24/outline";
import ville_de_lyon3 from "../assets/images/ville_de_lyon3.jpg";
import metropole_grand_lyon from "../assets/images/metropole_grand_lyon.png";


const Oursons = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100">
      {/* Informations Générales */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-blue-100 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105" tabIndex="0">
          <div className="flex items-center mb-4 text-blue-600">
            <InformationCircleIcon className="h-8 w-8 mr-3 text-blue-700" />
            <h3 className="text-xl font-semibold">Informations Générales</h3>
          </div>
          <p><strong>Nom :</strong> Oursons et Compagnie</p>
          <p><strong>Type :</strong> EAJE Collectif</p>
          <p><strong>Adresse :</strong> 230 Rue de Créqui, Lyon 03</p>
          <p className="flex items-center mt-2"><PhoneIcon className="h-5 w-5 mr-2 text-blue-500" /> 04 82 53 33 23</p>
          <p>
            <a href="mailto:contact@oursonsetcompagnie.fr" className="text-blue-500 underline mt-2 block">contact@oursonsetcompagnie.fr</a>
          </p>
        </div>

        {/* Cadre de Vie */}
        <div className="bg-green-100 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105" tabIndex="0">
          <div className="flex items-center mb-4 text-green-600">
            <MapIcon className="h-8 w-8 mr-3 text-green-700" />
            <h3 className="text-xl font-semibold">Cadre de Vie</h3>
          </div>
          <p>
            🌿 Un cadre idéal pour les petits explorateurs ! Située au cœur du 3ème arrondissement de Lyon, la crèche est facilement accessible en métro et en bus.
          </p>
        </div>

        {/* Horaires */}
        <div className="bg-yellow-100 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105" tabIndex="0">
          <div className="flex items-center mb-4 text-yellow-600">
            <ClockIcon className="h-8 w-8 mr-3 text-yellow-700" />
            <h3 className="text-xl font-semibold">Horaires</h3>
          </div>
          <p><strong>Heures d'ouverture :</strong> 08h00 - 18h00</p>
          <p className="text-green-600 mt-2">Ouvert aujourd'hui</p>
        </div>
      </section>

      {/* Présentation */}
      <section className="mt-10 bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800">🧸 Bienvenue chez Oursons et Compagnie</h2>
        <p className="mt-4 text-gray-600">
          Un cocon pour grandir en douceur ! Vous cherchez un lieu chaleureux et sécurisé pour votre enfant ? Un espace où il pourra explorer, apprendre et s’épanouir ? La crèche Oursons et Compagnie accueille les enfants de 0 à 4 ans, et jusqu’à 6 ans pour ceux en situation de handicap ou atteints d’une maladie chronique.
        </p>
      </section>

      {/* Nos Valeurs */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800">🤝 Nos valeurs : bienveillance et engagement</h2>
        <ul className="list-disc pl-6 mt-4 text-gray-600">
          <li>Le bien-être et l’épanouissement des enfants</li>
          <li>Le respect des familles et de leur diversité</li>
          <li>Une approche écoresponsable et bienveillante</li>
        </ul>
      </section>

      {/* Promesse */}
      <section className="mt-10 bg-green-50 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-green-800">🎨 Notre promesse</h2>
        <ul className="list-disc pl-6 mt-4 text-green-700">
          <li>Offrir un accueil chaleureux et adapté aux besoins de chaque enfant</li>
          <li>Respecter les rythmes et habitudes des tout-petits</li>
          <li>Créer un environnement sécurisé et stimulant</li>
          <li>Favoriser un esprit d’équipe bienveillant et dynamique</li>
        </ul>
      </section>

      {/* Nos Prestations */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800">🎈 Nos prestations et services</h2>
        <ul className="list-disc pl-6 mt-4 text-gray-600">
          <li>Des activités d’éveil adaptées à chaque âge</li>
          <li>Une salle de jeu stimulante et sécurisée</li>
          <li>Un chef cuisinier pour des repas équilibrés et savoureux</li>
          <li>Un patio aménagé pour profiter de l’extérieur</li>
          <li>Un suivi médical et pédagogique de qualité</li>
        </ul>
      </section>

      {/* Notre équipe */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800">👩‍👧‍👦 Notre équipe</h2>
        <ul className="list-disc pl-6 mt-4 text-gray-600">
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

      {/* Modalités d'admission */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800">📜 Modalités d'admission & inscription</h2>
        <ul className="list-disc pl-6 mt-4 text-gray-600">
          <li>Régulier : une place réservée pour une période définie</li>
          <li>Occasionnel : pour un besoin ponctuel</li>
          <li>Urgence et dépannage : en cas de situation exceptionnelle</li>
          <li>Accueil des enfants en situation de handicap : Projet d’Accueil Individualisé (PAI)</li>
        </ul>
      </section>

      {/* Tarifs et Aides Financières */}
      <section className="mt-10 bg-yellow-50 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-yellow-800">💰 Tarifs et Aides Financières</h2>
        <p className="mt-4 text-yellow-700">
          Nos tarifs suivent le barème de la Caisse Nationale d’Allocations Familiales (CNAF). Toutes les activités pédagogiques, les repas et les soins d’hygiène sont inclus dans nos prestations.
        </p>
        <p className="mt-2 text-yellow-600">Simulation de coût disponible sur le site de la CAF.</p>
      </section>

      {/* Nos Partenaires */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800">🤝 Nos partenaires</h2>
        <ul className="list-disc pl-6 mt-4 text-gray-600">
          <li>🏛️ La mairie via le P.A.I.P.E.</li>
          <li>👨‍⚕️ La Métropole de Lyon via la Protection Maternelle et Infantile (PMI)</li>
          <li>🏫 Les services sociaux, écoles et centres médico-psychologiques</li>
          <li>🎓 Les centres de formation de la petite enfance</li>
        </ul>
        {/* Ajout des images des partenaires */}
        <div className="mt-8 flex justify-center gap-6">
            <img src={ville_de_lyon3} alt="Partenaire 1" className="w-48 h-48 object-contain shadow-md" />
            <img src={metropole_grand_lyon} alt="Partenaire 2" className="w-48 h-48 object-contain shadow-md" />

        </div>
      </section>

      {/* Contact */}
      <section className="mt-10 bg-blue-50 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-blue-800">📞 Contactez-nous</h2>
        <p className="mt-4 text-blue-700">Pour plus d'informations ou pour nous rendre visite, nous sommes à votre écoute ! 😊</p>
      </section>
    </div>
  );
};

export default Oursons;
