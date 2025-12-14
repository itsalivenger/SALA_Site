import LegalDocument from "@/components/LegalDocument/LegalDocument";

export const metadata = {
    title: "Conditions Générales d'Utilisation - Sala",
    description: "Les règles et conditions régissant l'utilisation de la plateforme Sala.",
};

export default function TermsPage() {
    return (
        <LegalDocument title="Conditions Générales d'Utilisation" updateDate="10 Décembre 2024">
            <section className="mb-8">
                <h2>1. Acceptation des conditions</h2>
                <p>
                    En téléchargeant ou en utilisant l'application Sala, vous acceptez d'être lié par ces conditions. Si vous n'acceptez pas ces termes, veuillez ne pas utiliser nos services.
                </p>
            </section>

            <section className="mb-8">
                <h2>2. Services</h2>
                <p>
                    Sala est une plateforme technologique facilitant la mise en relation entre des utilisateurs cherchant des services de logistique/transport et des prestataires indépendants (chauffeurs/livreurs). Sala ne fournit pas directement de services de transport.
                </p>
            </section>

            <section className="mb-8">
                <h2>3. Compte Utilisateur</h2>
                <p>
                    Pour utiliser la plupart des fonctionnalités, vous devez créer un compte. Vous êtes responsable de la confidentialité de vos identifiants et de toutes les activités effectuées sous votre compte.
                </p>
            </section>

            <section className="mb-8">
                <h2>4. Comportement de l'utilisateur</h2>
                <p>Vous vous engagez à :</p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                    <li>Utiliser les services uniquement à des fins légales.</li>
                    <li>Ne pas causer de nuisances ou de dommages aux prestataires tiers.</li>
                    <li>Ne pas utiliser l'application pour transporter des marchandises illégales ou dangereuses.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2>5. Paiements</h2>
                <p>
                    Les tarifs sont indiqués dans l'application avant la commande. Vous acceptez de payer tous les frais associés aux services que vous demandez. Sala se réserve le droit de modifier les tarifs à tout moment.
                </p>
            </section>

            <section className="mb-8">
                <h2>6. Responsabilité</h2>
                <p>
                    Dans les limites permises par la loi, Sala ne pourra être tenue responsable des dommages indirects, accessoires ou consécutifs résultant de l'utilisation des services.
                </p>
            </section>

            <section className="mb-8">
                <h2>7. Modifications</h2>
                <p>
                    Nous pouvons mettre à jour ces conditions de temps à autre. Les modifications entreront en vigueur dès leur publication sur cette page.
                </p>
            </section>

            <section className="mb-8">
                <h2>8. Contact</h2>
                <p>
                    Pour toute question concernant ces conditions, veuillez nous contacter à legal@sala.dz.
                </p>
            </section>
        </LegalDocument>
    );
}
