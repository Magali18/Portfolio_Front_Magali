import "./Educacion.css";
import info from "../../components/Proyectos/info";
import { AiFillYoutube } from "react-icons/ai";
import {GrDeploy} from 'react-icons/gr'
import Pdf from '../../components/PDF/Pdf'

const Educacion = () => {
  return (
    <div className="StyleContainerEducacion">
     <h1 className="ProyectStyleTitle">Mis Proyectos</h1>
    <div className="styleEducacion">
      {info.map((item, index) => (
        <div className="containEducation">
          <div key={index}>
            <h2 className="CardTitle">{item.title}</h2>
            <p>{item.description}</p>
            <img className="imagenProyecto" src={item.image} alt={item.title} />
            <p>SKILL TECHS:</p>
            <div className="iconTechs">
              {item.tech.map((techIcon, techIndex) => (
                <span key={techIndex}>{techIcon}</span>
              ))}
            </div>
          </div>
          <div className="containerBotones">
            <div>
              
              <button>
                <AiFillYoutube className="iconYoutube" /> YouTube
              </button>
            </div>
            <div>
      
              <button> <GrDeploy className="iconDeploy"/> Deploy</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="pdsStyle"> 
   <Pdf/> 
   </div>
    </div>
  );
};
export default Educacion;
