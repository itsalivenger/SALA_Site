import DownloadHero from "@/components/DownloadHero/DownloadHero";
import AppFeatures from "@/components/AppFeatures/AppFeatures";
import QRCodeSection from "@/components/QRCodeSection/QRCodeSection";

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
