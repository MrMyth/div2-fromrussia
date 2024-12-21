import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const DiscordSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="border border-black/10 rounded-lg shadow-md p-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-2xl font-bold text-[#F97316]">Присоединяйся к нашему Discord серверу</h2>
            
            <p className="text-gray-700">
              Мы рады приветствовать тебя на нашем Discord сервере. Здесь ты найдешь единомышленников, 
              сможешь присоединиться к нашим рейдам и стать частью нашего дружного коммьюнити.
            </p>

            <Button
              variant="default"
              className="bg-[#F97316] hover:bg-[#F97316]/90 text-white rounded-lg"
              onClick={() => window.open('https://discord.gg/8C6HzXq92W', '_blank')}
            >
              Присоединится к Discord
              <ArrowRight className="w-5 h-5" />
            </Button>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#F97316]">Полезные ссылки</h3>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  variant="default"
                  className="bg-[#F97316] hover:bg-[#F97316]/90 text-white rounded-lg"
                  onClick={() => window.open('https://discord.gg/8C6HzXq92W', '_blank')}
                >
                  Join Discord
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button
                  variant="default"
                  className="bg-[#F97316] hover:bg-[#F97316]/90 text-white rounded-lg"
                  onClick={() => window.open('https://disk.yandex.ru/i/VzWLimdSluvIaw', '_blank')}
                >
                  Yandex Disk
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscordSection;