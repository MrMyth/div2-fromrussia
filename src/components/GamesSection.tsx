
import GamesList from "./GamesList";
import RaidGuides from "./RaidGuides";
import ResourcesList from "./ResourcesList";
import ComplaintForm from "./ComplaintForm";
import CreatorsSection from "./CreatorsSection";
import { MessageSquare, Gamepad, HelpCircle, Link, Youtube } from "lucide-react";

const GamesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div id="games">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#F97316] text-center mb-8 flex items-center justify-center">
              <Gamepad className="w-6 h-6 mr-2 text-[#F97316]" />
              Игры
            </h2>
            <GamesList />
          </div>
        </div>
        
        <div id="raids" className="mt-16">
          <RaidGuides />
        </div>

        <div id="channels" className="mt-16">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="catchphrase text-center mb-8 flex items-center justify-center">
              <Youtube className="w-6 h-6 mr-2 text-[#F97316]" />
              Наши каналы
            </h3>
            <CreatorsSection />
          </div>
        </div>
        
        <div id="complaint" className="mt-16">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-[#F97316] text-center mb-8 flex items-center justify-center">
              <HelpCircle className="w-6 h-6 mr-2 text-[#F97316]" />
              Жалоба на игрока
            </h3>
            <ComplaintForm />
          </div>
        </div>

        <div id="resources" className="mt-16">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-[#F97316] text-center mb-8 flex items-center justify-center">
              <Link className="w-6 h-6 mr-2 text-[#F97316]" />
              Полезные ресурсы
            </h3>
            <ResourcesList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
