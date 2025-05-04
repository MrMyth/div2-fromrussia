
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
import DiscordBenefits from "./DiscordBenefits";
import DiscordJoin from "./DiscordJoin";
import DiscordWidget from "./DiscordWidget";
import DiscordAdditional from "./DiscordAdditional";

const DiscordSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          
          {/* Header */}
          <header className="text-center mb-10">
            <h1 className="text-3xl font-bold flex items-center justify-center gap-2 text-[#F97316]">
              <MessageSquare className="w-7 h-7 text-[#F97316]" />
              <span>Discord сервер</span>
            </h1>
            <p className="mt-2 text-lg text-gray-500">
              Присоединяйтесь к нашему сообществу игроков
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              <DiscordJoin />
              <DiscordBenefits />
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <DiscordWidget />
              <DiscordAdditional />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscordSection;
