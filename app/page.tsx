import Hero from "@/components/public/Hero";
import ServicesPreview from "@/components/public/ServicesPreview";
import HowItWorks from "@/components/public/HowItWorks";
import Testimonials from "@/components/public/Testimonials";
import Stats from "@/components/public/home/Stats";
import Partners from "@/components/public/home/Partners";
import AppShowcase from "@/components/public/home/AppShowcase";

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
