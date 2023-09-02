import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import  {useDispatch}  from "react-redux";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';


const Landing=()=>{
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fwmu3vq', 'template_dqufk4h', form.current, 'A-0VQcem-nMbwDjM6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  const requestOptions = {
    method: 'POST'
   
}
  const dispatch = useDispatch();
  useEffect(() => {
  
    fetch("http://localhost:3001/visit",requestOptions)
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }, [dispatch]);
 
  const goToHomePage = () => {
    navigate('/home');
  };

return(
  

    <div className='ContainerBody'>
       <h1>Hola mi nombre es Magali ...</h1>
       <h1 className='efect'>Cual es el tuyo ?</h1>
       <p>Podes escribirlo aqui</p>
       <form  ref={form} onSubmit={sendEmail}>
       <label>Name</label>
      <input type="text" name="user_name" />
      <button onClick={goToHomePage}>SEND</button>
      <p>Prefiero no hacerlo</p>
      <button onClick={goToHomePage}>EMPEZAR</button>
      </form>
    </div>
)
}
export default Landing;
