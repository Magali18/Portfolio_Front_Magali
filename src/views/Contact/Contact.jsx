import "./Contact.css";
import { BsFillSendCheckFill } from "react-icons/bs";
const Contact = () => {
  return (
    <div className="containerBody">
      <div className="containerForm3">
        <p className="styleheader">
   
          Contacta conmigo. <BsFillSendCheckFill className="colorIcono" />
        </p>
        <form className="contact" type="submit">
            <label>Asunto
          <input placeholder="Escribi el asunto" type="text" />
          </label>
          <label>Nombre
          <input placeholder="Escribi tu nombre" type="text" />
          </label>
          <label>Mensaje
          <input placeholder="Escribi tu mensaje" />
          </label>
          <button>Enviar</button>
        </form>
        
        <p className="Stylep">Este mensaje será enviado a mi direccion de correo electronico.</p>
        <div className="stylePfooter"> 
        <p>
          Si preferis no hacerlo, tenes otras fromas de contactarme a travez de
          mis redes sociales podes acceder a ellas haciendo
          <a href="/"> click aqui. </a>
          
        </p>
        </div>
      </div>
    </div>
  );
};
export default Contact;
