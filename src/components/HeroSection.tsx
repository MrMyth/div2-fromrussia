import { MessageSquare, Youtube, BookOpen, Gamepad, HelpCircle, Link } from "lucide-react";

const MENU_ITEMS = [
  { icon: <MessageSquare className="w-5 h-5" />, text: "Discord сервер", href: "#discord" },
  { icon: <Gamepad className="w-5 h-5" />, text: "Наши игры", href: "#games" },
  { icon: <BookOpen className="w-5 h-5" />, text: "Азбуки рейдов", href: "#raids" },
  { icon: <Link className="w-5 h-5" />, text: "Полезные ресурсы", href: "#resources" },
  { icon: <Youtube className="w-5 h-5" />, text: "Наши каналы", href: "#channels" },
  { icon: <HelpCircle className="w-5 h-5" />, text: "Жалоба на игрока", href: "#complaint" }
];

const HeroSection = () => {
  return (
    <div className="relative min-h-[50vh] flex flex-col">
      {/* Navigation Menu */}
      <div className="relative z-30 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center py-4">
            <nav className="flex items-center space-x-6">
              {MENU_ITEMS.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-2 text-sm text-gray-200 hover:text-primary transition-colors"
                >
                  {item.icon}
                  <span>{item.text}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background z-10" />
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
        <div className="flex flex-col items-center justify-center h-[50vh] text-center space-y-4">
          <img 
            src="https://i.ibb.co/bLnHTds/42da929679073452.png" 
            alt="Division Logo" 
            className="w-12 h-12"
          />
          <h1 className="catchphrase">
            [RUS] FROM RUSSIA
          </h1>
          <p className="subheading">
            Игровой Discord сервер
          </p>
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