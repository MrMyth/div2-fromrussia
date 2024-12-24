import GamesList from "./GamesList";
import GameSlideshow from "./GameSlideshow";
import GameSlideshow2 from "./GameSlideshow2";
import ResourcesList from "./ResourcesList";
import ComplaintForm from "./ComplaintForm";
import CreatorsSection from "./CreatorsSection";

const GamesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <GamesList />
        
        <div className="text-center mt-12">
          <h3 className="catchphrase mb-6">Азбуки рейдов</h3>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
            Кликни на картинку, чтобы увеличить слайдшоу. После увеличения слайдшоу ты можешь перемещаться между слайдами. Для этого используй стрелки по бокам или же стрелки на клавиатуре.
          </p>
          <h4 className="subheading mb-4">Азбука рейда "Тяжелые времена"</h4>
        </div>
        <GameSlideshow />
        
        <div className="text-center mt-12">
          <h4 className="subheading mb-4">Азбука рейда "Железный конь"</h4>
        </div>
        <GameSlideshow2 />

        <ResourcesList />
        <ComplaintForm />
        <CreatorsSection />
      </div>
    </section>
  );
};

export default GamesSection;