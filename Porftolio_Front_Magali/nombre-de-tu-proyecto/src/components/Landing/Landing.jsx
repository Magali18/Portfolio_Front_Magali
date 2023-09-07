import "bootstrap/dist/css/bootstrap.min.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { postVisit, getVisit, postVisitNull } from "../../redux/vistHandler";
import "./Landing.css";




const Landing = () => {
  //----------------------ESTADO--------------------------
const allVisit = useSelector((state)=> state.visitor.allVisit)

console.log(allVisit)
  const [visitData, setVisitData] = useState({
    name: "",
  });

  const [errors, setErrors] = useState({
    name: "",
  });
  //---------------------VARIABLES------------------------

  const dispatch = useDispatch();
  const form = useRef();
  const navigate = useNavigate();

  //-----------------HANDLE CHANGE------------------------

  const handleChange = (e) => {
    setVisitData({ ...visitData, [e.target.name]: e.target.value });
    setErrors(
    {...errors,
        [e.target.name]: e.target.value,
      }
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
    if(errors.name){
      {
        /*sendEmail(e);*/
      }
      goToHomePage();
      dispatch(postVisit(visitData));
    }
    }
   
  //-------------------------BOTON PRUEBA---------------------------------

  const butonsubmit = () => {
    dispatch(getVisit());
  };
  //-------------------------HANDLE CLICK-------------------------------
  const handleClick = () => {
    dispatch(postVisitNull());
    sendEmail();
  };
  //---------------------------------------------------------------

  return (
    <div className="containerLanding">

      <button onClick={butonsubmit}>
        TodosLosUsuarios
      </button>

      <div className="containerForm">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="300"
        >
     
          <h1>Hola </h1>
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="600"
        >
     
          <h4>mi nombre es Magali</h4>
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <h3>Cual es el tuyo ? </h3>
        </div>

        <p>Podes escribirlo aqui</p>

        <form id="LandingForm" ref={form} onSubmit={handleSubmit}>
          <input
          placeholder="Tu nombre aqui"
            className="EstiloInput"
            type="text"
            name="name"
            value={visitData.name}
            onChange={handleChange}
          />

          <button className="botonElegante" type="submit">
            Enviar
          </button>
        </form>
        <p>
          <a href="/home" onClick={handleClick} type="submit">
            Prefiero no hacerlo
          </a>
        </p>
        <p>
          Quiero que se considere este profolio como una muestra de mis
          habilidades en programacion.
        </p>
      </div>
    </div>
  );
};

export default Landing;
