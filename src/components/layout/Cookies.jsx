import React from "react";

const Cookies = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6 text-cyan-600">Politique de Cookies</h1>

      <p className="mb-4">
        Cette page explique comment notre site utilise les cookies afin de vous garantir la meilleure expérience possible.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Qu’est-ce qu’un cookie ?</h2>
      <p className="mb-4">
        Un cookie est un petit fichier texte déposé sur votre appareil (ordinateur, smartphone, etc.) lors de votre navigation sur un site internet. Il permet notamment de mémoriser vos préférences ou votre session utilisateur.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Pourquoi utilisons-nous des cookies ?</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Pour assurer le bon fonctionnement du site</li>
        <li>Pour vous garder connecté(e)</li>
        <li>Pour mesurer l’audience et améliorer nos services (avec votre accord)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Quels types de cookies utilisons-nous ?</h2>
      <table className="table-auto w-full mb-4 border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Type</th>
            <th className="border px-4 py-2">Utilité</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Cookies essentiels</td>
            <td className="border px-4 py-2">Fonctionnement de base du site (connexion, navigation)</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Cookies de session</td>
            <td className="border px-4 py-2">Sauvegarde temporaire de vos informations lors d’une session</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Cookies analytiques*</td>
            <td className="border px-4 py-2">Statistiques anonymes sur l’utilisation du site (Google Analytics)</td>
          </tr>
        </tbody>
      </table>
      <p className="text-sm italic mb-4">*Ces cookies ne sont utilisés qu’avec votre consentement explicite.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Comment gérer les cookies ?</h2>
      <p className="mb-4">
        Vous pouvez gérer vos préférences via les paramètres de votre navigateur, ou refuser les cookies non essentiels lors de votre première visite.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Durée de conservation</h2>
      <p className="mb-4">
        Les cookies sont conservés pour une durée maximale de 12 mois, selon leur nature, sauf si vous les supprimez manuellement.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Contact</h2>
      <p>
        Pour toute question concernant notre utilisation des cookies, vous pouvez nous contacter via la page{" "}
        <a href="/contact" className="text-blue-600 underline">Contact</a>.
      </p>
    </div>
  );
};

export default Cookies;
