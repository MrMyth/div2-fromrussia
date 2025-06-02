
import HeroSection from "@/components/HeroSection";
import DiscordSection from "@/components/discord/DiscordSection";
import GamesSection from "@/components/games/GamesSection";
import BotSection from "@/components/BotSection";
import CalendarSection from "@/components/CalendarSection";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <HeroSection />
      <main className="flex-grow">
        <section id="discord">
          <DiscordSection />
        </section>
        <section id="games">
          <GamesSection />
        </section>
        <section id="calendar">
          <CalendarSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
