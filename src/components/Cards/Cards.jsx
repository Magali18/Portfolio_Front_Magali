
import Card from "../Card/Card"
import './Crads.css'
import info from '../Proyectos/info.js'
const Cards = () => {
  return (
  
      <div className="cards-container">
       {info.map((infoItem, index) => (
        <Card key={index} info={infoItem} />
      )) } 
     
   
   
    </div>
  );
};
export default Cards;
