"use client";

import { Cross as Hamburger } from "hamburger-react";
import React, { useState } from "react";

const Navbar: React.FC<{}> = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full h-[${!menuOpen? 100: 140}px] bg-['#111'] fixed backdrop-blur-sm z-50 px-8 py-2">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        <a
          className="h-auto w-auto flex flex-row items-center text-xl text-white font-bold cursor-pointer"
          onClick={() => {
            const element = document.getElementById("banner");
            element?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }}
        >
          Marcelo7x
        </a>

        <div className="flex flex-row gap-5 items-center">
          <div className="hidden sm:flex gap-5 text-xl font-medium">
            {/* Links de navegação */}
            <a
              className="text-white cursor-pointer"
              onClick={() => {
                const element = document.getElementById("about");
                if (!element) return;
                window.scroll({
                  top: element.offsetTop - 40,
                  behavior: "smooth",
                });
              }}
            >
              Sobre
            </a>
            <a
              className="text-white cursor-pointer"
              onClick={() => {
                const element = document.getElementById("experience");
                if (!element) return;
                window.scroll({
                  top: element.offsetTop - 40,
                  behavior: "smooth",
                });
              }}
            >
              Experiência
            </a>
            <a
              className="text-white cursor-pointer"
              onClick={() => {
                const element = document.getElementById("projects");
                if (!element) return;
                window.scroll({
                  top: element.offsetTop - 40,
                  behavior: "smooth",
                });
              }}
            >
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
            <a
              className="text-white text-xl font-medium cursor-pointer"
              onClick={() => {
                toggleMenu();
                const element = document.getElementById("about");
                if (!element) return;
                window.scroll({
                  top: element.offsetTop - 40,
                  behavior: "smooth",
                });
              }}
            >
              Sobre
            </a>
            <a
              className="text-white text-xl font-medium cursor-pointer"
              onClick={() => {
                toggleMenu();
                const element = document.getElementById("experience");
                if (!element) return;
                window.scroll({
                  top: element.offsetTop - 40,
                  behavior: "smooth",
                });
              }}
            >
              Experiência
            </a>
            <a
              className="text-white text-xl font-medium cursor-pointer"
              onClick={() => {
                toggleMenu();
                const element = document.getElementById("projects");
                if (!element) return;
                window.scroll({
                  top: element.offsetTop - 40,
                  behavior: "smooth",
                });
              }}
            >
              Projetos
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
