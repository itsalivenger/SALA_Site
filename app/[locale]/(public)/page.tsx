import Hero from "@/components/Hero/Hero";
import ServicesPreview from "@/components/ServicesPreview/ServicesPreview";
import ZigZagFeatures from "@/components/ZigZagFeatures/ZigZagFeatures";
import AppShowcase from "@/components/AppShowcase/AppShowcase";
import Stats from "@/components/Stats/Stats";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ServicesPreview />
      <ZigZagFeatures />
      <AppShowcase />
      <Stats />
      <HowItWorks />
      <Testimonials />
    </div>
  );
}
