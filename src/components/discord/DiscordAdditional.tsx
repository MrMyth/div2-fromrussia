
import ButtonLink from "../common/ButtonLink";
import { Download, XOctagon, Lightbulb } from "lucide-react";

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
          className="w-full bg-[#5865F2] hover:bg-[#5865F2]/90 py-6 text-lg font-medium text-white"
        >
          Скачать Discord
        </ButtonLink>
        <ButtonLink
          href="https://drive.google.com/file/d/1peDzSGlgP0bDeE4lP7JA_rC7HhZTM8R2/view?usp=sharing"
          icon={XOctagon}
          className="w-full bg-[#5865F2] hover:bg-[#5865F2]/90 py-6 text-lg font-medium text-white"
        >
          Разблокировка в РФ
        </ButtonLink>
      </div>
    </section>
  );
};

export default DiscordAdditional;
