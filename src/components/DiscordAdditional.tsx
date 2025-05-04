
import { Button } from "./ui/button";
import { Download, XOctagon, Lightbulb } from "lucide-react";

const DiscordAdditional = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-6 text-center flex items-center justify-center gap-2 text-[#F97316]">
        <Lightbulb className="w-6 h-6 text-[#F97316]" />
        Дополнительно
      </h2>
      <div className="grid gap-4">
        <Button
          size="lg"
          className="w-full bg-[#5865F2] hover:bg-[#5865F2]/90 py-6 text-lg font-medium text-white"
          onClick={() => window.open('https://discord.com/download', '_blank')}
        >
          <Download className="w-5 h-5 mr-2" />
          Скачать Discord
        </Button>
        <Button
          size="lg"
          className="w-full bg-[#5865F2] hover:bg-[#5865F2]/90 py-6 text-lg font-medium text-white"
          onClick={() => window.open('https://drive.google.com/file/d/1peDzSGlgP0bDeE4lP7JA_rC7HhZTM8R2/view?usp=sharing', '_blank')}
        >
          <XOctagon className="w-5 h-5 mr-2" />
          Разблокировка в РФ
        </Button>
      </div>
    </section>
  );
};

export default DiscordAdditional;
