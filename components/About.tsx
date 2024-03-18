import Image from "next/image";
import React, { useRef } from "react";
import { AndroidOriginal, COriginal, CplusplusOriginal, DartOriginal, DockerOriginal, FirebaseOriginal, FlutterOriginal, JavaOriginal, JavascriptOriginal, MysqlOriginalWordmark, PostgresqlOriginal,  PythonOriginal, GitOriginal, GithubOriginal, LinuxOriginal, Windows11OriginalWordmark  } from 'devicons-react';

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
    >
      <div className="flex flex-col  justify-around flex-wrap items-center max-w-[900px] px-8">
        <h1 className="text-white font-semibold text-6xl">Sobre</h1>
        <div className="flex flex-col lg:flex-row items-center mt-4">
          <Image
            className="rounded-full m-4 lg:m-16 z-50"
            src={"/marcelo.webp"}
            height={200}
            width={200}
            alt={"Marcelo photo"}          />
          <p className="text-gray-300 text-justify text-lg pt-8">
            <b>Marcelo</b>, um entusiasta da tecnologia e apaixonado por programação. Atualmente, estou cursando <b>Ciência da Computação</b> no último período na <b>Universidade Federal de Viçosa (UFV)</b>, e atualmente atuo como desenvolvedor fullstack. Minhas habilidades abrangem uma variedade de linguagens e tecnologias, incluindo <b>Android, C, C++, Dart, Docker, Firebase, Flutter, Git, GitHub, Java, JavaScript, IOS, Linux, Mac, MySQL, PostgreSQL, Python, Windows, entre outras</b>.<br />Sempre antenado nas últimas tendências tecnológicas, com uma paixão especial pela versatilidade e eficiência, estou constantemente explorando novas ferramentas para aprimorar meu conjunto de habilidades.<br />Além disso, sou um amante da música, e assim como na programação, acredito que a harmonia é essencial para o sucesso. Explore meu portfólio e descubra como transformo ideias em realidade.<br />Vamos criar algo extraordinário juntos!
          </p>
        </div>
            <div className="flex flex-wrap items-center justify-center mt-8 gap-6 animate-pulse">
              <AndroidOriginal size={48} />
              <COriginal size={48} />
              <CplusplusOriginal size={48} />
              <DartOriginal size={48} />
              <DockerOriginal size={48} />
              <FirebaseOriginal size={48} />
              <FlutterOriginal size={48} />
              <GithubOriginal className="bg-white rounded-full border-collapse " size={48} />
              <GitOriginal size={48} />
              <JavaOriginal size={48} />
              <JavascriptOriginal size={48} />
              <LinuxOriginal size={48} />
              <MysqlOriginalWordmark size={48} />
              <PostgresqlOriginal size={48} />
              <PythonOriginal size={48} />
              <Windows11OriginalWordmark size={48} />
            </div>
      </div>
    </section>
  );
};

export default About;
