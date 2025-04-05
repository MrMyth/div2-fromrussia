
import GameSlideshow from "./GameSlideshow";
import GameSlideshow2 from "./GameSlideshow2";
import { BookOpen } from "lucide-react";

const RaidGuides = () => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
      <h3 className="catchphrase text-center mb-8 flex items-center justify-center">
        <BookOpen className="w-6 h-6 mr-2 text-[#F97316]" />
        Азбуки рейдов
      </h3>
      <p className="text-gray-700 mb-8 w-full text-center">
        Кликни на картинку, чтобы увеличить слайдшоу. После увеличения слайдшоу ты можешь перемещаться между слайдами. Для этого используй стрелки по бокам или же стрелки на клавиатуре.
      </p>
      <div className="space-y-8">
        <div>
          <h4 className="subheading text-center mb-4">Азбука рейда "Тяжелые времена"</h4>
          <GameSlideshow />
        </div>
        
        <div>
          <h4 className="subheading text-center mb-4">Азбука рейда "Железный конь"</h4>
          <GameSlideshow2 />
        </div>
      </div>
    </div>
  );
};

export default RaidGuides;
