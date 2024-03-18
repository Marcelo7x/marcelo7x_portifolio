import React from "react";
import { SocialIcon } from 'react-social-icons/component';
import 'react-social-icons/github';
import 'react-social-icons/email';
import 'react-social-icons/linkedin';
import 'react-social-icons/instagram';
import 'react-social-icons/whatsapp';

const SocialButtons : React.FC<{}> = () => {
    return <div className="text-md flex flex-row justify-center items-center gap-5">
        <SocialIcon network="github" url="https://github.com/marcelo7x" /> 
        <SocialIcon network="linkedin" url="https://www.linkedin.com/in/marcelo7x/" /> 
        <SocialIcon network="email" url="mailto:marcelohenrique7x@gmail.com" /> 
        <SocialIcon network="instagram" url="https://www.instagram.com/marcelo7x?igsh=NGVhN2U2NjQ0Yg==" /> 
        <SocialIcon network="whatsapp" url="https://api.whatsapp.com/send?phone=5531984614211&text=Ol%C3%A1%2C%20Marcelo!" /> 
    </div>
};

export default SocialButtons;