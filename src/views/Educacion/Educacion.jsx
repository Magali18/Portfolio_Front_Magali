import "./Educacion.css";
import info from "../../components/Proyectos/info";
import { AiFillYoutube } from "react-icons/ai";
import {GrDeploy} from 'react-icons/gr'
import Pdf from '../../components/PDF/Pdf'

const Educacion = () => {
const openDeploy =(prop)=>{
window.open(prop,"_blank")
}
const openDemo =(prop)=>{
  window.open(prop,"_blank")

}
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
              
              <button onClick={()=>openDemo(item.demo)}>
                <AiFillYoutube className="iconYoutube" /> YouTube
              </button>
            </div>
            <div>
      
              <button onClick={()=>openDeploy(item.deploy)}> <GrDeploy className="iconDeploy"/> Deploy</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="pdsStyle"> 
   <Pdf/> 
   <span>Actualización: 28/09/2023</span>
   </div>
    </div>
  );
};
export default Educacion;
