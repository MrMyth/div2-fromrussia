import { Button } from "./ui/button";
import { MessageSquare, Download, XOctagon } from "lucide-react";

const DiscordSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h1 className="catchphrase text-center mb-8">Discord сервер</h1>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Column - Discord Widget */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="subheading text-center">Виджет Discord сервера</h2>
                <iframe 
  src="https://discord.com/widget?id=835802952521351180&theme=light&locale=ru"
                  width="350" 
                  height="500" 
                  allowTransparency={true} 
                  frameBorder="0" 
                  sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                  className="w-full max-w-[350px] mx-auto"
                ></iframe>
              </div>
            </div>

            {/* Right Column - Join Instructions */}
            <div className="space-y-6">
              <h2 className="subheading text-left">Как присоединиться к серверу?</h2>
              <p className="text-lg text-muted-foreground">
                Чтобы зайти на сервер нажмите на "Присоединится к Discord". Если приглашение не сработало, то используйте кнопку "Join Discord". Ее вы можете найти в правом нижнем углу виджета сервера.
              </p>
              <Button
                variant="default"
                className="w-full bg-[#5865F2] hover:bg-[#5865F2]/90 text-white rounded-lg py-6 text-lg"
                onClick={() => window.open('https://discord.gg/rk7ZeadZGH', '_blank')}
              >
                <MessageSquare className="w-6 h-6 mr-2" />
                Зайти на Discord сервер
              </Button>

              <div className="space-y-4">
                <h3 className="subheading">Дополнительно</h3>
                <div className="flex flex-col gap-4">
                  <Button
                    variant="default"
                    className="w-full rounded-lg bg-[#5865F2] hover:bg-[#5865F2]/90 text-white py-6 text-lg flex justify-center items-center"
                    onClick={() => window.open('https://discord.com/download', '_blank')}
                  >
                    <Download className="w-6 h-6 mr-2" />
                    Скачать Discord с офиального сайта
                  </Button>
                  <Button
                    variant="default"
                    className="w-full rounded-lg bg-[#5865F2] hover:bg-[#5865F2]/90 text-white py-6 text-lg flex justify-center items-center"
                    onClick={() => window.open('https://drive.google.com/file/d/1peDzSGlgP0bDeE4lP7JA_rC7HhZTM8R2/view?usp=sharing', '_blank')}
                  >
                    <XOctagon className="w-6 h-6 mr-2" />
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