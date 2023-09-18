
import Cardk from "../Card/Card"
import './Crads.css'
import info from '../Proyectos/info'
const Cards = () => {
  return (
  
      <div>
       {info.map((infoItem, index) => (
        <Cardk key={index} info={infoItem} />
      )) } 
     
   
   
    </div>
  );
};
export default Cards;
