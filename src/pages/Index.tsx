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
          <div className="rounded-2xl border-2 border-[#F97316] bg-gradient-to-br from-[#F97316]/5 to-[#F97316]/10 p-6 shadow-lg">
            <div className="text-center">
              <p className="text-[#F97316] font-bold text-3xl md:text-4xl">
                Дата обновления сайта: 09.11.2025 в 21:11 (МСК)
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