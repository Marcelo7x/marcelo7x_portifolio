"use client";

import React from "react";
import Typewriter from "typewriter-effect";
import SocialButtons from "./SocialButtons";

const Banner: React.FC<{}> = () => {
  return (
    <div id="banner" className="h-screen w-screen flex flex-col justify-center">
      <div className="flex flex-row justify-center z-[20]">
        <div className="text-center max-w-[900px]">
          <div className="cursor-pointer tracking-tighter text-8xl font-semibold text-white">
            Marcelo
          </div>
          <div className="cursor-pointer text-5xl font-light font-mono text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-600">
            <span className="text-white font-mono ">&lt;</span>
            Developer
            <span className="text-white font-mono ">&#47;&gt;</span>
          </div>
          <p className="text-lg text-gray-200 mt-10 sm:h-[120px] h-[190px] px-3 animate-typing overflow-hidden">
            <Typewriter
              options={{
                delay: 30,
                cursorClassName: "text-orange-500",
              }}
              onInit={(typewriter) => {
                typewriter.typeString('Com a batuta do código, regendo bits e pixels, transformo desafios em sinfonias digitais.\nMinhas linhas de código são a melodia, e o café? Bem, ele só acompanha o ritmo dessa orquestra tecnológica.')
                  .start();
              }}
            />
          </p>
          <SocialButtons />
        </div>
      </div>
    </div>
  );
};

export default Banner;
