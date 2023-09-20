import "bootstrap/dist/css/bootstrap.min.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useDispatch } from "react-redux";
import "./Landing.css";



const Landing = () => {
  
  const form = useRef();
  //--------------------SEND EMAIL----------------------------

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fwmu3vq",
        "template_dqufk4h",
        form.current,
        "A-0VQcem-nMbwDjM6"
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
  return (
    <div>
      <div className="containerForm">
        
       <div className='container2'> 
       <h1> Hola, soy Magali</h1>
       <h2> Full Stack Developer Web Junior</h2>
       
      </div>
      </div>
    </div>
  );
};

export default Landing;
