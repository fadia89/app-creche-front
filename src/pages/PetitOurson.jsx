import React from "react";
import { MapIcon, PhoneIcon, InformationCircleIcon, ClockIcon } from "@heroicons/react/24/outline";


const PetitCreche = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100">
      {/* Informations Générales */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-blue-100 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105" tabIndex="0">
          <div className="flex items-center mb-4 text-blue-600">
            <InformationCircleIcon className="h-8 w-8 mr-3 text-blue-700" />
            <h3 className="text-xl font-semibold">Informations Générales</h3>
          </div>
          <p><strong>Nom :</strong> Micro-Crèche Les P'tits Oursons</p>
          <p><strong>Type :</strong> Crèche collective / Micro-crèche</p>
          <p><strong>Adresse :</strong> 15 Rue DES RANCY, 69003 LYON 03</p>
          <p className="flex items-center mt-2"><PhoneIcon className="h-5 w-5 mr-2 text-blue-500" /> 04 82 53 33 23</p>
          <p>
            <a href="mailto:contact@lesptitsoursons.fr" className="text-blue-500 underline mt-2 block">contact@lesptitsoursons.fr</a>
          </p>
        </div>

        {/* Cadre de Vie */}
        <div className="bg-green-100 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105" tabIndex="0">
          <div className="flex items-center mb-4 text-green-600">
            <MapIcon className="h-8 w-8 mr-3 text-green-700" />
            <h3 className="text-xl font-semibold">Cadre de Vie</h3>
          </div>
          <p>
            🧩 Un cadre idéal pour grandir en toute sérénité : proche des berges du Rhône et d'une station de métro, alliant praticité et confort.
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
        <h2 className="text-2xl font-bold text-gray-800">🧸 Bienvenue à la Micro-Crèche Les P'tits Oursons !</h2>
        <p className="mt-4 text-gray-600">
          Une crèche pleine de tendresse ! Vous recherchez un lieu bienveillant et sécurisant pour votre enfant ? Un endroit où il pourra s'épanouir en toute confiance ? La micro-crèche Les P'tits Oursons accueille les enfants de 0 à 4 ans, et jusqu'à 6 ans pour ceux en situation de handicap ou atteints d’une maladie chronique.
        </p>
        <p className="mt-4 text-gray-600">
          Située à proximité de l’EAJE "Oursons et Compagnie", nous travaillons en étroite collaboration pour offrir le meilleur accompagnement à vos petits bouts.
        </p>
      </section>

      {/* Nos Valeurs */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800">🥰 Nos valeurs et notre engagement auprès des familles</h2>
        <ul className="list-disc pl-6 mt-4 text-gray-600">
          <li>Bien-être et épanouissement des enfants</li>
          <li>Respect des familles et des habitudes de chacun</li>
          <li>Implication et engagement de notre équipe</li>
        </ul>
      </section>

      {/* Promesse */}
      <section className="mt-10 bg-green-50 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-green-800">🤝 Notre promesse</h2>
        <ul className="list-disc pl-6 mt-4 text-green-700">
          <li>Un accueil chaleureux et bienveillant pour chaque famille</li>
          <li>Un respect total du rythme et des besoins individuels de chaque enfant</li>
          <li>Un environnement sécurisant et stimulant favorisant l'apprentissage et le jeu</li>
          <li>Une équipe dynamique et créative, toujours à la recherche de nouveaux projets</li>
        </ul>
      </section>

      {/* Cadre de Vie */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800">🧩 Cadre de vie</h2>
        <p className="mt-4 text-gray-600">
          Idéalement située dans le 3ème arrondissement de Lyon, notre crèche offre un accès facile aux familles actives, proche des berges du Rhône et d'une station de métro.
        </p>
      </section>

      {/* Nos Prestations */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800">🎈 Nos prestations et services</h2>
        <ul className="list-disc pl-6 mt-4 text-gray-600">
          <li>Partage des bonnes pratiques entre professionnels</li>
          <li>Réunions d'équipe et formations régulières</li>
          <li>Analyse des pratiques professionnelles pour une amélioration continue</li>
        </ul>
      </section>

      {/* Notre équipe */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800">👩‍👧‍👦 Notre équipe</h2>
        <ul className="list-disc pl-6 mt-4 text-gray-600">
          <li>1 éducatrice de jeunes enfants</li>
          <li>1 auxiliaire de puériculture</li>
          <li>2 employées de crèche</li>
        </ul>
      </section>

      {/* Modalités d'admission */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800">📜 Modalités d'admission & inscription</h2>
        <ul className="list-disc pl-6 mt-4 text-gray-600">
          <li>Enfants de 0 à 3 ans jusqu'à leur entrée à l'école</li>
          <li>Enfants de 4 à 5 ans de manière ponctuelle (sauf en cas de handicap ou de maladie chronique)</li>
        </ul>
        <h3 className="mt-6 font-semibold text-gray-700">Nos types d'accueil :</h3>
        <ul className="list-disc pl-6 mt-4 text-gray-600">
          <li>Régulier : une place réservée pour une période définie</li>
          <li>Occasionnel : pour un besoin ponctuel</li>
          <li>Urgence et dépannage : en cas de situation exceptionnelle</li>
          <li>Accueil des enfants en situation de handicap : priorité d’accueil avec mise en place d’un PAI</li>
        </ul>
      </section>

      {/* Tarifs et Aides Financières */}
      <section className="mt-10 bg-yellow-50 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-yellow-800">💰 Tarifs et Aides Financières</h2>
        <p className="mt-4 text-yellow-700">
          Nos tarifs suivent le barème de la Caisse Nationale d’Allocations Familiales (CNAF). Toutes les activités pédagogiques, les repas et les soins d’hygiène sont inclus dans nos prestations.
        </p>
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
      </section>

      {/* Contact */}
      <section className="mt-10 bg-blue-50 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-blue-800">📞 Contactez-nous</h2>
        <p className="mt-4 text-blue-700">Pour plus d'informations ou pour nous rendre visite, nous sommes à votre écoute ! 😊</p>
      </section>
    </div>
  );
};

export default PetitCreche;
