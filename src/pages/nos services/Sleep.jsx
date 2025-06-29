import React from "react";
import { FaBed, FaBaby, FaClock, FaHandsHelping } from "react-icons/fa";

const Sleep = () => {
  return (
    <div className="max-w-7xl mx-auto p-15 space-y-10">

      <section
        className="relative bg-cover bg-center bg-no-repeat rounded-xl shadow-6xl overflow-hidden"
        style={{ backgroundImage: "url('/images/sommeil.webp')" }}
      >
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

        <div className="relative z-10 p-15 text-center text-gray-800 animate-fade-in">
          <h1 className="text-4xl font-extrabold mb-6">🛏️ Le Sommeil</h1>
          <p className="text-lg leading-relaxed">
            La sieste est un moment important de la journée. Les bébés ont un dortoir à leur disposition
            et les enfants plus grands, avec des besoins différents en sommeil, dorment dans un dortoir séparé.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Les temps de sommeil représentent également un moyen de mettre en place des rituels
            et de favoriser l’autonomie et le respect des autres enfants.
          </p>
        </div>
      </section>

  
      <section>
        <h2 className="text-2xl font-bold mb-2 text-purple-800">🌙 Le Sommeil chez Oursons et Cie</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Les enfants ont accès à deux dortoirs, selon leurs besoins. L’environnement est apaisant,
          et la présence d’adultes rassure les enfants au moment de l’endormissement.
        </p>
      </section>

      
      <section className="space-y-6">
        {[
          {
            icon: <FaBaby className="text-pink-500 w-6 h-6" />,
            title: "Besoins",
            text: "Pour les nourrissons et les moyens, le respect du rythme de sommeil est primordial. Chaque enfant est couché dès que le besoin s'en fait sentir. Même les plus grands peuvent aller se reposer librement.",
          },
          {
            icon: <FaBed className="text-blue-500 w-6 h-6" />,
            title: "Rituel",
            text: "La sieste s’inscrit dans un rituel après le repas : rangement, temps calme, histoires ou chansons, puis installation au lit avec doudou ou tétine. Une professionnelle accompagne chaque enfant.",
          },
          {
            icon: <FaClock className="text-yellow-500 w-6 h-6" />,
            title: "Respect",
            text: "Les enfants dorment selon leur propre rythme. L'équipe ne réveille jamais un enfant qui dort, et fait en sorte que chacun puisse se reposer sans être dérangé par les autres.",
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
      </section>

      {/* AUTONOMIE */}
      <section>
        <h3 className="text-xl font-semibold mb-4 text-green-800">👕 L’autonomie autour de la sieste</h3>
        <p className="text-gray-700 text-lg mb-4">
          L’équipe encourage les enfants à se déshabiller et à s’habiller seuls, en fonction de leurs capacités.
          Des boîtes personnalisées permettent aux enfants de ranger leurs vêtements.
        </p>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <FaHandsHelping className="text-green-500 w-6 h-6" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-800">Accompagnement</h4>
            <p className="text-gray-600">
              Les professionnelles restent proches pour accompagner les enfants et les aider si nécessaire,
              tout en les laissant faire seuls dès que possible.
            </p>
          </div>
        </div>
      </section>

      {/* FIN */}
      <section className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2 text-purple-800">Reposer, grandir, s'épanouir</h3>
        <p className="text-gray-700 text-lg">
          Chez Oursons et Cie, la sieste est un moment doux, respectueux et essentiel au bien-être et au développement des enfants.
        </p>
      </section>
    </div>
  );
};

export default Sleep;
