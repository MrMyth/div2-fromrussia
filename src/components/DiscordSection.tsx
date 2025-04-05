
import { Button } from "./ui/button";
import { Plus, Download, XOctagon, MessageSquare } from "lucide-react";

const DiscordSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h1 className="catchphrase text-center mb-8 flex items-center justify-center">
            <MessageSquare className="w-6 h-6 mr-2 text-[#F97316]" />
            Discord сервер
          </h1>
          
          {/* Widget - Centered */}
          <div className="flex justify-center mb-8">
            <div className="space-y-4">
              <h2 className="subheading text-center">Виджет Discord сервера</h2>
              <iframe 
                src="https://discord.com/widget?id=835802952521351180&theme=light&locale=ru"
                width="350" 
                height="700" 
                allowTransparency={true} 
                frameBorder="0" 
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                className="mx-auto"
              ></iframe>
            </div>
          </div>
          
          {/* All text content below the widget, full width */}
          <div className="space-y-6 max-w-full">
            <h2 className="subheading text-center">Как присоединиться к серверу?</h2>
            <p className="text-lg text-muted-foreground">
              Чтобы зайти на сервер нажмите на "Зайти на Discord сервер". Если приглашение не сработало, то используйте кнопку "Join Discord". Ее вы можете найти в правом нижнем углу виджета сервера.
            </p>
            <Button
              variant="default"
              className="w-full bg-[#5865F2] hover:bg-[#5865F2]/90 text-white rounded-lg py-6 text-lg"
              onClick={() => window.open('https://discord.gg/rk7ZeadZGH', '_blank')}
            >
              <Plus className="w-6 h-6 mr-2 stroke-[3]" />
              Зайти на Discord сервер
            </Button>

            <div className="space-y-6 mt-8">
              <h2 className="subheading text-center">Почему мы рекомендуем использовать связь через Discord:</h2>
              <p className="text-lg text-muted-foreground">
1) На нашем сервере почти 500 человек: помощь и компанию можно найти не только среди соклановцев, но и других игроков, что играют в игру.<br/>
2) Огромная база готовых гайдов по прохождению, прокачке, сборке билдов, и различные полезности для игры.<br/>
3) Библиотека готовых и проверенных билдов: открыл и смотришь, что и как нужно собрать.<br/>
4) У Discord есть шумоподавление, режим рации и эхоподавление для микрофонов.<br/>
5) На сервере есть постоянно обновляемые новости про текущие целевые трофеи, таланты "Спуска", работу торговцев, новости от Ubisoft и Discord. Новости про скидки и бесплатные игры.<br/>
6) Свой общедоступный бот в "Саммите" на 100-м этаже. Инструкция по нему там же, в Discord.<br/>
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="subheading text-center">Дополнительно</h3>
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
    </section>
  );
};

export default DiscordSection;
