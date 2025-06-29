import React from "react";
import {
  FaBaby,
  FaUtensils,
  FaSeedling,
  FaHeart,
  FaClock,
  FaHands,
  FaBirthdayCake,
  FaHandsHelping,
} from "react-icons/fa";

const Food = () => {
  const alimentationCards = [
    {
      icon: <FaBaby className="text-white w-8 h-8" />,
      title: "Bébés",
      text: "Jusqu’à 4 mois, l’alimentation est lactée. Les familles fournissent le lait infantile. Les repas se font dans le calme pour renforcer le lien adulte/enfant.",
      bg: "bg-pink-500",
    },
    {
      icon: <FaUtensils className="text-white w-8 h-8" />,
      title: "Plaisir",
      text: "Manger doit rester un moment de plaisir. L’enfant découvre de nouvelles saveurs et textures, sans obligation de finir son assiette. Il est toujours encouragé à goûter, jamais forcé.",
      bg: "bg-yellow-500",
    },
    {
      icon: <FaSeedling className="text-white w-8 h-8" />,
      title: "Diversification",
      text: "À partir de 4 mois, les aliments solides sont introduits avec l'accord des parents et après tests à la maison, pour éviter les allergies.",
      bg: "bg-green-500",
    },
  ];

  const valeursCards = [
    {
      icon: <FaHeart className="text-white w-8 h-8" />,
      title: "Besoin",
      text: "Chaque enfant a des besoins uniques. Nous adaptons les repas à ses rythmes, ses préférences et son développement individuel.",
      bg: "bg-red-400",
    },
    {
      icon: <FaClock className="text-white w-8 h-8" />,
      title: "Rituel",
      text: "Le repas suit un rituel rassurant et constant. Il donne à l’enfant des repères dans la journée et sécurise son environnement.",
      bg: "bg-indigo-400",
    },
    {
      icon: <FaHands className="text-white w-8 h-8" />,
      title: "Respect",
      text: "Le respect du rythme, de l’appétit et de l’autonomie de l’enfant est au cœur de notre accompagnement pendant les repas.",
      bg: "bg-teal-500",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-15 space-y-10">

     
      <section
        className="relative bg-cover bg-center bg-no-repeat rounded-xl shadow-6xl overflow-hidden"
        style={{ backgroundImage: "url('/images/alimentation.webp')" }}
      >
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
        <div className="relative z-10 p-15 text-center text-gray-800">
          <h1 className="text-4xl font-extrabold mb-6">🍽️ L'Alimentation</h1>
          <p className="text-lg">
            L’alimentation de l’enfant, dès le plus jeune âge, contribue à son développement. Une
            bonne alimentation, constituée de produits sains et de qualité, est primordiale.
          </p>
          <p className="text-lg mt-4">
            Tous les repas sont pris en charge par la crèche, élaborés par une société spécialisée
            avec une diététicienne.
          </p>
        </div>
      </section>

      {/* Alimentation chez Oursons et Cie */}
      <section>
        <h2 className="text-2xl font-bold mb-2 text-green-800">🌿 L'alimentation chez Oursons et Cie</h2>
        <p className="text-gray-700 text-lg">
          Les repas sont un moment privilégié d’apprentissage de l’autonomie et de la vie en collectivité.
        </p>
      </section>

      {/* Cartes : Bébés, Plaisir, Diversification */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {alimentationCards.map((card, index) => (
          <div
            key={index}
            className={`${card.bg} p-6 rounded-xl shadow-lg text-white transform transition duration-300 hover:scale-105`}
          >
            <div className="flex items-center mb-4">
              {card.icon}
              <h3 className="text-xl font-semibold ml-3">{card.title}</h3>
            </div>
            <p>{card.text}</p>
          </div>
        ))}
      </section>

      {/* Cartes : Besoin, Rituel, Respect */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {valeursCards.map((card, index) => (
          <div
            key={index}
            className={`${card.bg} p-6 rounded-xl shadow-lg text-white transform transition duration-300 hover:scale-105`}
          >
            <div className="flex items-center mb-4">
              {card.icon}
              <h3 className="text-xl font-semibold ml-3">{card.title}</h3>
            </div>
            <p>{card.text}</p>
          </div>
        ))}
      </section>

      {/* Activités */}
      <section>
        <h3 className="text-xl font-semibold mb-4 text-blue-800">🎨 Activités autour de l’alimentation</h3>
        <p className="text-gray-700 text-lg mb-4">
          Les enfants participent à des ateliers : préparation de goûters, pâtisserie, self-service...
        </p>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <FaBirthdayCake className="text-purple-500 w-6 h-6" />
            <div>
              <h4 className="text-lg font-bold text-gray-800">La Pâtisserie</h4>
              <p className="text-gray-600">
                Les enfants versent, remuent, malaxent : cela développe leur motricité et leur curiosité !
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FaHandsHelping className="text-teal-500 w-6 h-6" />
            <div>
              <h4 className="text-lg font-bold text-gray-800">Le Self-Service</h4>
              <p className="text-gray-600">
                Ils se servent seuls, débarrassent leur table et gagnent en autonomie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2 text-yellow-800">Grandir en savourant</h3>
        <p className="text-gray-700 text-lg">
          Chaque repas est une occasion d’apprendre, de partager et de s’épanouir dans un environnement joyeux.
        </p>
      </section>
    </div>
  );
};

export default Food;
