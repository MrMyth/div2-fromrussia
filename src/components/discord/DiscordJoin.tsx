import ButtonLink from "../common/ButtonLink";
import { Plus, Home } from "lucide-react";
const DiscordJoin: React.FC = () => {
  return <section className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
      <h2 className="text-xl font-semibold mb-4 text-center flex items-center justify-center gap-2 text-[#F97316]">
        <Home className="w-6 h-6 text-[#F97316]" />
        Как присоединиться?
      </h2>
      <div className="bg-gray-50 p-6 rounded-lg">
        <p className="mb-6 text-gray-700">Нажмите кнопку ниже, чтобы присоединиться к нашему Discord серверу. Если возникли проблемы, используйте кнопку &quot;Join Discord&quot; в виджете снизу.</p>
        <ButtonLink href="https://discord.gg/rk7ZeadZGH" icon={Plus} className="w-full bg-[#5865F2] hover:bg-[#5865F2]/90 py-6 text-lg font-medium text-white">
          Присоединиться к серверу
        </ButtonLink>
      </div>
    </section>;
};
export default DiscordJoin;