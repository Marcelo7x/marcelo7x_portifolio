import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience" className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] " >
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        Experiência
      </h1>
      <div className="flex flex-col px-4 items-center max-w-[900px]" >
        <h2 className="text-white font-semibold text-4xl pt-8 pb-4">Profissional</h2>
        <p className="text-white" >
          &#x2022; <b>2023 - HOJE</b> Desenvolvedor FLUTTER/JAVA - Grupo GESEP - app Estimate.
        </p>
        <p className="text-white" >
          &#x2022; <b>2020 - 2023</b> Desenvolvedor FULLSTACK - Autônomo.
        </p>
        <p className="text-white" >
          &#x2022; <b>2014 - 2023</b> Manutenção de computadores e sistemas - Autônomo.
        </p>
      </div>
      <div className="flex flex-col px-4 items-center max-w-[900px]">
        <h2 className="text-white font-semibold text-4xl pt-8 pb-4">Acadêmico</h2>
        <p className="text-white" >
          &#x2022; <b>2023 - HOJE</b> (Último período) Bacharel em Ciência da Computação - Universidade Federal de Viçosa.
        </p>
        <p className="text-white" >
          &#x2022; <b>2020 - 2023</b> Técnico em contabilidade - Pronatec.
        </p>
      </div>
    </section>
  );
};

export default Experience;
