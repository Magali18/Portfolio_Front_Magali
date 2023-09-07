import "bootstrap/dist/css/bootstrap.min.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {postVisit, getVisit,postVisitNull} from "../../redux/vistHandler";
import './Landing.css'
import validate from "./validate";
const Landing = () => {
  //----------------------ESTADO--------------------------

  const [visitData, setVisitData] = useState({
    name:" ",
  });
  const [errors, setErrors] = useState({
    name: " "})
  //---------------------VARIABLES------------------------

  const dispatch = useDispatch();
  const form = useRef();
  const navigate = useNavigate();

  //-----------------HANDLE CHANGE------------------------
 
  const handleChange = (e) => {
   
    setVisitData({ ...visitData,[e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...errors,
        [e.target.name]: e.target.value,
      })
    );
  };
 
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
  //----------------------------NAVIGATE------------------------
  const goToHomePage = () => {
    navigate("/home");
  };
  //-------------------------HANDLE SUBMIT-------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
  {/*sendEmail(e);*/}
    goToHomePage()
    dispatch(postVisit(visitData));
   };
//-------------------------BOTON PRUEBA---------------------------------

const butonsubmit =()=>{
  dispatch(getVisit())
}
//-------------------------HANDLE CLICK-------------------------------
const handleClick =()=>{
  dispatch(postVisitNull())
  sendEmail();
}
  //---------------------------------------------------------------

  return (
    <div className="containerLanding">
<button type="submit" onSubmit={butonsubmit}>TodosLosUsuarios</button>
      <div className="containerForm">
        <div >
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
       
        <button className='botonElegante' type="submit">Enviar</button>
      </form>
      <p><a href="/home" onClick={handleClick} type="submit">Prefiero no hacerlo</a></p>
      </div>
    </div>
  );
};


export default Landing;
