import React from "react";
import { ModeToggle } from "@/components/toggle-theme";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full fixed top-0 bg-white dark:bg-zinc-900 p-4 px-16 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
          MyApp
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-zinc-900 dark:text-zinc-50 hover:underline">
            Home
          </a>
          <a href="#" className="text-zinc-900 dark:text-zinc-50 hover:underline">
            About
          </a>
          <a href="#" className="text-zinc-900 dark:text-zinc-50 hover:underline">
            Contact
          </a>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;