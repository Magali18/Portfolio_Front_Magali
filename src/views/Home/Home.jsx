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
import {setWindowWpp} from '../../redux/visitorSlice'
import { useDispatch } from "react-redux";


const Home = () => {
const dispatch = useDispatch()
const setStatewppButton=()=>{
console.log('0')
dispatch(setWindowWpp('0'))

}
  
  return (
    <div className='imageContain'>
     <section id="home-section"> 
      <div className="Home">
        <div className="container">
          <div className="imgHover" >
        
            <img src={FotoPerfil} alt="ImagenPerfil" loading="lazy" 
     />
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
          
              <button className="butonWppHome" onClick={setStatewppButton}> 
               <h3>  <AiOutlineWhatsApp /> </h3>
              </button>
           
     
          </div>
        </div>
      </div>
      </section>
      
      <section id='about-section' >
      <Landing />
      </section>
      <section id='portfolio-section'>
      <Educacion />
      </section>
      <section id='contact-section'>
        <Contact/>
      </section>
    </div>
  );
};
export default Home;
