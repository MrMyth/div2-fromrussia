
import { Target } from "lucide-react";

const DiscordGoals: React.FC = () => {
  return (
    <section>
      <h2 className="subheading text-center mb-6 flex items-center justify-center gap-2">
        <Target className="w-6 h-6 text-[#F97316]" />
        Цели сервера
      </h2>
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="space-y-4">
          <p className="text-gray-700 text-center">
            Наша основная цель — набрать 1000 участников, чтобы попасть в каталог Discord серверов и стать еще более популярными!
          </p>
        </div>
      </div>
    </section>
  );
};

export default DiscordGoals;
