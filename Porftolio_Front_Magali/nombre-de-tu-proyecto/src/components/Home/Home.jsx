import { useSelector } from "react-redux";
import"./Home.css"
import IconTecnologi from "../IconTech/icon"
import goBack from "../../utils/goBack"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const Home = () => {
  const visitor = useSelector((state) => state.visitor.name);
  return (
    <div className="backgroundImage">
<button onClick={goBack}> Atras </button>
    <div className="containerHome">
<h1>BIENVENIDO :{visitor}</h1>
{console.log(visitor)}
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >

      <Tab className="box" eventKey="Abaut" title="Abaut">
      <h5> 
      Este porfolio refleja un poco de mi personalidad y conociemientos que adquiri a travez de mis estudios academicos y autodidactas.
      En el camino de la programaion eh cometido muchos errores que afianzaron conocimientos y mi experiencia desarrollando.
      Me gusta el trabajo en equipo y pienso  que la interaccion social hacen la vida un poco mas bella.
       
         </h5>

      </Tab>
      <Tab className="box" eventKey="Experiencia" title="Experiencia">
      asdas
      </Tab>
      <Tab className="box" eventKey="Educacion" title="Educacion">
        <p> Esta pagina es el resultado de la integracion de estas Tecnologias :  </p>
       <IconTecnologi/>
       <p>La frustracion y los errores abundan en el camino de la programacion a su vez es muy gratificante todo lo que se puede crear. </p>
       
      </Tab>
      <Tab className="box" eventKey="Contacto" title="Contacto" >
      contact
      </Tab>
      <Tab className="box" eventKey="Proyectos" title="Proyectos" >
      Proyectos
      </Tab>
    </Tabs>
  


  
      </div>
      
 
     </div>
    
    
  
  )
};
export default Home;
