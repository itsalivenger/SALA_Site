import AboutHero from "@/components/AboutHero/AboutHero";
import MissionVision from "@/components/MissionVision/MissionVision";
import Team from "@/components/Team/Team";
import OurStory from "@/components/OurStory/OurStory";
import CoreValues from "@/components/CoreValues/CoreValues";

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
