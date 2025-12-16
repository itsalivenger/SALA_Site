import ServicesList from "@/components/ServicesList/ServicesList";
import ServiceCTA from "@/components/ServiceCTA/ServiceCTA";
import BusinessSolutions from "@/components/BusinessSolutions/BusinessSolutions";
import ServiceProcess from "@/components/ServiceProcess/ServiceProcess";
import ServicesHero from "@/components/ServicesHero/ServicesHero";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'ServicesMetadata' });

    return {
        title: t('title'),
        description: t('description')
    };
}

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <ServicesHero />
            <ServicesList />
            <BusinessSolutions />
            <ServiceProcess />
            <ServiceCTA />
        </div>
    );
}
