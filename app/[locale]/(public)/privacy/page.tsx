import LegalDocument from "@/components/LegalDocument/LegalDocument";
import { getTranslations } from 'next-intl/server';
import { useTranslations } from "next-intl";

// Note: metadata should be in layout or handled via generateMetadata if we want client component for useTranslations inside the component
// BUT next-intl allows useTranslations in Server Components too if setup correctly, or we make this client.
// However, the previous pattern was Client Component imports usually.
// Let's check: PrivacyPage uses LegalDocument which is "use client".
// PrivacyPage itself can be Server Component.
// BUT we need `useTranslations`.
// So I will make a separate Client Component for the content OR make this page simpler.
// Actually, I can allow PrivacyPage to be Server Component and fetch translations there.

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'PrivacyPage' });
    return {
        title: t('title'),
        description: t('description')
    };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    // We can use getTranslations on server side
    const t = await getTranslations({ locale, namespace: 'PrivacyPage' });

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
                <ul className="list-disc pl-5 space-y-2 mt-4">
                    <li dangerouslySetInnerHTML={{ __html: t.raw('section2_list_1') }} />
                    <li dangerouslySetInnerHTML={{ __html: t.raw('section2_list_2') }} />
                    <li dangerouslySetInnerHTML={{ __html: t.raw('section2_list_3') }} />
                    <li dangerouslySetInnerHTML={{ __html: t.raw('section2_list_4') }} />
                </ul>
            </section>

            <section className="mb-8">
                <h2>{t('section3_title')}</h2>
                <p>{t('section3_content')}</p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                    <li>{t('section3_list_1')}</li>
                    <li>{t('section3_list_2')}</li>
                    <li>{t('section3_list_3')}</li>
                    <li>{t('section3_list_4')}</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2>{t('section4_title')}</h2>
                <p>{t('section4_content')}</p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                    <li dangerouslySetInnerHTML={{ __html: t.raw('section4_list_1') }} />
                    <li dangerouslySetInnerHTML={{ __html: t.raw('section4_list_2') }} />
                    <li dangerouslySetInnerHTML={{ __html: t.raw('section4_list_3') }} />
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
        </LegalDocument>
    );
}
