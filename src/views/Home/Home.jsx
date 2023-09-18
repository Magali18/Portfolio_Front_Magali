import { useSelector } from "react-redux";
import "./Home.css"
import { VscGithub, VscTwitter,VscCallIncoming} from "react-icons/vsc";



import FotoPerfil from '../../image/Screenshot_10.png'


const Home = () => {
  const visitor = useSelector((state) => state.visitor.name);
  const count = useSelector((state)=> state.visitor.count)

  return (
    <div>

  
    <div className="Home">
      <div className="container" >
        <div className="imgHover">
      <img src={FotoPerfil} alt="ImagenPerfil" />
      </div>
      <h3 >Magali Pereyra</h3>
      
      <h4>  ¡No dudes en contactar conmigo y descubrir todo lo que tengo para ofrecer! </h4>

   <div className="containerStyleIcon"> 
    <h3><VscGithub /> </h3>  
     <h3><VscTwitter/></h3> 
      <h3><VscCallIncoming/> </h3> 
      </div>
</div>
   
      </div>
     

    </div>
  );
};
export default Home;
