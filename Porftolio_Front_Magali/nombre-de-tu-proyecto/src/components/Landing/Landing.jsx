import 'bootstrap/dist/css/bootstrap.min.css';
import './Landing.css'
const Landing=()=>{
return(

    <div className='ContainerBody'>
       <h1>Hola mi nombre es Magali ...</h1>
       <h1>Cual es el tuyo ?</h1>
       <h3>Podes escribirlo aqui</h3>
       <input type="text"/>
       <button>ENVIAR</button>
      <h4>Prefiero no hacerlo</h4>
      <button>START</button>
    </div>
)
}
export default Landing;
