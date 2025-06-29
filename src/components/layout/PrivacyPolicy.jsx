const PrivacyPolicy = () => {
    return (
        <div className="max-w-5xl mx-auto my-12 px-6 py-10 bg-gray-100 rounded-lg shadow text-gray-800">
            <h1 className="text-3xl font-bold text-center mb-8 border-b border-gray-300 pb-4">
                Politique de confidentialité
            </h1>

            <div className="space-y-8 text-sm sm:text-base leading-relaxed">
                <section>
                    <p>
                        Cette politique vous informe sur la façon dont <strong>Oursons et Cie</strong> collecte, utilise et protège vos données personnelles lorsque vous utilisez le site <strong>oursonsetcie.fr</strong>.
                    </p>
                    <p className="mt-2">
                        Nous nous engageons à ce que vos données soient traitées en toute sécurité et confidentialité.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2 text-gray-900">Données collectées</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Nom</li>
                        <li>Prénom</li>
                        <li>Adresse e-mail</li>
                        <li>Numéro de téléphone</li>
                        <li>Cookies de navigation</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2 text-gray-900">Utilisation des données</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Analyse du trafic et des comportements de navigation</li>
                        <li>Traitement des demandes via les formulaires</li>
                        <li>Amélioration du service utilisateur</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2 text-gray-900">Durée de conservation</h2>
                    <p>Les cookies sont conservés pendant 60 jours.</p>
                    <p className="mt-2">
                        Les données personnelles sont conservées pendant 3 ans, renouvelables en cas de contrat actif.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2 text-gray-900">Sécurité des données</h2>
                    <p>
                        Des mesures techniques et organisationnelles sont mises en place pour sécuriser vos données contre tout accès non autorisé.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2 text-gray-900">Responsable du traitement</h2>
                    <p>
                        <strong>Ekaterina Regnard</strong>, présidente de la SARL Oursons et Cie.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2 text-gray-900">Vos droits</h2>
                    <p>
                        Conformément à la loi Informatique et Libertés et au RGPD, vous disposez de droits d’accès, de rectification, de suppression, de portabilité et d’opposition au traitement.
                    </p>
                    <p className="mt-2">
                        Pour exercer vos droits, vous pouvez nous écrire à :{" "}
                        <a
                            href="mailto:contact@creche-oursonsetcompagnie.fr"
                            className="underline text-gray-800 hover:text-black"
                        >
                            creche.lesoursons@gmail.com
                        </a>
                    </p>
                </section>

                <div className="w-full flex justify-center mb-4">
                    <img
                        src="/images/oursons-et-cie.webp"
                        alt="Ourson"
                        className="w-24 h-24"
                    />
                </div>

                <div className="text-center mt-8 print:hidden">
                    <button
                        onClick={() => window.print()}
                        className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
                    >
                        Imprimer cette page
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
