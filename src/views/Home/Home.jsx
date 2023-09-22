import "./Home.css";
import { VscGithub, VscTwitter } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { FaLinkedin,FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import React, { useEffect, useRef } from "react";

import FotoPerfil from "../../image/Screenshot_10.png";

const Home = () => {
  const form = useRef();
  
  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_dpv31ic",
        "template_kamzfmu",
        form.current,
        "Cqv9CHmzuJQAY8x_G"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  useEffect(() => {
   // sendEmail();
   
  }, []);
  return (
    <div className='imageContain'>
        <form ref={form} type="submit" />
      <div className="Home">
        <div className="container">
          <div className="imgHover" >
            <img src={FotoPerfil} alt="ImagenPerfil" />
          </div>
          <div data-aos="fade-up"
     data-aos-duration="3000">
          <h3>Magali Pereyra</h3>
          </div>
          <h4>
          
            ¡No dudes en contactar conmigo y descubrir todo lo que tengo para
            ofrecer!
          </h4>

          <div className="containerStyleIcon">
            <Link to="https://github.com/Magali18">
              <h3>
                <VscGithub />
              </h3>
            </Link>
            <Link to='https://twitter.com/pereyrahmagali'> 
            <h3>
              <VscTwitter />
            </h3>
            </Link>
            <Link to='https://www.linkedin.com/in/magali-pereyra-322682239/'>
            <h3>
              <FaLinkedin />
            </h3>
            </Link>
            <h3> <FaWhatsapp/></h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
