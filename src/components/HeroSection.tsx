import { Shield } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const HeroSection = () => {
  return (
    <div className="relative min-h-[50vh] flex flex-col">
      {/* Navigation Menu */}
      <div className="relative z-30 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
        <div className="container mx-auto">
          <NavigationMenu className="mx-auto">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Discord</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-[200px] space-y-2">
                    <NavigationMenuLink className="block hover:text-primary cursor-pointer">
                      Виджет Discord сервера
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block hover:text-primary cursor-pointer">
                      Как присоединиться к серверу
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Азбуки рейдов</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-[250px] space-y-2">
                    <NavigationMenuLink className="block hover:text-primary cursor-pointer">
                      Азбука рейда "Тяжелые времена"
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block hover:text-primary cursor-pointer">
                      Азбука рейда "Железный конь"
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Контент-мейкеры</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-[200px] space-y-2">
                    <NavigationMenuLink className="block hover:text-primary cursor-pointer">
                      MuRomeZ
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block hover:text-primary cursor-pointer">
                      MrMyth92
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
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