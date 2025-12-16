import LegalDocument from "@/components/LegalDocument/LegalDocument";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'TermsPage' });
    return {
        title: t('title'),
        description: t('description')
    };
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'TermsPage' });

    // Hardcoded date for now
    const updateDate = new Date('2024-12-10');

    return (
        <LegalDocument title={t('title')} updateDate={updateDate}>
            <section className="mb-8">
                <h2>{t('section1_title')}</h2>
                <p>{t('section1_content')}</p>
            </section>

            <section className="mb-8">
                <h2>{t('section2_title')}</h2>
                <p>{t('section2_content')}</p>
            </section>

            <section className="mb-8">
                <h2>{t('section3_title')}</h2>
                <p>{t('section3_content')}</p>
            </section>

            <section className="mb-8">
                <h2>{t('section4_title')}</h2>
                <p>{t('section4_content')}</p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                    <li>{t('section4_list_1')}</li>
                    <li>{t('section4_list_2')}</li>
                    <li>{t('section4_list_3')}</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2>{t('section5_title')}</h2>
                <p>{t('section5_content')}</p>
            </section>

            <section className="mb-8">
                <h2>{t('section6_title')}</h2>
                <p>{t('section6_content')}</p>
            </section>

            <section className="mb-8">
                <h2>{t('section7_title')}</h2>
                <p>{t('section7_content')}</p>
            </section>

            <section className="mb-8">
                <h2>{t('section8_title')}</h2>
                <p>{t('section8_content')}</p>
            </section>
        </LegalDocument>
    );
}
