
import { MessageSquare } from "lucide-react";
import DiscordBenefits from "./DiscordBenefits";
import DiscordJoin from "./DiscordJoin";
import DiscordWidget from "./DiscordWidget";
import DiscordAdditional from "./DiscordAdditional";
import DiscordGoals from "./DiscordGoals";
import DiscordSupport from "./DiscordSupport";
import DiscordFullAccess from "./DiscordFullAccess";

const DiscordSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <header className="text-center mb-10">
            <h1 className="text-3xl font-bold flex items-center justify-center gap-2 text-[#F97316]">
              <MessageSquare className="w-7 h-7 text-[#F97316]" />
              <span>Discord сервер</span>
            </h1>
            <p className="mt-2 text-lg text-gray-500">
              Присоединяйтесь к нашему сообществу игроков
            </p>
          </header>

          <div className="space-y-8">
            <DiscordJoin />
            <DiscordWidget />
            <DiscordBenefits />
            <DiscordGoals />
            <DiscordSupport />
            <DiscordFullAccess />
            <DiscordAdditional />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscordSection;
