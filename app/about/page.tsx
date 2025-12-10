import AboutHero from "@/components/public/about/AboutHero";
import MissionVision from "@/components/public/about/MissionVision";
import Team from "@/components/public/about/Team";
import OurStory from "@/components/public/about/OurStory";
import CoreValues from "@/components/public/about/CoreValues";

export const metadata = {
    title: "À Propos - Sala",
    description: "En savoir plus sur la mission, la vision de Sala et l'équipe qui pilote la révolution logistique.",
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <AboutHero />
            <MissionVision />
            <OurStory />
            <CoreValues />
            <Team />
        </div>
    );
}
