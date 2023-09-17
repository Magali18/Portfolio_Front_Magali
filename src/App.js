import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import './index.css';
import Landing from './views/Landing/Landing'
import Home from './views/Home/Home'
import Proyectos from "./components/Proyectos/Proyecto"
import Educacion from './views/Educacion/Educacion'
import Navbar from "./components/Nav/Nav";

const anchors = ["Abaut", "Experiencia", "Skills"];

const App = () => (

  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    navigat
    sectionsColor={["#a83886a8","#ee4ca240","#a83886a8","#ee4ca240" ]}

    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi);

      return (
        <div>
              <Navbar></Navbar>
          <div> </div>
          <div className="section"><h3><Home/></h3></div>
      
       

     
        </div>
      );
    }}
  />
);
export default App;