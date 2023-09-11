import { useSelector } from "react-redux";
import "./Home.css";
import IconTecnologi from "../IconTech/icon";
import goBack from "../../utils/goBack";
import NavBar from "../Nav/Nav";
import FotoPerfil from '../../image/Screenshot_7.png'

const Home = () => {
  const visitor = useSelector((state) => state.visitor.name);

  return (
    <div className="Home">
<button onClick={goBack}> Atras</button>
      <div className="component1" > 
      <img src={FotoPerfil} alt="" />
      <h1 >Magali Pereyra </h1>
      </div>
      <h1 className="component2">Bienvenido : {visitor? visitor:'Usuario N°'}</h1>
    </div>
  );
};
export default Home;
