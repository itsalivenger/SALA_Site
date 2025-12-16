import ComplaintsHero from "@/components/ComplaintsHero/ComplaintsHero";
import ComplaintsForm from "@/components/ComplaintsForm/ComplaintsForm";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'ComplaintsMetadata' });

    return {
        title: t('title'),
        description: t('description')
    };
}

export default function ComplaintsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <ComplaintsHero />
            <section className="pb-24 px-4 sm:px-6 lg:px-8">
                <ComplaintsForm />
            </section>
        </div>
    );
}
