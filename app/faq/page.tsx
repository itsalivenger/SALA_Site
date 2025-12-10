import FAQHero from "@/components/FaqHero/FAQHero";
import FAQList from "@/components/FaqList/FAQList";

export const metadata = {
    title: "FAQ - Sala",
    description: "Réponses aux questions les plus fréquentes sur l'utilisation de Sala, les livraisons, le transport et les paiements.",
};

export default function FAQPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <FAQHero />
            <FAQList />
        </div>
    );
}
