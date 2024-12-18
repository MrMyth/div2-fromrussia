import GameSlideshow from "./GameSlideshow";
import GameSlideshow2 from "./GameSlideshow2";

const GamesSection = () => {
  const games = [
    "Tom Clancy's The Division 2",
    "Tom Clancy's The Division 2 (Китайская версия)",
    "Tom Clancy's The Division 1",
    "Tom Clancy's Ghost Recon: Wildlands",
    "Tom Clancy's Ghost Recon Breakpoint"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-[#F97316] mb-8">Наши игры</h2>
        <ul className="space-y-4 max-w-2xl mx-auto">
          {games.map((game, index) => (
            <li 
              key={index}
              className="flex items-center space-x-4 p-4 rounded-lg border border-[#FEC6A1] hover:bg-[#FEC6A1]/10 transition-colors"
            >
              <span className="text-[#F97316] font-medium">{index + 1}.</span>
              <span className="text-gray-800">{game}</span>
            </li>
          ))}
        </ul>
        <GameSlideshow />
        <GameSlideshow2 />
      </div>
    </section>
  );
};

export default GamesSection;