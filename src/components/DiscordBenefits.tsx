import { Headphones } from "lucide-react";

const DiscordBenefits = () => {
  const benefits = [
    "Клан входит в топ 50 кланов в игре",
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
    <section>
      <h2 className="text-xl font-semibold mb-6 text-center flex items-center justify-center gap-2 text-[#F97316]">
        <Headphones className="w-6 h-6 text-[#F97316]" />
        Преимущества нашего Discord
      </h2>
      <div className="bg-gray-50 p-6 rounded-lg">
        <ul className="space-y-3 mx-auto max-w-2xl">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start justify-center">
              <span className="text-[#F97316] mr-2">•</span>
              <span className="text-gray-700 text-center">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DiscordBenefits;