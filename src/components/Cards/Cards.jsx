
import Card1 from "../Card/Card"
import './Crads.css'
import info from '../Proyectos/info.js'
const Cards = () => {
  return (
  
      <div className="cards-container">
       {info.map((infoItem, index) => (
        <Card1 key={index} info={infoItem} />
      )) } 
     
   
   
    </div>
  );
};
export default Cards;
