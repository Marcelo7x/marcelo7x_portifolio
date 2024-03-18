import Image from "next/image";
import Link from "next/link";
import React from "react";
// import estimateImg from "../assets/images/estimate.png";
// import myrepublicImg from "../assets/images/my_republic.png";
// import tutorImg from "../assets/images/tutor.png";
// import weatherImg from "../assets/images/weather_now.jpg";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJETOS
      </h1>

      <div className=" container mx-auto 2xl max-w-[900px] ">
        <div className="flex-col flex md:flex-row items-center mt-7">
          <Link
            href="https://estimate.gesep.com.br/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5 max-w-[450px] p-4">
              <Image
                src="/estimate.png"
                height={150}
                width={150}
                alt="Estimate"
                className="rounded-lg"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Estimate</p>
                <p className="text-gray-500 text-[10px]">
                  EStimate é um app android/web para o dimensionamento fotovoltaico com mais de 10 mil downloads na playstore.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://github.com/Marcelo7x/tutor_musical/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5 max-w-[450px]">
              <Image
                src="/tutor.png"
                height={150}
                width={150}
                alt="Tutor Musical"
              />
              <div className=" p-3 ">
                <p className="text-white font-semibold text-xl">
                  Tutor Musical
                </p>
                <p className="text-gray-500 text-[10px]">
                  Tutor Musical é um app desktop que permite a visualização e execução de partituras, com feedback dos acertos e erros.
                </p>
              </div>
            </div>
          </Link>

        </div>
        <div className="flex-col flex md:flex-row items-center p-4">
          <Link
            href="https://github.com/Marcelo7x/my_republic/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5 max-w-[450px]">
              <Image
                src="/my_republic.png"
                height={150}
                width={150}
                alt="My Republic"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">My Republic</p>
                <p className="text-gray-500 text-[10px]">
                  My Republic é um app android para o gerenciamento de contas de repúblicas.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://github.com/Marcelo7x/weather-now/blob/master/README.md/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5 max-w-[450px]">
              <Image
                src="/weather_now.jpg"
                height={150}
                width={150}
                alt="Payoasis"
              />
              <div className="p-3 ">
                <p className="text-white font-semibold text-xl">Weather Now</p>
                <p className="text-gray-500 text-[10px]">
                  Weather Now é um app android de previsão do tempo.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
