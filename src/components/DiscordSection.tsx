import { Button } from "./ui/button";
import { Youtube } from "lucide-react";

const DiscordSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-[#F97316] text-center mb-8">Discord сервер</h1>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Column - Discord Widget */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#F97316] text-center">Виджет Discord сервера</h2>
            <iframe 
              src="https://discord.com/widget?id=835802952521351180&theme=dark" 
              width="350" 
              height="500" 
              allowTransparency={true} 
              frameBorder="0" 
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              className="w-full max-w-[350px] mx-auto"
            ></iframe>
          </div>

          {/* Right Column - Join Instructions */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#F97316] text-left">Как присоединиться к серверу</h2>
            <p className="text-lg text-muted-foreground">
              Чтобы зайти на сервер нажмите на "Присоединится к Discord". Если приглашение не сработало, то используйте кнопку "Join Discord".
            </p>
            <Button
              variant="default"
              className="w-full bg-[#F97316] hover:bg-[#F97316]/90 text-white rounded-lg"
              onClick={() => window.open('https://discord.gg/8C6HzXq92W', '_blank')}
            >
              Присоединится к Discord
            </Button>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#F97316]">Дополнительно</h3>
              <div className="flex flex-col gap-4">
                <Button
                  variant="default"
                  className="w-full rounded-lg bg-[#F97316] hover:bg-[#F97316]/90 text-white"
                  onClick={() => window.open('https://discord.gg/8C6HzXq92W', '_blank')}
                >
                  Join Discord
                </Button>
                <Button
                  variant="default"
                  className="w-full rounded-lg bg-[#F97316] hover:bg-[#F97316]/90 text-white"
                  onClick={() => window.open('https://disk.yandex.ru/i/VzWLimdSluvIaw', '_blank')}
                >
                  Yandex Disk
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* New Section - Наши каналы */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#F97316] text-center mb-8">Наши каналы</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#F97316] text-center">MuRomeZ</h3>
            <div className="flex justify-center">
              <Button
                variant="default"
                className="bg-[#F97316] hover:bg-[#F97316]/90 text-white rounded-lg flex items-center gap-2"
                onClick={() => window.open('https://www.youtube.com/@MuRomeZ977', '_blank')}
              >
                <Youtube className="w-5 h-5" />
                YouTube
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscordSection;