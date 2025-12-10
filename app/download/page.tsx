import DownloadHero from "@/components/public/download/DownloadHero";
import AppFeatures from "@/components/public/download/AppFeatures";
import QRCodeSection from "@/components/public/download/QRCodeSection";

export const metadata = {
    title: "Télécharger l'App - Sala",
    description: "Téléchargez l'application Sala pour iOS et Android. Livraison, VTC et services à la demande dans une seule application.",
};

export default function DownloadPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <DownloadHero />
            <AppFeatures />
            <QRCodeSection />
        </div>
    );
}
