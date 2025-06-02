
import { heavyTimesImages, ironHorseImages } from "@/data/slideshowImages";
import RaidSlideshow from "./RaidSlideshow";
import { BookOpen, Clock } from "lucide-react";

const ChessKnightIcon = () => (
  <svg 
    className="w-6 h-6 mr-2 text-[#F97316]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 16l-1.447.724a1 1 0 00-.553.894V20h12v-2.382a1 1 0 00-.553-.894L16 16H8z"/>
    <path d="M8 16l1-9h6l1 9"/>
    <path d="M9 7l1 2h4l1-2"/>
  </svg>
);

const RaidGuides = () => {
  return (
    <div>
      <p className="text-gray-700 mb-8 w-full text-center">
        Кликни на картинку, чтобы увеличить слайдшоу. После увеличения слайдшоу ты можешь перемещаться между слайдами. Для этого используй стрелки по бокам или же стрелки на клавиатуре.
      </p>
      <div className="space-y-12">
        <div>
          <h3 className="subheading text-center mb-6 flex items-center justify-center">
            <Clock className="w-6 h-6 mr-2 text-[#F97316]" />
            Азбука рейда "Тяжелые времена"
          </h3>
          <RaidSlideshow images={heavyTimesImages} />
        </div>
        
        <div>
          <h3 className="subheading text-center mb-6 flex items-center justify-center">
            <ChessKnightIcon />
            Азбука рейда "Железный конь"
          </h3>
          <RaidSlideshow images={ironHorseImages} />
        </div>
      </div>
    </div>
  );
};

export default RaidGuides;
