import ServicesList from "@/components/ServicesList/ServicesList";
import ServiceCTA from "@/components/ServiceCTA/ServiceCTA";
import BusinessSolutions from "@/components/BusinessSolutions/BusinessSolutions";
import ServiceProcess from "@/components/ServiceProcess/ServiceProcess";
import ServicesHero from "@/components/ServicesHero/ServicesHero";

export const metadata = {
    title: "Nos Services - Sala",
    description: "Explorez notre large gamme de services de livraison, de transport et de logistique disponibles sur l'application Sala.",
};

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
