import "./Contact.css";
import { BsFillSendCheckFill } from "react-icons/bs";
import {useState,useRef} from 'react'
import emailjs from "@emailjs/browser";
import Modal from "../../components/Modal/Modal";


const Contact = () => {
  const form = useRef();
  const [formContact, setFormContact] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  
  const handleChange = (e) => {
    setFormContact({ ...formContact,
      [e.target.name]: e.target.value
     });
  };
  const handleReset = () => {
    setFormContact({
      user_name: "",
      user_email: "",
      message: "",
    });
  };
  const handleSubmit = (e) => {
  
    e.preventDefault();
if(formContact.user_name && formContact.user_email && formContact.message){
  emailjs.sendForm(
  "service_fwmu3vq",
  "template_qd5cd0z",
  form.current,
  "A-0VQcem-nMbwDjM6"
);
handleReset()}else {
  console.log('no se puede enviar el mensaje')

}
   
   
  };

  return (
    <div className="containerBody">
      <Modal></Modal>
      <div className="containerForm3">
        <p className="styleheader">
   
          Contacta conmigo. <BsFillSendCheckFill className="colorIcono" />
        </p>
        <form ref={form} onSubmit={handleSubmit} className="contact" type="submit">
          
          <label>Nombre
          <input value={formContact.name} name="user_name" onChange={handleChange} placeholder="Escribi tu nombre" type="text" />
          </label>
          <label>Email
          <input  value={formContact.email} name="user_email" onChange={handleChange} placeholder="Escribi tu email" type="text" />
          </label>
          <label>Mensaje
          <input value={formContact.message} name="message" onChange={handleChange} placeholder="Escribi tu mensaje" />
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
