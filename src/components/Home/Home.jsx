import { useSelector } from "react-redux";
import"./Home.css"
import IconTecnologi from "../IconTech/icon"
import goBack from "../../utils/goBack"
import NavBar from "../Nav/Nav"



const Home = () => {
  const visitor = useSelector((state) => state.visitor.name);
  
  return (
    <div>
      <NavBar/>
<button onClick={goBack}> '' </button>

<h1>BIENVENIDO : {visitor? visitor: 'Usuario N° 23'} </h1>
    </div>
  
  )
};
export default Home;
