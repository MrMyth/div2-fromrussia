
import { Target } from "lucide-react";

const DiscordGoals: React.FC = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-6 text-center flex items-center justify-center gap-2 text-[#F97316]">
        <Target className="w-6 h-6 text-[#F97316]" />
        Цели сервера
      </h2>
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-[#F97316] h-2.5 rounded-full" 
                style={{ width: '50%' }}
              ></div>
            </div>
            <span className="ml-2 text-gray-700 font-medium">500/1000</span>
          </div>
          <p className="text-gray-700">
            Наша основная цель — набрать 1000 участников, чтобы попасть в каталог Discord серверов и стать еще более популярными!
          </p>
        </div>
      </div>
    </section>
  );
};

export default DiscordGoals;
