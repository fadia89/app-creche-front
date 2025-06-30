import "../../styles/main.scss";

const WhyADaycare = () => {
  const cartes = [
    {
      titre: "Répondre aux besoins des familles",
      contenu:
        "Seules 18 % des familles obtiennent une place en crèche, alors que près de 30 % des parents d’enfants de moins de 3 ans souhaitent ce mode de garde. Offrir une structure d’accueil adaptée permet de répondre à cette demande croissante.",
      couleur: "indigo",
    },
    {
      titre: "Attirer de nouveaux habitants",
      contenu:
        "Comme pour l’école, l’offre de garde influence les choix résidentiels. Une crèche de qualité est un véritable argument pour séduire de jeunes familles désireuses de s’installer dans une commune.",
      couleur: "rose",
    },
    {
      titre: "Réduire les inégalités sociales",
      contenu:
        "Les crèches favorisent l’égalité des chances dès la petite enfance. Elles accueillent tous les enfants sans distinction, devenant ainsi des leviers importants de mixité sociale et de développement.",
      couleur: "emerald",
    },
  ];

  return (
    <div className="whyadaycare-container">
      <h1 className="section-title">Pourquoi une crèche ?</h1>

      <div className="cards-container">
        {cartes.map((carte, index) => (
          <div key={index} className={`carte ${carte.couleur}`}>
            <h2 className="carte-titre">{carte.titre}</h2>
            <p className="carte-contenu">{carte.contenu}</p>
          </div>
        ))}
      </div>

      <section className="accompagnement">
        <h2 className="accompagnement-titre">Un accompagnement personnalisé</h2>
        <p>
          Pour répondre à ces enjeux, <strong>Oursons et Compagnie</strong> vous accompagne dans votre
          démarche crèche pour trouver avec vous des solutions efficaces.
        </p>
      </section>
    </div>
  );
};

export default WhyADaycare;
