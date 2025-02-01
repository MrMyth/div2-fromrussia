import { Button } from "./ui/button";
import { MessageSquare, Download, XOctagon } from "lucide-react";

const DiscordSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h1 className="catchphrase text-center mb-8">Discord сервер</h1>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Column - Discord Widget and Unblock Instructions */}
            <div className="space-y-8">
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
              
              <div className="space-y-4">
                <h2 className="subheading text-center">Разблокировка Discord в РФ</h2>
                <iframe 
                  src="https://drive.google.com/file/d/1GEWBHezhE4-LJ9hMCk9oxg38dXf1tVSx/preview" 
                  width="350"
                  height="197"
                  allow="autoplay"
                  className="w-full max-w-[350px] mx-auto"
                  frameBorder="0"
                ></iframe>
              </div>
            </div>

            {/* Right Column - Join Instructions */}
            <div className="space-y-6">
              <h2 className="subheading text-left">Как присоединиться к серверу</h2>
              <p className="text-lg text-muted-foreground">
                Чтобы зайти на сервер нажмите на "Присоединится к Discord". Если приглашение не сработало, то используйте кнопку "Join Discord".
              </p>
              <Button
                variant="default"
                className="w-full bg-[#5865F2] hover:bg-[#5865F2]/90 text-white rounded-lg"
                onClick={() => window.open('https://discord.gg/8C6HzXq92W', '_blank')}
              >
                <MessageSquare className="w-5 h-5" />
                Присоединится к Discord
              </Button>

              <div className="space-y-4">
                <h3 className="subheading">Дополнительно</h3>
                <div className="flex flex-col gap-4">
                  <Button
                    variant="default"
                    className="w-full rounded-lg bg-[#5865F2] hover:bg-[#5865F2]/90 text-white"
                    onClick={() => window.open('https://discord.gg/8C6HzXq92W', '_blank')}
                  >
                    <Download className="w-5 h-5" />
                    Скачать Discord с офиального сайта
                  </Button>
                  <Button
                    variant="default"
                    className="w-full rounded-lg bg-[#5865F2] hover:bg-[#5865F2]/90 text-white"
                    onClick={() => window.open('https://drive.google.com/file/d/1GEWBHezhE4-LJ9hMCk9oxg38dXf1tVSx/view?usp=sharing', '_blank')}
                  >
                    <XOctagon className="w-5 h-5" />
                    Разблокировка Discord в РФ
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