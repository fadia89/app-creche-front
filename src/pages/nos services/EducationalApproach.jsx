import React from 'react';

const activities = [
  {
    title: 'Pédagogie Snoezelen',
    description: 'Des ateliers Snoezelen sont régulièrement organisés afin de participer à l’éveil sensoriel des enfants.',
    image: '/images/Snoezelen.jpg',
  },
  {
    title: 'Éveil Musical',
    description: 'Des activités musicales permettent également aux enfants de développer leurs sens, tout en découvrant de nouveaux instruments de musique.',
    image: '/images/eveil-musical.webp',
  },
  {
    title: 'Motricité Fine',
    description: 'Les professionnelles mettent en place des activités de motricité fine, généralement basées sur le transvasement et la préhension.',
    image: '/images/motricite-fine.jpg',
  },
  {
    title: 'Parcours Moteur',
    description: 'Les enfants aiment réaliser des parcours moteur, qui allient développement de la motricité et exercice physique.',
    image: '/images/parcours-moteur.png',
  },
];

const EducationalApproach = () => {
  return (
    <div className="px-6 py-25 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-black-800">Approche Pédagogique</h1>

      <section className="mb-12">
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Notre projet pédagogique suit plusieurs objectifs :
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Favoriser l’autonomie et le développement psychomoteur de votre enfant au quotidien</li>
          <li>Développer son activité motrice et son éveil sensoriel lors de différents ateliers</li>
          <li>Permettre l’acquisition de la propreté sans pression, en accordant le temps nécessaire</li>
          <li>Garantir la sécurité physique et émotionnelle de chacun</li>
        </ul>
        <p className="mt-4 text-gray-700 text-lg">
          Pour atteindre ces objectifs, notre pédagogie est mise en œuvre à travers différentes activités.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-black-800 mb-6 text-center">Les activités pédagogiques</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img src={activity.image} alt={activity.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-black-600 mb-2">{activity.title}</h3>
                <p className="text-gray-700 text-sm">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EducationalApproach;
