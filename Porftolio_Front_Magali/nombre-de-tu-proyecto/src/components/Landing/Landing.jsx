import "bootstrap/dist/css/bootstrap.min.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import postVisit from "../../redux/vistHandler";
import ('./Landing.css')

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
    const { name, value } = e.target;
    setVisitData({ ...visitData, [name]: value });
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
    sendEmail(e);
    goToHomePage()
    visitData?dispatch(postVisit(visitData)):dispatch(postVisit());
  };

  //---------------------------------------------------

  return (
    <div className="containerLanding">
      <div className="containerForm">
      <h1>Hola mi nombre es Magali</h1>
      <h1>Cual es el tuyo ? </h1>
      <p>Podes escribirlo aqui</p>

      <form id='LandingForm' ref={form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={visitData.name}
          onChange={handleChange}
        />

        <button type="submit">EMPEZAR</button>

        <p>Prefiero no hacerlo</p>

        <button type="submit">SEND</button>
      </form>
      </div>
    </div>
  );
};


export default Landing;
