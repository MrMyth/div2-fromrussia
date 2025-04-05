import { Button } from "./ui/button";
import { 
  Plus, 
  Download, 
  XOctagon, 
  SquareCode, 
  Home, 
  Headphones, 
  Lightbulb 
} from "lucide-react";

const DiscordLogo = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#5865F2">
    <path 
      d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v19.056c0 1.368-1.104 2.472-2.46 2.472H16.44c-.552 0-.888-.456-.888-.984v-3.192c0-.528.336-.984.888-.984h.624c.816 0 1.488-.672 1.488-1.488V5.976c0-.816-.672-1.488-1.488-1.488h-6.888c-.816 0-1.488.672-1.488 1.488v10.368c0 .816.672 1.488 1.488 1.488h.624c.552 0 .888.456.888.984v3.192c0 .528-.336.984-.888.984H4.46C3.104 22 2 20.896 2 19.528V2.472C2 1.104 3.104 0 4.46 0h15.08zm-4.632 15.672c-1.176 0-2.136-.96-2.136-2.136s.96-2.136 2.136-2.136 2.136.96 2.136 2.136-.96 2.136-2.136 2.136zm-6.888 0c-1.176 0-2.136-.96-2.136-2.136s.96-2.136 2.136-2.136 2.136.96 2.136 2.136-.96 2.136-2.136 2.136z"
    />
  </svg>
);

const DiscordSection = () => {
  const benefits = [
    "На нашем сервере почти 500 человек: помощь и компанию можно найти не только среди соклановцев, но и других игроков",
    "Огромная база готовых гайдов по прохождению, прокачке, сборке билдов и различные полезности для игры",
    "Библиотека готовых и проверенных билдов: открыл и смотришь, что и как нужно собрать",
    "Постоянно обновляемые новости про текущие целевые трофеи, таланты 'Спуска', работу торговцев",
    "Постоянно обновляемые новости о франшизе The Division и компании Ubisoft",
    "Свой общедоступный бот в 'Саммите' на 100-м этаже с инструкцией по использованию",
    "Наши создатели контента всегда тестируют бета версии The Division 2. Ты раньше остальных будешь узнавать о том, что ждет тебя в обновлении",
    "У Discord есть шумоподавление, режим рации и эхоподавление для микрофонов"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          
          {/* Header */}
          <header className="text-center mb-10">
            <h1 className="text-3xl font-bold flex items-center justify-center gap-2 text-[#F97316]">
              <DiscordLogo />
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
                className="w-full bg-[#5865F2] hover:bg-[#5865F2]/90 py-6 text-lg font-medium"
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
                variant="outline"
                className="py-6 text-lg font-medium border-[#5865F2] text-[#5865F2] hover:bg-[#5865F2]/10"
                onClick={() => window.open('https://discord.com/download', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Скачать Discord
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="py-6 text-lg font-medium border-[#5865F2] text-[#5865F2] hover:bg-[#5865F2]/10"
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