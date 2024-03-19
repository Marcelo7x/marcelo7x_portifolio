"use client";

import React from "react";
import Typewriter from "typewriter-effect";
import SocialButtons from "./SocialButtons";

const Banner: React.FC<{}> = () => {
  return (
    <div id="banner" className="h-screen w-screen flex flex-col justify-center" >
      <div className="flex flex-row justify-center z-[20]">
        <div className="text-center max-w-[900px]">
          <div className="cursor-pointer tracking-tighter text-5xl font-semibold text-white/60 c sm:pr-0 md:pr-56">
            Fullstack
          </div>
          <div className="cursor-pointer tracking-tighter text-6xl font-semibold text-white/75 c sm:pr-0 md:pr-28">
            Developer
          </div>
          <div className="cursor-pointer tracking-tighter text-8xl font-semibold text-white">
            Marcelo
          </div>
          <p className="text-lg text-gray-200 mt-10 sm:h-[180px] h-[120px] px-3 animate-typing overflow-hidden">
            <Typewriter
              options={{
                delay: 30,
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
