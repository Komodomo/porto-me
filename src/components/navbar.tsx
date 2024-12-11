"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/toggle-theme";
import React, { useState } from "react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Container } from "@/components/container";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-zinc-900 z-50 border-b border-zinc-200 dark:border-zinc-800">
      <Container>
        <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Rafimh .
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-zinc-900 dark:text-zinc-50 hover:underline"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-zinc-900 dark:text-zinc-50 hover:underline"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("techstack")}
              className="text-zinc-900 dark:text-zinc-50 hover:underline"
            >
              TechStack
            </button>
            <Link href="/gallery" className="text-zinc-900 dark:text-zinc-50 hover:underline">
              Gallery
            </Link>
            <Link href="/about" className="text-zinc-900 dark:text-zinc-50 hover:underline">
              About
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
                <DropdownMenuItem onClick={() => scrollToSection("home")}>
                  Home
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("projects")}>
                  Projects
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("techstack")}>
                  TechStack
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