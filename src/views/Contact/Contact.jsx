import './Contact.css'
const Contact=()=>{
    return (
        <div className='containerBody'>
            <div> 
            <form type='submit'>
          <p> Contacta conmigo.</p>  
<div>
    <input placeholder='Asunto' type='text' />
    </div>
    <input placeholder='Escribi tu nombre' type="text" />
    <div>
    <input  className='inputMensaje' placeholder='Escribi aqui tu mensaje'/>
    </div>
    <button>Enviar</button>
    <p>Este mensaje será enviado a mi direccion de correo electronico.</p>
    <p> Si preferis no hacerlo, tenes otras fromas de contactarme a travez de mis redes sociales podes acceder a ellas haciendo <a href='/'> click aqui. </a></p>
</form>

        </div>
        </div>
    )
};
export default Contact;