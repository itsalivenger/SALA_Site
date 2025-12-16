import FAQHero from "@/components/FaqHero/FAQHero";
import FAQList from "@/components/FaqList/FAQList";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'FAQMetadata' });

    return {
        title: t('title'),
        description: t('description')
    };
}

export default function FAQPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <FAQHero />
            <FAQList />
        </div>
    );
}
