import Image from "next/image";
import Link from "next/link";
import React from "react";

enum ProjectImageType {
  PORTRAIT,
  LANDSCAPE,
}

interface ProjectProps {
  href: string;
  imageSrc: string;
  projectImageType?: ProjectImageType; 
  alt: string;
  title: string;
  description: string;
}

const Project: React.FC<ProjectProps> = ({ href, imageSrc, projectImageType = ProjectImageType.LANDSCAPE, alt, title, description }) => (
  <div className="bg-gray-500 bg-opacity-5 backdrop-blur-sm z-[2] rounded-2xl outline-1 outline-orange-400 outline p-8">
    <Link href={href} rel="noopener noreferrer" target="_blank" className="z-[2]">
      <div className="flex-row justify-around flex mb-5 h-[200px] max-w-[500px]">
        <div className="w-2/5 flex justify-center">
          <Image src={imageSrc} height={180} width={projectImageType === ProjectImageType.LANDSCAPE? 200 : 100} alt={alt} className="rounded-lg" />
        </div>
        <div className="p-3 w-3/5 flex flex-col justify-center items-center ">
          <p className="text-white font-semibold text-2xl">{title}</p>
          <p className="text-gray-500 text-base text-center ">{description}</p>
        </div>
      </div>
    </Link>
  </div>
);

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects" className="w-max-[1300px] flex flex-col items-center">
      <h1 className="text-white font-semibold text-center text-6xl py-[35px]">PROJETOS</h1>
      <div className="container 2xl flex flex-wrap justify-center max-w-[1250px] gap-4">
        <Project
          href="https://estimate.gesep.com.br/"
          imageSrc="/estimate.png"
          alt="Estimate"
          title="Estimate"
          description="EStimate é um app android/web para o dimensionamento fotovoltaico com mais de 10 mil downloads na playstore."
        />
        <Project
          href="https://github.com/Marcelo7x/tutor_musical/"
          imageSrc="/tutor.png"
          alt="Tutor Musical"
          title="Tutor Musical"
          description="Tutor Musical é um app desktop que permite a visualização e execução de partituras, com feedback dos acertos e erros."
        />
        <Project
          href="https://github.com/Marcelo7x/my_republic/"
          imageSrc="/my_republic.png"
          projectImageType={ProjectImageType.PORTRAIT}
          alt="My Republic"
          title="My Republic"
          description="My Republic é um app android para o gerenciamento de contas de repúblicas."
        />
        <Project
          href="https://github.com/Marcelo7x/weather-now/blob/master/README.md/"
          imageSrc="/weather_now.jpg"
          projectImageType={ProjectImageType.PORTRAIT}
          alt="Weather Now"
          title="Weather Now"
          description="Weather Now é um app android de previsão do tempo."
        />
      </div>
    </section>
  );
};

export default Projects;
