import { useSelector } from "react-redux";
import "./Home.css";
import { VscGithub, VscTwitter, VscCallIncoming } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { FaLinkedin,FaWhatsapp } from "react-icons/fa";

import FotoPerfil from "../../image/Screenshot_10.png";

const Home = () => {
  const visitor = useSelector((state) => state.visitor.name);
  const count = useSelector((state) => state.visitor.count);
  
  return (
    <div className='imageContain'>
      
      <div className="Home">
        <div className="container">
          <div className="imgHover">
            <img src={FotoPerfil} alt="ImagenPerfil" />
          </div>
          <h3>Magali Pereyra</h3>

          <h4>
          
            ¡No dudes en contactar conmigo y descubrir todo lo que tengo para
            ofrecer!
          </h4>

          <div className="containerStyleIcon">
            <Link to="https://github.com/Magali18">
              <h3>
                <VscGithub />
              </h3>
            </Link>
            <Link to='https://twitter.com/pereyrahmagali'> 
            <h3>
              <VscTwitter />
            </h3>
            </Link>
            <Link to='https://www.linkedin.com/in/magali-pereyra-322682239/'>
            <h3>
              <FaLinkedin />
            </h3>
            </Link>
            <h3> <FaWhatsapp/></h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
