import AboutHero from "@/components/AboutHero/AboutHero";
import MissionVision from "@/components/MissionVision/MissionVision";
import Team from "@/components/Team/Team";
import OurStory from "@/components/OurStory/OurStory";
import CoreValues from "@/components/CoreValues/CoreValues";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'AboutMetadata' });

    return {
        title: t('title'),
        description: t('description')
    };
}

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <AboutHero />
            <MissionVision />
            <OurStory />
            <CoreValues />
            <Team />
        </div>
    );
}
