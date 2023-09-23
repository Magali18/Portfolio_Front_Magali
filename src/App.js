import "./index.css";
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import Contact from "./views/Contact/Contact";
import Educacion from "./views/Educacion/Educacion";
import Navbar from "./components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import Spinner from "./components/Spinner/Spinner";

import React, { useEffect,useState } from "react";

const App = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    navigat
    sectionsColor={["#ee4ca2bd","#ee4ca240","#ee4ca2bd","#39ab87" ]}

    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi);

      return (
        <div>
          <div className="section"><h3> <Landing/></h3></div>
          <div className="section"><h3><Home/></h3></div>
          <div className="section"><h3><Proyectos/></h3></div>
   

     
        </div>
      );
    }}
  />
);
export default App;