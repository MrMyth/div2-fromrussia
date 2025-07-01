
import ButtonLink from "../common/ButtonLink";
import { HelpCircle } from "lucide-react";

const DiscordUnlockHelp: React.FC = () => {
  return (
    <section className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
      <h2 className="subheading text-center mb-4 flex items-center justify-center gap-2">
        <HelpCircle className="w-6 h-6 text-[#F97316]" />
        Нужна помощь с разблокировкой
      </h2>
      <p className="text-gray-600 text-center mb-6">
        Если у вас что-то не получается, нажмите на кнопку ниже, чтобы запросить помощь в настройке через Telegram
      </p>
      <div className="grid gap-4">
        <ButtonLink
          href="https://t.me/FromRussiaDiv2"
          className="w-full h-12 bg-[#0088CC] hover:bg-[#0088CC]/90 text-lg font-medium text-white"
        >
          Получить помощь в Telegram
        </ButtonLink>
      </div>
    </section>
  );
};

export default DiscordUnlockHelp;
