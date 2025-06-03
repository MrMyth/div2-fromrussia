
import { MENU_ITEMS } from "@/constants/menu";
import { MenuItem } from "./MenuItem";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col">
      {/* Navigation Menu */}
      <div className="relative z-30 w-full bg-black/90 backdrop-blur-md border-b-2 border-[#F97316]/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center py-4">
            <nav className="flex items-center space-x-8">
              {MENU_ITEMS.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Video Background */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80 z-10" />
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
        
        {/* Gaming-style overlay effects */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#F97316] via-yellow-500 to-[#F97316] opacity-60" />
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#F97316] via-yellow-500 to-[#F97316] opacity-60" />
        </div>
      </div>

      {/* Logo and Title Section - Now below the video */}
      <div className="relative bg-black/95 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center space-y-6">
            {/* Gaming-style logo container */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#F97316]/20 rounded-full blur-xl animate-pulse" />
              <div className="relative bg-gradient-to-br from-gray-800 to-black p-4 rounded-full border-2 border-[#F97316] shadow-lg shadow-[#F97316]/30">
                <img 
                  src="https://i.ibb.co/bLnHTds/42da929679073452.png" 
                  alt="Division Logo" 
                  className="w-16 h-16"
                />
              </div>
            </div>
            
            {/* Gaming-style title */}
            <div className="space-y-3">
              <h1 className="catchphrase text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#F97316] via-yellow-500 to-[#F97316] bg-clip-text text-transparent">
                [RUS] FROM RUSSIA
              </h1>
              <div className="flex items-center justify-center space-x-4">
                <div className="h-px bg-gradient-to-r from-transparent via-[#F97316] to-transparent flex-1 max-w-32" />
                <p className="subheading text-xl text-[#F97316]/90 font-semibold tracking-wide">
                  Игровой Discord сервер
                </p>
                <div className="h-px bg-gradient-to-r from-transparent via-[#F97316] to-transparent flex-1 max-w-32" />
              </div>
            </div>
            
            {/* Gaming-style decorative elements */}
            <div className="flex items-center justify-center space-x-2 mt-6">
              <div className="w-2 h-2 bg-[#F97316] rounded-full animate-pulse" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-150" />
              <div className="w-2 h-2 bg-[#F97316] rounded-full animate-pulse delay-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-1 h-8 rounded-full bg-gradient-to-b from-[#F97316] to-transparent" />
      </div>
    </div>
  );
};

export default HeroSection;
