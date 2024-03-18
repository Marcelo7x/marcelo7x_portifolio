import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
    >
      <div className="flex flex-col  justify-around flex-wrap items-center max-w-[900px] px-8">
        <h1 className="text-white font-semibold text-6xl">Sobre</h1>

        <p className="text-gray-300 text-justify pt-8">
          <b>Marcelo</b>, um entusiasta da tecnologia e apaixonado por programação. Atualmente, estou cursando <b>Ciência da Computação</b> no último período na <b>Universidade Federal de Viçosa (UFV)</b>, e atualmente atuo como desenvolvedor fullstack. Minhas habilidades abrangem uma variedade de linguagens e tecnologias, incluindo <b>C, C++, Dart, Firebase, Flutter, Java, JavaScript, MySQL, PostgreSQL, Python, Git, GitHub, Docker, Linux, Windows, Mac, Android, iOS, entre outras</b>.<br />Sempre antenado nas últimas tendências tecnológicas, com uma paixão especial pela versatilidade e eficiência, estou constantemente explorando novas ferramentas para aprimorar meu conjunto de habilidades.<br />Além disso, sou um amante da música, e assim como na programação, acredito que a harmonia é essencial para o sucesso. Explore meu portfólio e descubra como transformo ideias em realidade.<br />Vamos criar algo extraordinário juntos!
        </p>
      </div>
    </section>
  );
};

export default About;
