import { Button } from "./ui/button";
import { MessageSquare, Download, XOctagon, Users } from "lucide-react";
import { useEffect, useState } from "react";

const DiscordSection = () => {
  const [memberCount, setMemberCount] = useState<number | null>(null);

  // Функция для загрузки количества участников (заглушка)
  useEffect(() => {
    // В реальном проекте здесь должен быть запрос к Discord API через бота
    const fetchMemberCount = () => {
      setTimeout(() => {
        setMemberCount(128); // Примерное число участников
      }, 1000);
    };
    fetchMemberCount();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h1 className="catchphrase text-center mb-8">Discord сервер</h1>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Левый столбец - Кастомный виджет */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="subheading text-center">Наш Discord сервер</h2>
                <div className="relative">
                  {/* Скрытый iframe для функциональности (если нужно) */}
                  <iframe
                    src="https://discord.com/widget?id=835802952521351180&theme=light&locale=ru"
                    width="350"
                    height="500"
                    allowTransparency={true}
                    frameBorder="0"
                    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                    className="opacity-0 w-full h-[500px] absolute pointer-events-none"
                    aria-hidden="true"
                  />
                  {/* Кастомный русскоязычный интерфейс */}
                  <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 flex flex-col items-center justify-center h-[500px] space-y-6">
                    <div className="text-center space-y-2">
                      <Users className="w-12 h-12 mx-auto text-[#5865F2]" />
                      <h3 className="text-xl font-semibold">
                        {memberCount !== null ? (
                          <>Участников онлайн: <span className="text-[#5865F2]">{memberCount}+</span></>
                        ) : (
                          "Загрузка..."
                        )}
                      </h3>
                      <p className="text-muted-foreground">
                        Общайтесь с единомышленниками!
                      </p>
                    </div>
                    <Button
                      onClick={() => window.open('https://discord.gg/rk7ZeadZGH', '_blank')}
                      className="bg-[#5865F2] hover:bg-[#5865F2]/90 text-white py-6 text-lg w-full"
                    >
                      <MessageSquare className="w-6 h-6 mr-2" />
                      Присоединиться к серверу
                    </Button>
                    <p className="text-sm text-muted-foreground text-center">
                      Нажмите кнопку выше, чтобы перейти на сервер
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Правый столбец - Инструкции */}
            <div className="space-y-6">
              <h2 className="subheading text-left">Как присоединиться к серверу?</h2>
              <p className="text-lg text-muted-foreground">
                Нажмите кнопку "Присоединиться к серверу" слева. Если возникли проблемы, используйте прямую ссылку.
              </p>
              <Button
                variant="default"
                className="w-full bg-[#5865F2] hover:bg-[#5865F2]/90 text-white rounded-lg py-6 text-lg"
                onClick={() => window.open('https://discord.gg/rk7ZeadZGH', '_blank')}
              >
                <MessageSquare className="w-6 h-6 mr-2" />
                Открыть Discord сервер
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
                    Скачать Discord
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