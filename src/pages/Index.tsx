import HeroSection from "@/components/HeroSection";
import DiscordSection from "@/components/DiscordSection";
import GamesSection from "@/components/GamesSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="absolute inset-0 bg-black/50 z-0" /> {/* Dark overlay for better readability */}
      <div className="flex-grow relative z-10">
        <HeroSection />
        <div id="discord">
          <DiscordSection />
        </div>
        <div id="games">
          <GamesSection />
        </div>
      </div>
      <footer className="bg-[#9b87f5] text-white py-6 mt-auto relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold">FROM RUSSIA</p>
              <p className="text-sm">Игровой Discord сервер</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;