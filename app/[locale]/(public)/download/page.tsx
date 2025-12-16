import DownloadHero from "@/components/DownloadHero/DownloadHero";
import AppFeatures from "@/components/AppFeatures/AppFeatures";
import QRCodeSection from "@/components/QRCodeSection/QRCodeSection";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'DownloadMetadata' });

    return {
        title: t('title'),
        description: t('description')
    };
}

export default function DownloadPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <DownloadHero />
            <AppFeatures />
            <QRCodeSection />
        </div>
    );
}
