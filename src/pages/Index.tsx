import HeroSection from "@/components/HeroSection";
import DiscordSection from "@/components/DiscordSection";
import GamesSection from "@/components/GamesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <DiscordSection />
      <GamesSection />
    </div>
  );
};

export default Index;