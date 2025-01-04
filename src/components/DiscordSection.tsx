import { Button } from "./ui/button";
import { MessageSquare, Download, XOctagon } from "lucide-react";

const DiscordSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
          <h1 className="catchphrase text-center mb-8">Discord сервер</h1>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <h2 className="subheading text-center">Виджет Discord сервера</h2>
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

            <div className="space-y-6">
              <h2 className="subheading text-left">Как присоединиться к серверу</h2>
              <p className="text-lg text-muted-foreground">
                Чтобы зайти на сервер нажмите на "Присоединиться к Discord". Если приглашение не сработало, то используйте кнопку "Join Discord".
              </p>
              <Button
                variant="default"
                className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg"
                onClick={() => window.open('https://discord.gg/8C6HzXq92W', '_blank')}
              >
                <MessageSquare className="w-5 h-5" />
                Присоединиться к Discord
              </Button>

              <div className="space-y-4">
                <h3 className="subheading">Дополнительно</h3>
                <div className="flex flex-col gap-4">
                  <Button
                    variant="default"
                    className="w-full rounded-lg bg-primary hover:bg-primary/90 text-white"
                    onClick={() => window.open('https://discord.gg/8C6HzXq92W', '_blank')}
                  >
                    <Download className="w-5 h-5" />
                    Скачать Discord с официального сайта
                  </Button>
                  <Button
                    variant="default"
                    className="w-full rounded-lg bg-primary hover:bg-primary/90 text-white"
                    onClick={() => window.open('https://disk.yandex.ru/i/VzWLimdSluvIaw', '_blank')}
                  >
                    <XOctagon className="w-5 h-5" />
                    Если Discord не работает
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscordSection;