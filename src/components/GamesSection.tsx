
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
        <div id="games">
          <GamesList />
        </div>
        
        <div id="raids" className="mt-16">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="catchphrase text-center mb-8">Азбуки рейдов</h3>
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
        </div>

        <div id="channels">
          <CreatorsSection />
        </div>
        
        <div id="complaint">
          <ComplaintForm />
        </div>

        <div id="resources">
          <ResourcesList />
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
