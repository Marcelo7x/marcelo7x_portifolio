"use client";

import React from "react";
import Typewriter from "typewriter-effect";
import SocialButtons from "./SocialButtons";

const Banner: React.FC<{}> = () => {
  return (
    <div className="h-screen flex " >
      <div className="flex flex-row items-center justify-center  px-20 z-[20]">
        <div className="flex flex-col  justify-center  text-center">
          <div className="flex flex-col gap-6 mt-6 cursor-pointer tracking-tighter text-5xl font-semibold text-white/50 max-w-[800px] w-auto h-auto pr-56">
            Fullstack
          </div>
          <div className="flex flex-col gap-6  cursor-pointer tracking-tighter text-6xl font-semibold text-white/75 max-w-[800px] w-auto h-auto pr-28">
            Developer
          </div>
          <div className="flex flex-col gap-6 cursor-pointer tracking-tighter text-8xl font-semibold text-white max-w-[800px] w-auto h-auto">
            Marcelo
          </div>
          <p className="text-md text-center text-gray-200 mt-10 my-5 max-w-[800px] h-[120px] animate-typing overflow-hidden">
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
