
import { SquareCode } from "lucide-react";

const DiscordWidget = () => {
  return (
    <section className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
      <h2 className="text-xl font-semibold mb-4 flex items-center justify-center gap-2 text-[#F97316]">
        <SquareCode className="w-6 h-6 text-[#F97316]" />
        Виджет сервера
      </h2>
      <iframe 
        src="https://discord.com/widget?id=835802952521351180&theme=light&locale=ru"
        width="100%" 
        height="500" 
        allowTransparency
        className="rounded-lg shadow-md border border-gray-200"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        title="Discord Server Widget"
        loading="lazy"
      />
    </section>
  );
};

export default DiscordWidget;
