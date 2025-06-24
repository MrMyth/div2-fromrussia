
import ButtonLink from "../common/ButtonLink";
import { Unlock, Play } from "lucide-react";

const DiscordFullAccess: React.FC = () => {
  return (
    <section className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
      <h2 className="subheading text-center mb-4 flex items-center justify-center gap-2">
        <Unlock className="w-6 h-6 text-[#F97316]" />
        Полноценный доступ
      </h2>
      <p className="text-gray-600 text-center mb-6">
        Работающий Youtube и Discord, просмотр Twitch в Full HD
      </p>
      <div className="grid gap-4">
        <button
          onClick={() => window.open("https://www.dropbox.com/scl/fo/56eaxni1xffpzc65e0qny/AJrvVoVtCNaJHQP-9-pa3JA?rlkey=cc5dgfsdjmgjbc75m2u8yc02f&e=1&dl=0", '_blank', 'noopener,noreferrer')}
          className="w-full h-12 text-lg font-medium text-white rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
          style={{
            background: 'linear-gradient(to right, #FF0000 0%, #FF0000 33.33%, #5865F2 33.33%, #5865F2 66.66%, #9146FF 66.66%, #9146FF 100%)'
          }}
        >
          <Play className="w-5 h-5" />
          Youtube, Discord и Twitch в Full HD
        </button>
      </div>
    </section>
  );
};

export default DiscordFullAccess;
