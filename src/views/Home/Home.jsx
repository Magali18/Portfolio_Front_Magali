import { useSelector } from "react-redux";
import "./Home.css";
import IconTecnologi from "../../components/IconTech/icon";
import goBack from "../../utils/goBack";

import FotoPerfil from '../../image/Screenshot_10.png'


const Home = () => {
  const visitor = useSelector((state) => state.visitor.name);
  const count = useSelector((state)=> state.visitor.count)

  return (
    <div>
      <button onClick={goBack}> Atras</button>
      <h2>Bienvenido : {visitor ? visitor :` Usuario N° ${count}`}</h2>
    <div className="Home">
      <div className="component1" > 
      <img src={FotoPerfil} alt="" />
      <h3 >Magali Pereyra </h3>

      </div>
      <div  className="component2"> 
     
      <IconTecnologi/>
      
      </div>
    </div>
    </div>
  );
};
export default Home;
