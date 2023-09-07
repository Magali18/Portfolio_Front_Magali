
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {postVisit, getVisit} from "../../redux/vistHandler";
import './Landing.css'
import 'aos/dist/aos.css'; 
import AOS from 'aos';


 



const Landing = () => {
  //----------------------ESTADO--------------------------

  const [visitData, setVisitData] = useState({
    name:" ",
  });
  //---------------------VARIABLES------------------------

  const dispatch = useDispatch();
  const form = useRef();
  const navigate = useNavigate();

  //-----------------HANDLE CHANGE------------------------
 
  const handleChange = (e) => {
   
    setVisitData({ ...visitData,[e.target.name]: e.target.value,
    });
  };
  //-----------------SEND EMAIL----------------------------

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
  //----------------NAVIGATE------------------------
  const goToHomePage = () => {
    navigate("/home");
  };
  //--------------------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
  {/*sendEmail(e);*/}
    goToHomePage()
    dispatch(postVisit());
   };

const butonsubmit =()=>{
  dispatch(getVisit())
}
  //---------------------------------------------------

  return (
    <div className="containerLanding">
<button type="submit" onSubmit={butonsubmit}>TodosLosUsuarios</button>
      <div className="containerForm">
        <div  data-aos="zoom-out-up">
      <h1>Hola </h1>
      </div>
      <h2>mi nombre es Magali</h2>
      <h3 className="efect">Cual es el tuyo ? </h3>
      <p>Podes escribirlo aqui</p>

      <form id='LandingForm' ref={form} onSubmit={handleSubmit}>
        <input
        className='EstiloInput'
          type="text"
          name="name"
          value={visitData.name}
          onChange={handleChange}
        />
       
        <button className='botonElegante' type="submit"> Enviar</button>
       
       

         <p><a href="/home" type="submit">Prefiero no hacerlo</a></p>
    
      </form>
      </div>
    </div>
  );
};


export default Landing;
