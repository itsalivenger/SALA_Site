import LegalDocument from "@/components/public/legal/LegalDocument";

export const metadata = {
    title: "Politique de Confidentialité - Sala",
    description: "Comment Sala collecte, utilise et protège vos données personnelles.",
};

export default function PrivacyPage() {
    return (
        <LegalDocument title="Politique de Confidentialité" updateDate="10 Décembre 2024">
            <section className="mb-8">
                <h2>1. Introduction</h2>
                <p>
                    Chez Sala, nous prenons votre vie privée très au sérieux. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous utilisez notre application mobile et notre site web.
                </p>
            </section>

            <section className="mb-8">
                <h2>2. Informations que nous collectons</h2>
                <p>Nous collectons les types d'informations suivants pour fournir et améliorer nos services :</p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                    <li><strong>Informations personnelles :</strong> Nom, adresse email, numéro de téléphone, adresse de livraison.</li>
                    <li><strong>Données de localisation :</strong> Pour permettre le suivi des livraisons et des trajets en temps réel.</li>
                    <li><strong>Données de transaction :</strong> Détails des commandes, historique des achats et informations de paiement.</li>
                    <li><strong>Informations techniques :</strong> Type d'appareil, adresse IP, système d'exploitation.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2>3. Utilisation de vos données</h2>
                <p>Vos données sont utilisées pour :</p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                    <li>Traiter et livrer vos commandes.</li>
                    <li>Gérer votre compte et fournir un support client.</li>
                    <li>Améliorer nos services et développer de nouvelles fonctionnalités.</li>
                    <li>Vous envoyer des mises à jour importantes et des offres promotionnelles (avec votre consentement).</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2>4. Partage des données</h2>
                <p>
                    Nous ne vendons pas vos données personnelles. Nous pouvons partager vos informations avec :
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                    <li><strong>Les chauffeurs partenaires :</strong> Pour effectuer la livraison ou le transport.</li>
                    <li><strong>Les prestataires de services :</strong> Pour le traitement des paiements et l'hébergement des données.</li>
                    <li><strong>Les autorités légales :</strong> Si la loi l'exige.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2>5. Sécurité</h2>
                <p>
                    Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données contre l'accès non autorisé, la modification ou la destruction.
                </p>
            </section>

            <section className="mb-8">
                <h2>6. Vos droits</h2>
                <p>
                    Vous avez le droit d'accéder, de corriger ou de supprimer vos données personnelles. Vous pouvez exercer ces droits directement dans les paramètres de l'application ou en nous contactant à privacy@sala.dz.
                </p>
            </section>
        </LegalDocument>
    );
}
