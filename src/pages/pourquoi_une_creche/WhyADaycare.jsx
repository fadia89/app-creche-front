const WhyADaycare = () => {
    const cartes = [
      {
        titre: "Répondre aux besoins des familles",
        contenu:
          "Seules 18 % des familles obtiennent une place en crèche, alors que près de 30 % des parents d’enfants de moins de 3 ans souhaitent ce mode de garde. Offrir une structure d’accueil adaptée permet de répondre à cette demande croissante.",
        couleur: "bg-indigo-100",
      },
      {
        titre: "Attirer de nouveaux habitants",
        contenu:
          "Comme pour l’école, l’offre de garde influence les choix résidentiels. Une crèche de qualité est un véritable argument pour séduire de jeunes familles désireuses de s’installer dans une commune.",
        couleur: "bg-rose-100",
      },
      {
        titre: "Réduire les inégalités sociales",
        contenu:
          "Les crèches favorisent l’égalité des chances dès la petite enfance. Elles accueillent tous les enfants sans distinction, devenant ainsi des leviers importants de mixité sociale et de développement.",
        couleur: "bg-emerald-100",
      },
    ];
  
    return (
      <div className="max-w-7xl mx-auto my-12 px-6 py-10">
        <h1 className="text-3xl font-bold mb-10 text-center text-gray-800 border-b border-gray-300 pb-4">
          Pourquoi une crèche ?
        </h1>
  
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cartes.map((carte, index) => (
            <div
              key={index}
              className={`${carte.couleur} p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300`}
            >
              <h2 className="text-xl font-semibold mb-5 text-gray-900">{carte.titre}</h2>
              <p className="text-gray-900 text-sm text-justify">{carte.contenu}</p>
            </div>
          ))}
        </div>
  
       
        <section className="mt-15">
          <h2 className="text-xl font-semibold mb-2 text-gray-900">Un accompagnement personnalisé</h2>
          <p>
            Pour répondre à ces enjeux, <strong>Oursons et Compagnie</strong> vous accompagne dans votre démarche crèche pour trouver avec vous des solutions efficaces.
          </p>
        </section>
      </div>
    );
  };
  
  export default WhyADaycare;
  