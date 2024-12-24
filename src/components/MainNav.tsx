import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import React from "react"

const MainNav = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Discord</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-[400px]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="#discord"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium text-[#F97316]">
                      Discord сервер
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Присоединяйтесь к нашему игровому сообществу
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Азбуки рейдов</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    href="#raid1"
                  >
                    <div className="text-sm font-medium leading-none text-[#F97316]">
                      Тяжелые времена
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Азбука рейда "Тяжелые времена"
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    href="#raid2"
                  >
                    <div className="text-sm font-medium leading-none text-[#F97316]">
                      Железный конь
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Азбука рейда "Железный конь"
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Каналы</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    href="#muromeZ"
                  >
                    <div className="text-sm font-medium leading-none text-[#F97316]">
                      MuRomeZ
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Twitch канал MuRomeZ
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    href="#mrmyth"
                  >
                    <div className="text-sm font-medium leading-none text-[#F97316]">
                      MrMyth92
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Twitch канал MrMyth92
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default MainNav