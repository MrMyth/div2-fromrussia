
import GamesList from "./GamesList";
import ChineseVersionSection from "../ChineseVersionSection";
import RaidGuides from "../RaidGuides";
import ResourcesList from "../resources/ResourcesList";
import ComplaintForm from "../ComplaintForm";
import CreatorsSection from "../CreatorsSection";
import { Gamepad, HelpCircle, Link, Youtube, BookOpen } from "lucide-react";

const GamesSection: React.FC = () => {
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

        <div id="chinese-version" className="mt-8">
          <ChineseVersionSection />
        </div>

        <div id="raids" className="mt-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#F97316] text-center mb-8 flex items-center justify-center">
              <BookOpen className="w-6 h-6 mr-2 text-[#F97316]" />
              Азбуки рейдов
            </h2>
            <RaidGuides />
          </div>
        </div>

        <div id="channels" className="mt-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#F97316] text-center mb-8 flex items-center justify-center">
              <Youtube className="w-6 h-6 mr-2 text-[#F97316]" />
              Наши каналы
            </h2>
            <CreatorsSection />
          </div>
        </div>
        
        <div id="complaint" className="mt-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#F97316] text-center mb-8 flex items-center justify-center">
              <HelpCircle className="w-6 h-6 mr-2 text-[#F97316]" />
              Жалоба на игрока
            </h2>
            <ComplaintForm />
          </div>
        </div>

        <div id="resources" className="mt-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#F97316] text-center mb-8 flex items-center justify-center">
              <Link className="w-6 h-6 mr-2 text-[#F97316]" />
              Полезные ресурсы
            </h2>
            <ResourcesList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
