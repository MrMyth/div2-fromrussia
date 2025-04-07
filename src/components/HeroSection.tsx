import { MENU_ITEMS } from "@/constants/menu";
import { MenuItem } from "./MenuItem";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [gradientPos, setGradientPos] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientPos((prev) => (prev + 0.5) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[70vh] flex flex-col overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 z-10" />

      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
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

      {/* Navigation Menu */}
      <div className="relative z-30 w-full">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center py-6">
            <nav className="flex items-center space-x-8 bg-black/70 px-8 py-3 rounded-full border border-white/10">
              {MENU_ITEMS.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Header Content */}
      <div className="relative z-20 container mx-auto px-4 flex-1 flex items-center justify-center">
        <div className="text-center space-y-6 w-full max-w-md">
          <div className="flex justify-center relative">
            {/* Анимированная обводка логотипа */}
            <div 
              className="absolute inset-0 rounded-full p-1"
              style={{
                background: `linear-gradient(90deg, 
                  white ${gradientPos}%, 
                  #0039A6 ${gradientPos + 30}%, 
                  #D52B1E ${gradientPos + 60}%)`,
                filter: "blur(4px)",
              }}
            />
            <img 
              src="https://i.ibb.co/bLnHTds/42da929679073452.png" 
              alt="Division Logo" 
              className="w-full max-w-[200px] h-auto relative z-10" 
            />
          </div>
          
          {/* Текст с анимированным градиентом */}
          <h1 
            className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent tracking-tight"
            style={{
              backgroundImage: `linear-gradient(90deg, 
                white ${gradientPos}%, 
                #0039A6 ${gradientPos + 30}%, 
                #D52B1E ${gradientPos + 60}%)`,
              backgroundSize: "200% auto",
            }}
          >
            [RUS] FROM RUSSIA
          </h1>
          
          <p className="text-xl text-white/80 font-light">
            Игровой Discord сервер
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-2 h-10 rounded-full bg-gradient-to-b from-white to-transparent" />
      </div>
    </div>
  );
};

export default HeroSection;