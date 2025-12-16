import ContactHero from "@/components/ContactHero/ContactHero";
import ContactInfo from "@/components/ContactInfo/ContactInfo";
import ContactForm from "@/components/ContactForm/ContactForm";
import ContactMap from "@/components/ContactMap/ContactMap";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'ContactMetadata' });

    return {
        title: t('title'),
        description: t('description')
    };
}

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <ContactHero />
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
                        <div className="lg:col-span-1">
                            <ContactInfo />
                        </div>
                        <div className="lg:col-span-2">
                            <ContactForm />
                        </div>
                    </div>

                    <div className="mt-16">
                        <ContactMap />
                    </div>
                </div>
            </section>
        </div>
    );
}
