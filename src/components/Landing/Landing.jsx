import "bootstrap/dist/css/bootstrap.min.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postVisit, postVisitNull } from "../../redux/vistHandler";
import "./Landing.css";
import { addVisitor } from "../../redux/visitorSlice";

const Landing = () => {
  //----------------------ESTADO--------------------------
  const allVisit = useSelector((state) => state.visitor.allVisit);

  console.log(allVisit);
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
    setErrors({ ...errors, [e.target.name]: e.target.value });
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
    if (errors.name) {
      {
        /*sendEmail(e);*/
      }
      goToHomePage();
      dispatch(postVisit(visitData));
      dispatch(addVisitor(visitData));
    }
  };

  //-------------------------HANDLE CLICK-------------------------------
  const handleClick = () => {
    dispatch(postVisitNull());
  };
  //---------------------------------------------------------------

  return (
    <div>
      <div className="containerForm">
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
            START
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
