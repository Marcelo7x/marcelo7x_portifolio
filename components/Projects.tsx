import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectProps {
  href: string;
  src: string;
  alt: string;
  title: string;
  description: string;
}

const Project: React.FC<ProjectProps> = ({ href, src, alt, title, description }) => (
  <Link href={href} rel="noopener noreferrer" target="_blank" className="z-[2]">
    <div className="flex-row flex mb-5 max-w-[450px]">
      <Image src={src} height={150} width={150} alt={alt} className="rounded-lg" />
      <div className="p-3">
        <p className="text-white font-semibold text-xl">{title}</p>
        <p className="text-gray-500 text-base">{description}</p>
      </div>
    </div>
  </Link>
);

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">PROJETOS</h1>
      <div className="container mx-auto 2xl">
        <div className="flex-col flex md:flex-row items-center mt-8">
          <Project
            href="https://estimate.gesep.com.br/"
            src="/estimate.png"
            alt="Estimate"
            title="Estimate"
            description="EStimate é um app android/web para o dimensionamento fotovoltaico com mais de 10 mil downloads na playstore."
          />
          <Project
            href="https://github.com/Marcelo7x/tutor_musical/"
            src="/tutor.png"
            alt="Tutor Musical"
            title="Tutor Musical"
            description="Tutor Musical é um app desktop que permite a visualização e execução de partituras, com feedback dos acertos e erros."
          />
        </div>
        <div className="flex-col flex md:flex-row items-center">
          <Project
            href="https://github.com/Marcelo7x/my_republic/"
            src="/my_republic.png"
            alt="My Republic"
            title="My Republic"
            description="My Republic é um app android para o gerenciamento de contas de repúblicas."
          />
          <Project
            href="https://github.com/Marcelo7x/weather-now/blob/master/README.md/"
            src="/weather_now.jpg"
            alt="Weather Now"
            title="Weather Now"
            description="Weather Now é um app android de previsão do tempo."
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
