
import { SkillKartNavigation } from "@/components/SkillKartNavigation";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import RoadmapsSection from "@/components/landing/RoadmapsSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SkillKartNavigation />
      
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <RoadmapsSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
