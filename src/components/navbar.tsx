"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ModeToggle } from "@/components/toggle-theme";
import React, { useState } from "react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Container } from "@/components/container";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (sectionId: string) => {
    if (pathname === '/') {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-zinc-900 z-50 border-b border-zinc-200 dark:border-zinc-800">
      <Container>
        <div className="container mx-auto py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              Rafimh . | sorry still building
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => handleNavigation("home")}
                className="relative text-zinc-900 dark:text-zinc-50 hover:no-underline group"
              >
                Home<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-zinc-900 dark:bg-zinc-50 transform -rotate-4 scale-x-0 transition-transform group-hover:scale-x-100"></span>
                <span className="absolute -bottom-2.5 left-0 w-full h-0.5 bg-zinc-900 dark:bg-zinc-50 transform -rotate-3 scale-x-0 transition-transform group-hover:scale-x-100 delay-75"></span>
              </button>
              <button
                onClick={() => handleNavigation("projects")}
                className="relative text-zinc-900 dark:text-zinc-50 hover:no-underline group"
              >
                Projects<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-zinc-900 dark:bg-zinc-50 transform -rotate-4 scale-x-0 transition-transform group-hover:scale-x-100"></span>
                <span className="absolute -bottom-2.5 left-0 w-full h-0.5 bg-zinc-900 dark:bg-zinc-50 transform -rotate-3 scale-x-0 transition-transform group-hover:scale-x-100 delay-75"></span>
              </button>
              <button
                onClick={() => handleNavigation("tech")}
                className="relative text-zinc-900 dark:text-zinc-50 hover:no-underline group"
              >
                Tech<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-zinc-900 dark:bg-zinc-50 transform -rotate-4 scale-x-0 transition-transform group-hover:scale-x-100"></span>
                <span className="absolute -bottom-2.5 left-0 w-full h-0.5 bg-zinc-900 dark:bg-zinc-50 transform -rotate-3 scale-x-0 transition-transform group-hover:scale-x-100 delay-75"></span>
              </button>
              <Link
                href="/gallery"
                className="relative text-zinc-900 dark:text-zinc-50 hover:no-underline group"
              >
                Gallery<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-zinc-900 dark:bg-zinc-50 transform -rotate-4 scale-x-0 transition-transform group-hover:scale-x-100"></span>
                <span className="absolute -bottom-2.5 left-0 w-full h-0.5 bg-zinc-900 dark:bg-zinc-50 transform -rotate-3 scale-x-0 transition-transform group-hover:scale-x-100 delay-75"></span>
              </Link>
              <Link
                href="/about"
                className="relative text-zinc-900 dark:text-zinc-50 hover:no-underline group"
              >
                About<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-zinc-900 dark:bg-zinc-50 transform -rotate-4 scale-x-0 transition-transform group-hover:scale-x-100"></span>
                <span className="absolute -bottom-2.5 left-0 w-full h-0.5 bg-zinc-900 dark:bg-zinc-50 transform -rotate-3 scale-x-0 transition-transform group-hover:scale-x-100 delay-75"></span>
              </Link>
              <ModeToggle />
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden ml-auto flex items-center gap-2">
              <ModeToggle />
              <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                <DropdownMenuTrigger asChild>
                  <button className="text-zinc-900 dark:text-zinc-50">
                    {isOpen ? (
                      <XMarkIcon className="h-6 w-6 transition-transform duration-200" />
                    ) : (
                      <Bars3BottomRightIcon className="h-6 w-6 transition-transform duration-200" />
                    )}
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" sideOffset={5} className="bg-white dark:bg-zinc-900">
                  <DropdownMenuItem onClick={() => handleNavigation("home")}>
                    Home
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleNavigation("projects")}>
                    Projects
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleNavigation("tech")}>
                    Tech
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/gallery">Gallery</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/about">About</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;