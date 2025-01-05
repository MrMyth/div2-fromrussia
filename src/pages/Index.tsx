import HeroSection from "@/components/HeroSection";
import DiscordSection from "@/components/DiscordSection";
import GamesSection from "@/components/GamesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-grow">
        <HeroSection />
        <div id="discord">
          <DiscordSection />
        </div>
        <div id="games">
          <GamesSection />
        </div>
      </div>
      <footer className="bg-[#F97316] text-white py-6 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold">[RUS] FROM RUSSIA</p>
              <p className="text-sm">Игровой Discord сервер</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;