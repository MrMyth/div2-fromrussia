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
      {/* Анимированный градиентный оверлей (флаг России) */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: `linear-gradient(90deg, 
            rgba(255, 255, 255, 0.3) ${gradientPos}%, 
            rgba(0, 57, 166, 0.3) ${gradientPos + 30}%, 
            rgba(213, 43, 30, 0.3) ${gradientPos + 60}%)`,
        }}
      />

      {/* Затемнение фона */}
      <div className="absolute inset-0 bg-black/60 z-9" />

      {/* Постер видео (изображение) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <img
          src="https://i.ibb.co/8BBx0F0/19201080.png"
          alt="Game Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Навигация */}
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

      {/* Контент */}
      <div className="relative z-20 container mx-auto px-4 flex-1 flex items-center justify-center">
        <div className="text-center space-y-6 w-full max-w-md">
          {/* Логотип с анимированной обводкой */}
          <div className="flex justify-center relative">
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
              className="w-24 h-24 relative z-10 object-contain" 
            />
          </div>
          
          {/* Заголовок с градиентом */}
          <h1 
            className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent tracking-tight"
            style={{
              backgroundImage: `linear-gradient(90deg, 
                white ${gradientPos}%, 
                #0039A6 ${gradientPos + 30}%, 
                #D52B1E ${gradientPos + 60}%)`,
            }}
          >
            [RUS] FROM RUSSIA
          </h1>
          
          <p className="text-xl text-white/80 font-light">
            Игровой Discord сервер
          </p>
        </div>
      </div>

      {/* Индикатор скролла */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div 
          className="w-2 h-10 rounded-full"
          style={{
            background: `linear-gradient(to bottom, 
              white ${gradientPos}%, 
              #0039A6 ${gradientPos + 30}%, 
              #D52B1E ${gradientPos + 60}%)`,
          }}
        />
      </div>
    </div>
  );
};

export default HeroSection;