import { useSelector } from "react-redux";
import "./Home.css";
import IconTecnologi from "../../components/IconTech/icon";
import goBack from "../../utils/goBack";
import NavBar from "../../components/Nav/Nav";
import FotoPerfil from '../../image/Screenshot_7.png'
import Proyecto from '../../components/Proyectos/Proyecto'

const Home = () => {
  const visitor = useSelector((state) => state.visitor.name);
  const count = useSelector((state)=> state.visitor.count)

  return (
    <div className="Home">
<button onClick={goBack}> Atras</button>

      <div className="component1" > 
      <img src={FotoPerfil} alt="" />
      <h3 >Magali Pereyra </h3>
     
      </div>
      <div  className="component2"> 
      <h2>Bienvenido : {visitor ? visitor :` Usuario N° ${count}`}</h2>
      <IconTecnologi></IconTecnologi>
      <Proyecto></Proyecto>
      </div>
    </div>
  );
};
export default Home;
