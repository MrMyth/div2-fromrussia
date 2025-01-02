import HeroSection from "@/components/HeroSection";
import DiscordSection from "@/components/DiscordSection";
import GamesSection from "@/components/GamesSection";
import ResourcesList from "@/components/ResourcesList";
import CreatorsSection from "@/components/CreatorsSection";
import ComplaintForm from "@/components/ComplaintForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-grow">
        <HeroSection />
        <div id="discord" className="bg-white">
          <DiscordSection />
        </div>
        <div id="games" className="border border-black bg-white">
          <GamesSection />
        </div>
        <div id="raids" className="border border-black bg-white">
          <div className="container mx-auto px-4 py-16">
            <h3 className="catchphrase text-center mb-8">Азбуки рейдов</h3>
            {/* Raid content from GamesSection */}
          </div>
        </div>
        <div id="resources" className="border border-black bg-white">
          <div className="container mx-auto px-4 py-16">
            <ResourcesList />
          </div>
        </div>
        <div id="channels" className="border border-black bg-white">
          <div className="container mx-auto px-4 py-16">
            <CreatorsSection />
          </div>
        </div>
        <div id="complaint" className="border border-black bg-white">
          <div className="container mx-auto px-4 py-16">
            <ComplaintForm />
          </div>
        </div>
      </div>
      <footer className="bg-[#F97316] text-white py-6 mt-auto">
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