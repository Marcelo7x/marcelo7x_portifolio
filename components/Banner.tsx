"use client";

import React from "react";
import Typewriter from "typewriter-effect";
import SocialButtons from "./SocialButtons";

const Banner: React.FC<{}> = () => {
  return (
    <div id="banner" className="h-screen w-screen flex flex-col items-center justify-center" >
      <div className="flex flex-row items-center justify-center z-[20]">
        <div className="flex flex-col  justify-center  text-center">
          <div className="flex flex-col gap-6 mt-6 cursor-pointer tracking-tighter text-5xl font-semibold text-white/50 c sm:pr-0 md:pr-56">
            Fullstack
          </div>
          <div className="flex flex-col gap-6  cursor-pointer tracking-tighter text-6xl font-semibold text-white/75 c sm:pr-0 md:pr-28">
            Developer
          </div>
          <div className="flex flex-col gap-6 cursor-pointer tracking-tighter text-8xl font-semibold text-white c">
            Marcelo
          </div>
          <p className="text-lg text-center text-gray-200 mt-10 my-5 sm:h-[180px] h-[120px] max-w-[900px] px-3 animate-typing overflow-hidden">
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
