import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Navigation } from "lucide-react";

const Navbar = () => {
  return (
    <nav
      className="bg-white/90 shadow-lg shadow-black/5 backdrop-blur-md
        dark:bg-black/90 dark:shadow-white/5 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-black font-heading text-4xl text-primary">
              MoneyTransfer
            </h1>
          </div>
          <div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
