import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import './index.css';
import Landing from './views/Landing/Landing'
import Home from './views/Home/Home'
import Proyectos from "./components/Proyectos/Proyecto"

const anchors = ["firstPage", "secondPage", "thirdPage"];

const App = () => {
 
      return (
        <div>
          <div className="section"><h3> <Landing/></h3></div>
          <div className="section"><h3><Home/></h3></div>
          <div className="section"><h3><Proyectos/></h3></div>
   

     
        </div>
      );
      }

export default App;