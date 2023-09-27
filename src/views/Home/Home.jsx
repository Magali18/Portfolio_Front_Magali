import "./Home.css";
import { VscGithub, VscTwitter } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import Landing from "../Landing/Landing";
import Educacion from "../Educacion/Educacion";
import Contact from '../Contact/Contact'
import WppMessage from "../../components/WppMessage/wppMesagge";
import {AiOutlineWhatsApp} from "react-icons/ai";
import FotoPerfil from "../../image/Screenshot_10.png";

const Home = () => {
  
  return (
    <div className='imageContain'>
     
      <div className="Home">
        <div className="container">
          <div className="imgHover" >
            <img src={FotoPerfil} alt="ImagenPerfil" />
          </div>
          <div data-aos="fade-up"
     data-aos-duration="3000">
          <h3>Magali Pereyra</h3>
          </div>
          <h4>
          
            ¡No dudes en contactar conmigo y descubrir todo lo que tengo para
            ofrecer!
          </h4>
          <WppMessage/>

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
            <h3>
              <AiOutlineWhatsApp />
            </h3>
     
          </div>
        </div>
      </div>
      <section id='Landing-section' >
      <Landing />
      </section>
      <section id='Educacion-section'>
      <Educacion />
      </section>
      <section id='Contact-section'>
        <Contact/>
      </section>
    </div>
  );
};
export default Home;
