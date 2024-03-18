// import { Social_Icons } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialButtons from "./SocialButtons";

const Footer: React.FC<{}> = () => {
  return (
    <div className=" container mx-auto 2xl pt-[50px] pb-8 ">
      <div className="pb-10 justify-center flex ">
        <SocialButtons />
      </div>
      <p className="text-gray-300 text-center text-sm">
        By Marcelo Nascimento
      </p>
    </div>
  );
};

export default Footer;
