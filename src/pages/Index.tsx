
import HeroSection from "@/components/HeroSection";
import DiscordSection from "@/components/DiscordSection";
import GamesSection from "@/components/GamesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-grow">
        <HeroSection />
        <section id="discord">
          <DiscordSection />
        </section>
        <section id="games">
          <GamesSection />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
