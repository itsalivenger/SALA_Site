import Hero from "@/components/Hero/Hero";
import ServicesPreview from "@/components/ServicesPreview/ServicesPreview";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Testimonials from "@/components/Testimonials/Testimonials";
import Stats from "@/components/Stats/Stats";
import Partners from "@/components/Partners/Partners";
import AppShowcase from "@/components/AppShowcase/AppShowcase";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ServicesPreview />
      <AppShowcase />
      <Stats />
      <HowItWorks />
      <Testimonials />
    </div>
  );
}
