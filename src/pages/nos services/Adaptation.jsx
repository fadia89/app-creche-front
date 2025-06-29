import React from "react";
import { FaBed, FaUserPlus, FaHourglassHalf, FaChild } from 'react-icons/fa';

const Adaptation = () => {
  return (
    <div className="max-w-7xl mx-auto p-15 space-y-10">

      <section
        className="relative bg-cover bg-center bg-no-repeat rounded-xl shadow-6xl"
       
      >

        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>


        <div className="relative z-10 p-15 text-center text-gray-800 animate-fade-in">
          <h1 className="text-4xl font-extrabold mb-6">🧸 L'Adaptation</h1>
          <p className="text-lg leading-relaxed">
            L’adaptation est une période importante qui permet à l’enfant de faire progressivement connaissance
            avec un nouveau lieu de vie (un lieu avec différents espaces, des bruits plus ou moins importants)
            et de nouvelles personnes (équipe, autres enfants, parents…).
          </p>
          <p className="text-lg leading-relaxed mt-4">
            La durée de cette période varie en fonction des besoins de chacun, enfants comme parents, afin de préserver au mieux la stabilité émotionnelle.
          </p>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-2 text-green-800">🌿 L'adaptation chez Oursons et Cie</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Nous comprenons l’importance de cette période pour votre enfant. C’est pourquoi nous mettons en place une adaptation progressive et personnalisée.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2 text-blue-800">L’adaptation à la Micro-Crèche et Oursons et Cie</h3>
        <p className="text-gray-700 text-lg">
          La période d’adaptation que nous proposons est de 5 jours, adaptés à l’enfant et aux obligations professionnelles des parents. Une professionnelle est en charge de l’adaptation de l’enfant.
        </p>
      </section>


      <section>
        <h3 className="text-xl font-semibold mb-4 text-purple-800">🗓️ Le Programme de l'Adaptation :</h3>
        <div className="space-y-6">
          {[
            {
              icon: <FaUserPlus className="text-green-600 w-6 h-6" />,
              title: "Jour 1 - Début de l'adaptation",
              text: "L’enfant reste une heure avec vous. Moment d’échange entre parents et professionnelles.",
            },
            {
              icon: <FaHourglassHalf className="text-blue-600 w-6 h-6" />,
              title: "Jour 2 - Première séparation",
              text: "Une heure sans les parents si tout le monde est prêt.",
            },
            {
              icon: <FaChild className="text-yellow-600 w-6 h-6" />,
              title: "Jour 3 - Matinée complète",
              text: "L’enfant passe la matinée avec repas inclus.",
            },
            {
              icon: <FaBed className="text-red-500 w-6 h-6" />,
              title: "Jour 4 - Sieste à la crèche",
              text: "L’enfant reste jusqu’à la sieste après le repas.",
            },
            {
              icon: <FaChild className="text-green-600 w-6 h-6" />,
              title: "Jour 5 - Petite journée complète",
              text: "Exemple : 9h30 à 16h30, selon le rythme de l’enfant.",
            },
          ].map(({ icon, title, text }, i) => (
            <div key={i} className="flex items-start space-x-4">
              <div className="flex-shrink-0">{icon}</div>
              <div>
                <h4 className="text-lg font-bold text-gray-800">{title}</h4>
                <p className="text-gray-600">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2 text-green-900"> L'adaptation est terminée, votre enfant est prêt !</h3>
        <p className="text-gray-700 text-lg">
          À l’issue de ce processus, votre enfant est généralement prêt à passer ses journées complètes à nos côtés.
          Toutefois, cette période peut être prolongée si nécessaire.
        </p>
      </section>
    </div>
  );
};

export default Adaptation;
