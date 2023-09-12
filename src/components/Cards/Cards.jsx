
import Card from "../Card/Card"
import './Crads.css'
import info from '../Proyectos/info'
const Cards = () => {
  return (
    <div>
      <div >
       {info.map((infoItem, index) => (
        <Card key={index} info={infoItem} />
      )) } 
     
   
      </div>
    </div>
  );
};
export default Cards;
