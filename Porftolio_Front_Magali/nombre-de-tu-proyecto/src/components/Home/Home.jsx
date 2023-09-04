import { useSelector } from "react-redux";
import"./Home.css"
import IconTecnologi from "../IconTech/icon"
import goBack from "../../utils/goBack"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const Home = () => {
  const visitor = useSelector((state) => state.visitor);
  return (
    <div className="backgroundImage">
<button onClick={goBack}> Atras </button>
    <div className="containerHome">

{console.log(visitor)}
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >

      <Tab className="box" eventKey="Abaut" title="Abaut">
      Tengo 26 años soy Argentina, 
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
