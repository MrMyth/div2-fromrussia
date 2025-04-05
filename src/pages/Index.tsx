
import HeroSection from "@/components/HeroSection";
import DiscordSection from "@/components/DiscordSection";
import GamesSection from "@/components/GamesSection";
import CreatorsSection from "@/components/CreatorsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-grow">
        <HeroSection />
        <div id="discord">
          <DiscordSection />
        </div>
        <div id="creators">
          <CreatorsSection />
        </div>
        <div id="games">
          <GamesSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
