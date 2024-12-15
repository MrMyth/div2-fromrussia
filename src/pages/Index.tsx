import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import JoinSection from "@/components/JoinSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <JoinSection />
    </div>
  );
};

export default Index;