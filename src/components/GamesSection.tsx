import GameSlideshow from "./GameSlideshow";
import GameSlideshow2 from "./GameSlideshow2";
import { Button } from "./ui/button";
import { Youtube, Link, Store, AlertOctagon, Map, Clock } from "lucide-react";

const GamesSection = () => {
  const games = [
    "Tom Clancy's The Division 2",
    "Tom Clancy's The Division 2 (Китайская версия)",
    "Tom Clancy's The Division 1",
    "Tom Clancy's Ghost Recon: Wildlands",
    "Tom Clancy's Ghost Recon Breakpoint"
  ];

  const resources = [
    { name: "Товары недели", url: "https://division.inot.pro/", icon: Store },
    { name: "Известные ошибки игры (английский)", url: "https://trello.com/b/F2RU9ia9/the-division-2-known-issues", icon: AlertOctagon },
    { name: "Известные ошибки (русский)", url: "https://ru.yougile.com/board/zyy6vkmc28pb", icon: AlertOctagon },
    { name: "Интерактивная карта игры", url: "https://division2map.com/", icon: Map },
    { name: "Таймеры игры", url: "https://divisiontimers.com/#/", icon: Clock }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-[#F97316] text-center mb-8">Наши игры</h2>
        <ul className="space-y-4 max-w-2xl mx-auto">
          {games.map((game, index) => (
            <li 
              key={index}
              className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <span className="text-[#F97316] font-medium">{index + 1}.</span>
              <span className="text-gray-800">{game}</span>
            </li>
          ))}
        </ul>
        
        <div className="text-center mt-12">
          <h3 className="text-xl font-bold text-[#F97316] mb-6">Азбуки рейдов</h3>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
            Кликни на картинку, чтобы увеличить слайдшоу. После увеличения слайдшоу ты можешь перемещаться между слайдами. Для этого используй стрелки по бокам или же стрелки на клавиатуре.
          </p>
          <h4 className="text-lg font-semibold text-[#F97316] mb-4">Азбука рейда "Тяжелые времена"</h4>
        </div>
        <GameSlideshow />
        
        <div className="text-center mt-12">
          <h4 className="text-lg font-semibold text-[#F97316] mb-4">Азбука рейда "Железный конь"</h4>
        </div>
        <GameSlideshow2 />

        <div className="mt-16">
          <h3 className="text-xl font-bold text-[#F97316] text-center mb-8">Полезные ресурсы</h3>
          <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
            {resources.map((resource, index) => (
              <Button
                key={index}
                variant="default"
                className="bg-[#F97316] hover:bg-[#F97316]/90 text-white w-full rounded-lg"
                onClick={() => window.open(resource.url, '_blank')}
              >
                <resource.icon className="w-5 h-5" />
                {resource.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-bold text-[#F97316] text-center mb-8">Жалоба на игрока</h3>
          <div className="flex justify-center">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSeyhEk7FC95iPaHFvHxNlRNIEh4D_qV7tQVM1Ic8DdpocXXBQ/viewform?embedded=true" 
              width="640" 
              height="586" 
              frameBorder="0" 
              className="max-w-full"
              title="Форма жалобы на игрока"
            >
              Загрузка…
            </iframe>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#F97316] text-center mb-8">Наши каналы</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Column - MuRomeZ */}
            <div className="space-y-4 p-6 rounded-lg bg-gray-50">
              <h3 className="text-xl font-bold text-[#F97316] text-center">MuRomeZ</h3>
              <div className="flex justify-center">
                <Button
                  variant="default"
                  className="bg-[#FF0000] hover:bg-[#FF0000]/90 text-white rounded-lg flex items-center gap-2"
                  onClick={() => window.open('https://www.youtube.com/@MuRomeZ977', '_blank')}
                >
                  <Youtube className="w-5 h-5" />
                  YouTube
                </Button>
              </div>
            </div>

            {/* Right Column - MrMyth92 */}
            <div className="space-y-4 p-6 rounded-lg bg-gray-50">
              <h3 className="text-xl font-bold text-[#F97316] text-center">MrMyth92</h3>
              <div className="flex justify-center gap-4">
                <Button
                  variant="default"
                  className="bg-[#FF0000] hover:bg-[#FF0000]/90 text-white rounded-lg flex items-center gap-2"
                  onClick={() => window.open('https://www.youtube.com/@MrMyth92/', '_blank')}
                >
                  <Youtube className="w-5 h-5" />
                  YouTube
                </Button>
                <Button
                  variant="default"
                  className="bg-[#0077FF] hover:bg-[#0077FF]/90 text-white rounded-lg flex items-center gap-2"
                  onClick={() => window.open('https://vk.com/mrmyth92ds', '_blank')}
                >
                  <Link className="w-5 h-5" />
                  VK
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;