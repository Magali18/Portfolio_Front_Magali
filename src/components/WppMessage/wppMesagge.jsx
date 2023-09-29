import { wppMessageRedux } from "../../redux/vistHandler";
import { useDispatch } from "react-redux";
import React from "react";
import "./wppMesagge.css";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { MdSend } from "react-icons/md";
import { BsCheck2All, BsFillChatHeartFill } from "react-icons/bs";
import { addMensaje, setFirstMensaje } from "../../redux/visitorSlice";
import { useSelector} from "react-redux";
import {FaRobot} from 'react-icons/fa'
import {PiNumberCircleOneFill} from 'react-icons/pi'

const WppMessage = () => {
  const dispatch = useDispatch();
  const [mensajeDeBot, setMensajeDeBot] = useState([]);
  const [botEscribiendo, setBotEscribiendo] = useState(false);
  const [efectoEjecutado, setEfectoEjecutado] = useState(false);
  const [banderaFirstMensaje, setBanderaFirstMensaje] = useState(false);
  const [botMensaje, setBotMensaje] = useState(false);
  const [send, stSend] = useState(false);
  const [newMesaje, setNewMesaje] = useState(false)
  const [mensaje, setMensaje] = useState({
    text: "",
  });

  const { firstMensaje } = useSelector((state) => state.visitor);
  const { mensajeState } = useSelector((state) => state.visitor);
  const { value } = useSelector((state) => state.visitor);

  const mensajes = [
"Hi, I'm bot, tu mensaje fue enviado a mi wpp",
"Dejame tu número aquí para contactarte." ];
  const efectoEscribiendo = () => {
    if (!efectoEjecutado && !botMensaje) {
      setEfectoEjecutado(true);
      setTimeout(() => {
        setBotEscribiendo(true);
        setNewMesaje(true)

        mensajes.forEach((mensaje, index) => {
          setTimeout(() => {
            setMensajeDeBot((prevMensajes) => [...prevMensajes, mensaje]);
          }, (index + 1) * 1000);
        });
      }, 7000);
    }
  };
  
  const onChange = (e) => {
    setMensaje({
      ...mensaje,
      [e.target.name]: e.target.value,
    });
  };

  const resetInput = (name) => {
    setMensaje({
      ...mensaje,
      [name]: "",
    });
  };

  const wppSubmit = (e) => {
    e.preventDefault();
    dispatch(wppMessageRedux(mensaje)).catch((error) => {});
    stSend(true);
    resetInput("text");
    setBotMensaje(true);
    efectoEscribiendo();
    setBanderaFirstMensaje(true);
    if (!banderaFirstMensaje) {
      dispatch(setFirstMensaje(mensaje.text));
    } else {
      dispatch(addMensaje(mensaje.text));
    }
  };

  return (
     <Accordion defaultActiveKey="0" className="custom-accordion">
      <Accordion.Item eventKey={value}>
        <Accordion.Header>
          <AiOutlineWhatsApp className="wppIconHeader"/> Enviame un mensaje {newMesaje ? <PiNumberCircleOneFill className="alertIcon"/>: null} 
        </Accordion.Header>
        <Accordion.Body style={{ maxHeight: '700px', overflowY: 'hidden'}}>
          <p className="myMensaje">
            Hola, mandame un mensaje!
            <BsFillChatHeartFill className="heartwpp" />
          </p>
          {send && (
            <p className="respWpp">
              {firstMensaje} <BsCheck2All className="custom-icon" />
            </p>
          )}
          {botEscribiendo && <p className="loader1">...</p>}
          {mensajeDeBot.length > 0 && (
            <p>
              {mensajeDeBot.map((mensaje, index) => (
                <span className="myMensaje" key={index}>
              {mensaje} <FaRobot className="botMensajeStyle"/>  
                </span>
              ))}
            </p>
          )}
          
          {send &&
            mensajeState.map((msj, index) => (
              <p className="respWpp" key={index}>
                {msj} <BsCheck2All className="custom-icon" />
              </p>
            ))}
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
