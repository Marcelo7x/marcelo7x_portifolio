"use client";

import React from "react";

const Navbar: React.FC<{}> = () => {
  return (
    <div className="w-full h-[65px] bg-['#111'] fixed backdrop-blur-sm z-50 px-8">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        <a className="h-auto w-auto flex flex-row items-center text-xl text-white font-bold cursor-pointer" onClick={
          () => {
            const element = document.getElementById('banner');
            element?.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            });
          }
        }>
          Marcelo7x
        </a>

        <div className="flex flex-row gap-5">
          <a className="text-white cursor-pointer" onClick={
            () => {
              const element = document.getElementById('about');
              element?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
              });
            }
          }>Sobre</a>
          <a className="text-white cursor-pointer" onClick={
            () => {
              const element = document.getElementById('experience');
              element?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
              });
            }
          }>Experiêcia</a>
          <a className="text-white cursor-pointer" onClick={
            () => {
              const element = document.getElementById('projects');
              element?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
              });
            }
          }>Projetos</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
