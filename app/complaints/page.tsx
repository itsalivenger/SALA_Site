import ComplaintsHero from "@/components/public/complaints/ComplaintsHero";
import ComplaintsForm from "@/components/public/complaints/ComplaintsForm";

export const metadata = {
    title: "Réclamations - Sala",
    description: "Signalez un problème avec une commande ou un service. Nous prenons vos retours très au sérieux.",
};

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
