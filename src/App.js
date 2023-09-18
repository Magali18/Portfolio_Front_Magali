import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import './index.css';
import Landing from './views/Landing/Landing'
import Home from './views/Home/Home'
import Proyectos from "./components/Proyectos/Proyecto"
import Educacion from './views/Educacion/Educacion'
import Navbar from "./components/Nav/Nav";

const anchors = ["Abaut", "Experiencia", "Skills"];

const App = () => {

      return (
        <div>
              <Navbar></Navbar>
          <div> </div>
          <div><h3><Home/></h3></div>
      
       

     
        </div>
      );
    }
export default App;