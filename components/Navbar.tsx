"use client";

import React from "react";
import SocialButtons from "./SocialButtons";

const Navbar: React.FC<{}> = () => {
  return (
    <div className="w-full h-[65px] bg-['#111'] fixed backdrop-blur-sm z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="/" className="h-auto w-auto flex flex-row items-center text-xl text-white font-bold">
          Marcelo7x
        </a>

        <div className="flex flex-row gap-5">
          {/* <SocialButtons /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
