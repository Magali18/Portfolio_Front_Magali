import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Landing=()=>{
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fwmu3vq', 'template_dqufk4h', form.current, 'A-0VQcem-nMbwDjM6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
return(
  

    <div className='ContainerBody'>
       <h1>Hola mi nombre es Magali ...</h1>
       <h1 className='efect'>Cual es el tuyo ?</h1>
       <p>Podes escribirlo aqui</p>
       <form  ref={form} onSubmit={sendEmail}>
       <label>Name</label>
      <input type="text" name="user_name" />
      <button>SEND</button>
      <p>Prefiero no hacerlo</p>
      <button>EMPEZAR</button>
      </form>
    </div>
)
}
export default Landing;
