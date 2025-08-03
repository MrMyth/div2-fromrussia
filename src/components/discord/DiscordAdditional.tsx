
import ButtonLink from "../common/ButtonLink";
import { Download, Lightbulb, MessageCircle, Globe } from "lucide-react";

const DiscordAdditional: React.FC = () => {
  return (
    <section className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
      <h2 className="subheading text-center mb-6 flex items-center justify-center gap-2">
        <Lightbulb className="w-6 h-6 text-[#F97316]" />
        Дополнительно
      </h2>
      <div className="grid gap-4">
        <ButtonLink
          href="https://discord.com/download"
          icon={Download}
          className="w-full h-12 bg-[#5865F2] hover:bg-[#5865F2]/90 text-lg font-medium text-white"
        >
          Скачать Discord
        </ButtonLink>
        
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-center mb-4 text-[#F97316]">
            Зеркало в Telegram
          </h3>
          <p className="text-gray-600 text-center mb-4 text-sm">
            Если у вас что-то не получается, нажмите на кнопку ниже, чтобы запросить помощь через Telegram
          </p>
          <div className="grid gap-3">
            <ButtonLink
              href="https://t.me/FromRussiaDiv2"
              className="w-full h-12 bg-[#0088CC] hover:bg-[#0088CC]/90 text-lg font-medium text-white"
              icon={MessageCircle}
            >
              Получить помощь в Telegram
            </ButtonLink>
            <ButtonLink
              href="https://telegram.org/"
              className="w-full h-12 bg-[#0088CC] hover:bg-[#0088CC]/90 text-lg font-medium text-white"
              icon={Globe}
            >
              Сайт Telegram
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscordAdditional;
