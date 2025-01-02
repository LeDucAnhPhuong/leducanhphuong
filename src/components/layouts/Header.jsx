"use client";
import { useState } from "react";

import { navLinks } from "@/helper/data";
import Image from "next/image";
import ThemeSwitcher from "@/components/ui/theme-switcher";
import Link from "next/link";
import { Menu, X } from "lucide-react";
const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    <ThemeSwitcher className="max-sm:hidden" />
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <Link href={item.href} className="nav-li_a" onClick={onClick}>
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="backdrop-blur-sm fixed top-0 left-0 right-0 z-50 dark:bg-black/80 bg-white/80">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <Link
            href="/"
            className="dark:text-neutral-400 font-bold text-xl dark:hover:text-white text-neutral-700 hover:text-black transition-colors"
          >
            PHUONGLE
          </Link>
          <div className="flex gap-2 sm:hidden items-center">
            <ThemeSwitcher className="" />
            <button
              onClick={toggleMenu}
              className="dark:text-neutral-400 font-bold text-xl dark:hover:text-white text-neutral-700 hover:text-black focus:outline-none "
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
