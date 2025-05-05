
import { MENU_ITEMS } from "@/constants/menu";
import { MenuItem } from "./MenuItem";

const HeroSection = () => {
  return (
    <div className="relative min-h-[50vh] flex flex-col">
      {/* Navigation Menu */}
      <div className="relative z-30 w-full bg-zinc-900/90 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/80 border-b border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center py-6">
            <nav className="flex items-center space-x-8">
              {MENU_ITEMS.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background z-10" />
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="https://i.ibb.co/8BBx0F0/19201080.png"
        >
          <source
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/256810065/movie480_vp9.webm"
            type="video/webm"
          />
        </video>
      </div>

      {/* Header Content */}
      <div className="relative z-20 container mx-auto px-4">
        <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-6">
          <img 
            src="https://i.ibb.co/bLnHTds/42da929679073452.png" 
            alt="Division Logo" 
            className="w-16 h-16"
          />
          <h1 className="catchphrase text-2xl md:text-3xl">
            [RUS] FROM RUSSIA
          </h1>
          <p className="subheading text-lg md:text-xl">
            Игровой Discord сервер
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-1 h-10 rounded-full bg-gradient-to-b from-[#F97316] to-transparent" />
      </div>
    </div>
  );
};

export default HeroSection;
