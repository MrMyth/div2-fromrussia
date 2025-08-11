import HeroSection from "@/components/HeroSection";
import DiscordSection from "@/components/discord/DiscordSection";
import GamesSection from "@/components/games/GamesSection";
import CalendarSection from "@/components/CalendarSection";
import DiscordSupport from "@/components/discord/DiscordSupport";
import Footer from "@/components/Footer";
const Index: React.FC = () => {
  return <div className="min-h-screen bg-white flex flex-col">
      <HeroSection />
      <div className="bg-white py-2 text-center">
        <p className="text-red-600 font-bold text-4xl">
          Дата обновления сайта: 12:45 (МСК) 11.08.2025
        </p>
      </div>
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
        <section id="support">
          <DiscordSupport />
        </section>
      </main>
      <Footer />
    </div>;
};
export default Index;