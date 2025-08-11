import HeroSection from "@/components/HeroSection";
import DiscordSection from "@/components/discord/DiscordSection";
import GamesSection from "@/components/games/GamesSection";
import CalendarSection from "@/components/CalendarSection";
import DiscordSupport from "@/components/discord/DiscordSupport";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
const Index: React.FC = () => {
  return <div className="min-h-screen bg-white flex flex-col">
      <HeroSection />
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="text-center">
              <p className="text-red-600 font-bold text-4xl">
                Дата обновления сайта: 12:45 (МСК) 11.08.2025
              </p>
            </div>
          </div>
        </div>
      </section>
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