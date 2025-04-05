import { Button } from "./ui/button";
import { 
  Plus, 
  Download, 
  XOctagon, 
  MessageSquare, 
  SquareCode, 
  Home, 
  Headphones, 
  Lightbulb 
} from "lucide-react";

const DiscordSection = () => {
  const benefits = [
    "На нашем сервере почти 500 человек: помощь и компанию можно найти не только среди соклановцев, но и других игроков",
    "Огромная база готовых гайдов по прохождению, прокачке, сборке билдов и различные полезности для игры",
    "Библиотека готовых и проверенных билдов: открыл и смотришь, что и как нужно собрать",
    "Постоянно обновляемые новости про текущие целевые трофеи, таланты 'Спуска', работу торговцев",
    "Постоянно обновляемые новости о франшизе The Division и компании Ubisoft",
    "Свой общедоступный бот в 'Саммите' на 100-м этаже с инструкцией по использованию",
    "Наши создатели контента всегда тестируют бета версии The Division 2. Ты ранньше остальных будешь узнавать о том, что ждет тебя в обновлении",
    "У Discord есть шумоподавление, режим рации и эхоподавление для микрофонов"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          
          {/* Header */}
          <header className="text-center mb-10">
            <h1 className="text-3xl font-bold flex items-center justify-center gap-2 text-[#F97316]">
              <MessageSquare className="w-7 h-7 text-[#5865F2]" />
              <span>Discord сервер</span>
            </h1>
            <p className="mt-2 text-lg text-gray-500">
              Присоединяйтесь к нашему сообществу игроков
            </p>
          </header>

          {/* Widget Section */}
          <section className="mb-12 text-center">
            <h2 className="text-xl font-semibold mb-4 flex items-center justify-center gap-2 text-[#F97316]">
              <SquareCode className="w-6 h-6 text-[#F97316]" />
              Виджет сервера
            </h2>
            <div className="flex justify-center">
              <iframe 
                src="https://discord.com/widget?id=835802952521351180&theme=light&locale=ru"
                width="350" 
                height="500" 
                allowTransparency
                className="rounded-lg shadow-md border border-gray-200"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              />
            </div>
          </section>

          {/* Join Section */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-4 text-center flex items-center justify-center gap-2 text-[#F97316]">
              <Home className="w-6 h-6 text-[#F97316]" />
              Как присоединиться?
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-6 text-gray-700">
                Нажмите кнопку ниже, чтобы присоединиться к нашему Discord серверу. 
                Если возникли проблемы, используйте кнопку "Join Discord" в виджете выше.
              </p>
              <Button
                size="lg"
                className="w-full bg-[#5865F2] hover:bg-[#5865F2]/90 py-6 text-lg font-medium text-white"
                onClick={() => window.open('https://discord.gg/rk7ZeadZGH', '_blank')}
              >
                <Plus className="w-5 h-5 mr-2" />
                Присоединиться к серверу
              </Button>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-center flex items-center justify-center gap-2 text-[#F97316]">
              <Headphones className="w-6 h-6 text-[#F97316]" />
              Преимущества нашего Discord
            </h2>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#F97316] mr-2">•</span>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Downloads Section */}
          <section>
            <h2 className="text-xl font-semibold mb-6 text-center flex items-center justify-center gap-2 text-[#F97316]">
              <Lightbulb className="w-6 h-6 text-[#F97316]" />
              Дополнительно
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Button
                size="lg"
                className="w-full bg-[#5865F2] hover:bg-[#5865F2]/90 py-6 text-lg font-medium text-white"
                onClick={() => window.open('https://discord.com/download', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Скачать Discord
              </Button>
              <Button
                size="lg"
                className="w-full bg-[#5865F2] hover:bg-[#5865F2]/90 py-6 text-lg font-medium text-white"
                onClick={() => window.open('https://drive.google.com/file/d/1peDzSGlgP0bDeE4lP7JA_rC7HhZTM8R2/view?usp=sharing', '_blank')}
              >
                <XOctagon className="w-5 h-5 mr-2" />
                Разблокировка в РФ
              </Button>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default DiscordSection;