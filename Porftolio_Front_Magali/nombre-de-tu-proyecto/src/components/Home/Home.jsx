import { useSelector } from "react-redux";
import"./Home.css"
import IconTecnologi from "../IconTech/icon"

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const Home = () => {
  const visitor = useSelector((state) => state.visitor);
  return (
    <div className="backgroundImage">

    <div className="containerHome">


    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab className="box" eventKey="Abaut" title="Abaut">
      Abaut 
      </Tab>
      <Tab className="box" eventKey="Experiencia" title="Experiencia">
        Tab content for Profile
      </Tab>
      <Tab className="box" eventKey="Educacion" title="Educacion">
        <p> Esta pagina es el resultado de la integracion de estas Tecnologias :  </p>
       <IconTecnologi/>
       <p>La frustracion y los errores abundan en el camino de la programacion a su vez es muy gratificante todo lo que se puede crear. </p>
       
      </Tab>
      <Tab className="box" eventKey="Contacto" title="Contacto" >
      contact
      </Tab>
    </Tabs>
  


  
      </div>
      
 
     </div>
    
    
  
  )
};
export default Home;
