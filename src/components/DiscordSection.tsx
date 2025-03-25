import { Button } from "./ui/button";
import { MessageSquare, Download, XOctagon } from "lucide-react";

const DiscordSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          {/* Main Title */}
          <h1 className="text-3xl font-bold text-center mb-8 first-letter:text-4xl" style={{ fontFamily: 'Furore', color: '#FFA500' }}>
            discord сервер
          </h1>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Column - Discord Widget */}
            <div className="space-y-8">
              <div className="space-y-4">
                {/* Widget Title */}
                <h2 className="text-xl font-semibold text-center first-letter:text-3xl" style={{ fontFamily: 'Furore', color: '#FFA500' }}>
                  виджет discord сервера
                </h2>
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
            </div>
            {/* Right Column - Join Instructions */}
            <div className="space-y-6">
              {/* Join Instructions Title */}
              <h2 className="text-xl font-semibold first-letter:text-2xl" style={{ fontFamily: 'Furore', color: '#FFA500' }}>
                как присоединиться к серверу
              </h2>
              <p className="text-lg first-letter:text-xl" style={{ fontFamily: 'Furore', color: '#FFA500' }}>
                чтобы зайти на сервер нажмите на "присоединится к discord". если приглашение не сработало, то используйте кнопку "join discord".
              </p>
              <Button
                variant="default"
                className="w-full bg-[#5865F2] hover:bg-[#5865F2]/90 text-white rounded-lg py-6 text-lg"
                onClick={() => window.open('https://discord.gg/rk7ZeadZGH', '_blank')}
              >
                <MessageSquare className="w-6 h-6 mr-2" />
                Присоединится к Discord
              </Button>
              <div className="space-y-4">
                {/* Additional Section Title */}
                <h3 className="text-xl font-semibold first-letter:text-2xl" style={{ fontFamily: 'Furore', color: '#FFA500' }}>
                  дополнительно
                </h3>
                <div className="flex flex-col gap-4">
                  <Button
                    variant="default"
                    className="w-full rounded-lg bg-[#5865F2] hover:bg-[#5865F2]/90 text-white py-6 text-lg flex justify-center items-center"
                    onClick={() => window.open('https://discord.com/download', '_blank')}
                  >
                    <Download className="w-6 h-6 mr-2" />
                    скачать discord с офиального сайта
                  </Button>
                  <Button
                    variant="default"
                    className="w-full rounded-lg bg-[#5865F2] hover:bg-[#5865F2]/90 text-white py-6 text-lg flex justify-center items-center"
                    onClick={() => window.open('https://drive.google.com/file/d/1peDzSGlgP0bDeE4lP7JA_rC7HhZTM8R2/view?usp=sharing', '_blank')}
                  >
                    <XOctagon className="w-6 h-6 mr-2" />
                    разблокировка discord в рф
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