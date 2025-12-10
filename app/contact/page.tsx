import ContactHero from "@/components/public/contact/ContactHero";
import ContactInfo from "@/components/public/contact/ContactInfo";
import ContactForm from "@/components/public/contact/ContactForm";
import ContactMap from "@/components/public/contact/ContactMap";

export const metadata = {
    title: "Contactez-Nous - Sala",
    description: "Entrez en contact avec l'équipe Sala. Nous sommes là pour répondre à vos questions et discuter de vos besoins logistiques.",
};

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
