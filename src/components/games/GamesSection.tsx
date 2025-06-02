
import GamesList from "./GamesList";
import BotSection from "../BotSection";
import RaidGuides from "../RaidGuides";
import ResourcesList from "../resources/ResourcesList";
import ComplaintForm from "../ComplaintForm";
import CreatorsSection from "../CreatorsSection";
import { Gamepad, HelpCircle, Link, Youtube, ShoppingCart } from "lucide-react";

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

        <div className="mt-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-[#F97316] mb-4 flex items-center justify-center text-center">
              <ShoppingCart className="w-6 h-6 mr-2" />
              Как купить инструкцию по приобретению китайской версию игры?
              <span className="ml-2 px-2 py-1 bg-[#F97316] text-white text-sm rounded-full">750 ₽</span>
            </h3>
            <div className="bg-gray-50 p-6 rounded-lg max-w-3xl mx-auto">
              <ol className="text-gray-800 space-y-2 pl-5 list-decimal">
                <li>Зайти на наш Discord сервер</li>
                <li>Связаться с MrMyth92 на нашем сервере и запросить инструкцию</li>
              </ol>
            </div>
          </div>
        </div>
        
        <div id="bot" className="mt-8">
          <BotSection />
        </div>

        <div id="raids" className="mt-8">
          <RaidGuides />
        </div>

        <div id="channels" className="mt-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="catchphrase text-center mb-8 flex items-center justify-center">
              <Youtube className="w-6 h-6 mr-2 text-[#F97316]" />
              Наши каналы
            </h3>
            <CreatorsSection />
          </div>
        </div>
        
        <div id="complaint" className="mt-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-[#F97316] text-center mb-8 flex items-center justify-center">
              <HelpCircle className="w-6 h-6 mr-2 text-[#F97316]" />
              Жалоба на игрока
            </h3>
            <ComplaintForm />
          </div>
        </div>

        <div id="resources" className="mt-8">
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
