const LegalNotices = () => {
    return (

        <div className="max-w-5xl mx-auto my-12 px-6 py-10 bg-gray-100 rounded-lg shadow text-gray-800">

            <h1 className="text-3xl font-bold mb-8 text-center border-b border-gray-300 pb-4">
                Mentions légales
            </h1>

            <div className="space-y-8 text-sm sm:text-base leading-relaxed">
                <section>
                    <h2 className="text-xl font-semibold mb-2 text-gray-900">Conditions d’utilisation</h2>
                    <p>
                        L’utilisation de ce site Internet vaut acceptation des conditions mentionnées ci-après. Toute reproduction, diffusion ou modification sans autorisation écrite est interdite.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2 text-gray-900">Emblèmes et identité</h2>
                    <p>
                        Les noms, logos et éléments visuels sont protégés. Toute utilisation non autorisée constitue une violation.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2 text-gray-900">Droits d’auteur</h2>
                    <p>
                        Toute reproduction du contenu à des fins commerciales ou publiques est interdite sans autorisation.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2 text-gray-900">Liens hypertextes</h2>
                    <p>
                        Ce site peut contenir des liens externes. Nous ne garantissons pas leur exactitude ou leur sécurité.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2 text-gray-900">Protection des données personnelles</h2>
                    <p>
                        Voir notre <a href="/politique-donnees" className="underline text-gray-700 hover:text-gray-900">politique de confidentialité</a>.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2 text-gray-900">Cookies</h2>
                    <p>
                        Ce site utilise des cookies. Vous pouvez les gérer dans les paramètres de votre navigateur.
                    </p>
                    <p>
                        En savoir plus dans notre <a href="/politique-cookies" className="underline text-gray-700 hover:text-gray-900">politique d’utilisation des cookies</a>.
                    </p>
                </section>

                <section className="border-t pt-6">
                    <h2 className="text-xl font-semibold mb-2 text-gray-900">Éditeur du site</h2>
                    <p><strong>Nom :</strong> Crèche Oursons et Compagnie</p>
                    <p><strong>Statut :</strong> Association Loi 1901</p>
                    <p><strong>Adresse :</strong> 230 rue de Créqui 69003 Lyon</p>
                    <p><strong>Téléphone :</strong> +33 4 82 53 33 23</p>
                    <p><strong>Email :</strong> creche.lesoursons@gmail.com</p>
                    <p className="mt-2"><strong>Directeur de la publication :</strong> GUELBI Fadia</p>
                    <p className="mt-2"><strong>Hébergement :</strong> Amazon Web Services EMEA SARL, Luxembourg</p>
                </section>
                
                <div className="w-full flex justify-center mb-4">
                    <img
                        src="/images/oursons-et-cie.webp"
                        alt="Ourson"
                        className="w-24 h-24 "
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

export default LegalNotices;
