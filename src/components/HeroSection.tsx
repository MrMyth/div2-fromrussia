import { MENU_ITEMS } from "@/constants/menu";
import { MenuItem } from "./MenuItem";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col">
      {/* Navigation Menu */}
      <div className="relative z-30 w-full bg-white border-b border-gray-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="https://i.ibb.co/bLnHTds/42da929679073452.png" 
                alt="Division Logo" 
                className="w-10 h-10"
              />
              <span className="text-xl font-bold text-gray-800">[RUS] FROM RUSSIA</span>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {MENU_ITEMS.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </nav>
            
            {/* Mobile menu button */}
            <button className="md:hidden p-2 text-gray-800">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative bg-gray-50">
        {/* Video Background */}
        <div className="relative w-full h-[70vh] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 z-10" />
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
          
          {/* Hero Text Overlay */}
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-center space-y-6 max-w-4xl px-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
                [RUS] FROM RUSSIA
              </h1>
              <p className="text-xl md:text-2xl text-white/90 drop-shadow-md">
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