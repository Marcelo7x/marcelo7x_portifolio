import Image from "next/image";
import React from "react";
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
            className="rounded-full m-4"
            src={"/marcelo.webp"}
            height={200}
            width={200}
            alt={"Marcelo photo"}          />
          <p className="text-gray-300 text-justify text-lg pt-8">
            <b>Marcelo</b>, um entusiasta da tecnologia e apaixonado por programação. Atualmente, estou cursando <b>Ciência da Computação</b> no último período na <b>Universidade Federal de Viçosa (UFV)</b>, e atualmente atuo como desenvolvedor fullstack. Minhas habilidades abrangem uma variedade de linguagens e tecnologias, incluindo <b>Android, C, C++, Dart, Docker, Firebase, Flutter, Git, GitHub, Java, JavaScript, IOS, Linux, Mac, MySQL, PostgreSQL, Python, Windows, entre outras</b>.<br />Sempre antenado nas últimas tendências tecnológicas, com uma paixão especial pela versatilidade e eficiência, estou constantemente explorando novas ferramentas para aprimorar meu conjunto de habilidades.<br />Além disso, sou um amante da música, e assim como na programação, acredito que a harmonia é essencial para o sucesso. Explore meu portfólio e descubra como transformo ideias em realidade.<br />Vamos criar algo extraordinário juntos!
          </p>
        </div>
            <div className="flex flex-wrap mt-8 gap-8 animate-pulse">
              <AndroidOriginal size={64} />
              <COriginal size={64} />
              <CplusplusOriginal size={64} />
              <DartOriginal size={64} />
              <DockerOriginal size={64} />
              <FirebaseOriginal size={64} />
              <FlutterOriginal size={64} />
              <GithubOriginal className="bg-white rounded-full border-collapse " size={64} />
              <GitOriginal size={64} />
              <JavaOriginal size={64} />
              <JavascriptOriginal size={64} />
              <LinuxOriginal size={64} />
              <MysqlOriginalWordmark size={64} />
              <PostgresqlOriginal size={64} />
              <PythonOriginal size={64} />
              <Windows11OriginalWordmark size={64} />
            </div>
      </div>
    </section>
  );
};

export default About;
