import { wppMessageRedux } from "../../redux/vistHandler";
import { useDispatch } from "react-redux";
import React from "react";
import "./wppMesagge.css";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { MdSend } from "react-icons/md";
import { BsCheck2All, BsFillChatHeartFill } from "react-icons/bs";
import {addMensaje} from "../../redux/visitorSlice";
import { useSelector } from "react-redux";


const WppMessage = () => {
  const { mensajeState } = useSelector((state) => state.visitor);
  const {value}= useSelector((state)=>state.visitor)
  console.log("mensajeState ----> : " + mensajeState);

  const dispatch = useDispatch();
  const [send, stSend] = useState(false);

  const [mensaje, setMensaje] = useState({
    text: "",
  });

  const onChange = (e) => {
    setMensaje({
      ...mensaje,
      [e.target.name]: e.target.value,
    });
  };
  
  const resetInput =(name)=>{
  
      setMensaje({
        ...mensaje,
        [name]: "",
    
    })
  }
  console.log(send)

  const wppSubmit = (e) => {
    e.preventDefault();
console.log(mensaje.text)
    dispatch(addMensaje(mensaje.text));
    dispatch(wppMessageRedux(mensaje)).catch((error) => {
      console.error("Error al enviar el mensaje:", error.message);
    });
    stSend(true);
    resetInput("text");

  };

  return (
    <Accordion defaultActiveKey="0" className="custom-accordion">
      <Accordion.Item eventKey={value}>
        <Accordion.Header>
          <AiOutlineWhatsApp /> Enviame un mensaje
        </Accordion.Header>
        <Accordion.Body>
          <p className="myMensaje">
            Hola mandame un mensaje!
            <BsFillChatHeartFill className="heartwpp" />
          </p>
          
          {send &&
  mensajeState.map((msj, index) => (
    <p className="respWpp" key={index}>
      {msj} <BsCheck2All className="custom-icon" />
    </p>
  ))
}
 
          <form onSubmit={wppSubmit}>
            <input
              onChange={onChange}
              value={mensaje.text}
              name="text"
              placeholder="Escribe un mensaje"
              className="inputWpp"
              type="text"
            ></input>
            <button className="botonWpp">
              <MdSend />
            </button>
          </form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
export default WppMessage;
