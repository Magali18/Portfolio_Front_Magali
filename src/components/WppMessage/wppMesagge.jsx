import { wppMessageRedux } from "../../redux/vistHandler";
import { useDispatch } from "react-redux";
import React from "react";
import "./wppMesagge.css";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { MdSend } from "react-icons/md";
import { BsCheck2All, BsFillChatHeartFill } from "react-icons/bs";
const WppMessage = () => {
  const dispatch = useDispatch();
  const [send, stSend] = useState(false);

  const wppSubmit = (e) => {
    e.preventDefault();
    dispatch(wppMessageRedux());
    stSend(!send);
  };
  const [mensaje, setMensaje] = useState({
    text: "",
  });
  const onChange = (e) => {
    setMensaje({
      ...mensaje,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Accordion defaultActiveKey="0" className="custom-accordion">
      <Accordion.Item eventKey='1'>
        <Accordion.Header>
          <AiOutlineWhatsApp /> Enviame un mensaje
        </Accordion.Header>
        <Accordion.Body>
          <p className="myMensaje">
            Hola mandame un mensaje!
            <BsFillChatHeartFill className="heartwpp" />
          </p>

          {send ? (
            <p className="respWpp">
              {mensaje.text} <BsCheck2All className="custom-icon" />
            </p>
          ) : (
            <p></p>
          )}
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
