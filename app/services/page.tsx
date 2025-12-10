import ServicesList from "@/components/public/services/ServicesList";
import ServiceCTA from "@/components/public/services/ServiceCTA";
import BusinessSolutions from "@/components/public/services/BusinessSolutions";
import ServiceProcess from "@/components/public/services/ServiceProcess";

export const metadata = {
    title: "Nos Services - Sala",
    description: "Explorez notre large gamme de services de livraison, de transport et de logistique disponibles sur l'application Sala.",
};

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen pt-16">
            <ServicesList />
            <BusinessSolutions />
            <ServiceProcess />
            <ServiceCTA />
        </div>
    );
}
