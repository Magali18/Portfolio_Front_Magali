import 'bootstrap/dist/css/bootstrap.min.css';
import './Landing.css'
const Landing=()=>{
return(

    <div className='ContainerBody'>
       <h1>Hola mi nombre es Magali ...</h1>
       <h1 className='efect'>Cual es el tuyo ?</h1>
       <p>Podes escribirlo aqui</p>
       <form onSubmit={''}>
       <input type="text"/>
       <button>Presentarme</button>
       </form>
      <p>Prefiero no hacerlo</p>
      <button>EMPEZAR</button>
    </div>
)
}
export default Landing;
