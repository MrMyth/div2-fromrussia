
import { MENU_ITEMS } from "@/constants/menu";
import { MenuItem } from "./MenuItem";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Enhanced Gaming Navigation Menu */}
      <div className="relative z-30 w-full bg-black/90 backdrop-blur-md border-b-2 border-[#F97316] shadow-lg shadow-[#F97316]/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center py-6">
            <nav className="flex items-center space-x-8">
              {MENU_ITEMS.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </nav>
          </div>
        </div>
        {/* Gaming accent line */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F97316] to-transparent opacity-60" />
      </div>

      {/* Video Background with Enhanced Gaming Overlay */}
      <div className="relative flex-1 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F97316]/10 via-transparent to-[#F97316]/10 z-10" />
        
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

        {/* Gaming accent corners */}
        <div className="absolute top-4 left-4 w-12 h-12 border-l-4 border-t-4 border-[#F97316] z-20" />
        <div className="absolute top-4 right-4 w-12 h-12 border-r-4 border-t-4 border-[#F97316] z-20" />
        <div className="absolute bottom-4 left-4 w-12 h-12 border-l-4 border-b-4 border-[#F97316] z-20" />
        <div className="absolute bottom-4 right-4 w-12 h-12 border-r-4 border-b-4 border-[#F97316] z-20" />

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-1 h-8 rounded-full bg-gradient-to-b from-[#F97316] to-transparent" />
          <div className="w-3 h-3 rounded-full bg-[#F97316] mx-auto mt-2 animate-pulse" />
        </div>
      </div>

      {/* Logo and Title Section Below Video */}
      <div className="relative z-20 bg-black/95 backdrop-blur-sm border-t-2 border-[#F97316] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center space-y-6">
            {/* Logo with gaming glow effect */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#F97316] rounded-full blur-xl opacity-50 animate-pulse" />
              <img 
                src="https://i.ibb.co/bLnHTds/42da929679073452.png" 
                alt="Division Logo" 
                className="relative w-16 h-16 filter drop-shadow-lg"
              />
            </div>
            
            {/* Title with enhanced gaming styling */}
            <div className="space-y-2">
              <h1 className="catchphrase text-4xl font-bold bg-gradient-to-r from-[#F97316] via-yellow-400 to-[#F97316] bg-clip-text text-transparent drop-shadow-2xl">
                [RUS] FROM RUSSIA
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#F97316] to-transparent mx-auto" />
              <p className="subheading text-xl">
                Игровой Discord сервер
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
