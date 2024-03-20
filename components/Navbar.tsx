"use client";

import { Cross as Hamburger } from "hamburger-react";
import React, { useState } from "react";

const Navbar: React.FC<{}> = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToElement = (id: string) => {
    if (id !== "banner" || menuOpen) toggleMenu();
    const element = document.getElementById(id);
    if (element) {
      window.scroll({
        top: element.offsetTop - 40,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`w-full h-${menuOpen ? 140 : 100}px bg-['#111'] fixed backdrop-blur-sm z-50 px-8 py-2`}>
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        <a
          className="h-auto w-auto flex flex-row items-center text-xl font-bold cursor-pointer hover:scale-110 transition-transform text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400"
          onClick={() => scrollToElement("banner")}
        >
          Marcelo7x
        </a>

        <div className="flex flex-row gap-5 items-center">
          <div className="hidden sm:flex gap-5 text-xl font-medium">

            <a className="text-white cursor-pointer hover:scale-110 transition-transform" onClick={() => scrollToElement("about")}>
              Sobre
            </a>
            <a className="text-white cursor-pointer hover:scale-110 transition-transform" onClick={() => scrollToElement("experience")}>
              Experiência
            </a>
            <a className="text-white cursor-pointer hover:scale-110 transition-transform" onClick={() => scrollToElement("projects")}>
              Projetos
            </a>
          </div>

          {/* Ícone de menu responsivo para telas menores */}
          <div className="sm:hidden">
            <Hamburger toggled={menuOpen} toggle={toggleMenu} color="white" />
          </div>
        </div>
      </div>

      {/* Menu responsivo para telas menores */}
      {menuOpen && (
        <div className="sm:hidden">
          <div className="flex flex-col items-center gap-2">
            <a className="text-white text-xl font-medium cursor-pointer" onClick={() => scrollToElement("about")}>
              Sobre
            </a>
            <a className="text-white text-xl font-medium cursor-pointer" onClick={() => scrollToElement("experience")}>
              Experiência
            </a>
            <a className="text-white text-xl font-medium cursor-pointer" onClick={() => scrollToElement("projects")}>
              Projetos
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
