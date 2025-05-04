
import { Button } from "./ui/button";
import { Plus, Home } from "lucide-react";

const DiscordJoin: React.FC = () => {
  const handleJoinDiscord = () => {
    window.open('https://discord.gg/rk7ZeadZGH', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
      <h2 className="text-xl font-semibold mb-4 text-center flex items-center justify-center gap-2 text-[#F97316]">
        <Home className="w-6 h-6 text-[#F97316]" />
        Как присоединиться?
      </h2>
      <div className="bg-gray-50 p-6 rounded-lg">
        <p className="mb-6 text-gray-700">
          Нажмите кнопку ниже, чтобы присоединиться к нашему Discord серверу. 
          Если возникли проблемы, используйте кнопку "Join Discord" в виджете справа.
        </p>
        <Button
          size="lg"
          className="w-full bg-[#5865F2] hover:bg-[#5865F2]/90 py-6 text-lg font-medium text-white"
          onClick={handleJoinDiscord}
        >
          <Plus className="w-5 h-5 mr-2" />
          Присоединиться к серверу
        </Button>
      </div>
    </section>
  );
};

export default DiscordJoin;
