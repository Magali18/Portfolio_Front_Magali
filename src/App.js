import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./index.css";
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import Proyectos from "./components/Proyectos/Proyecto";
import Educacion from "./views/Educacion/Educacion";
import Navbar from "./components/Nav/Nav";
import { Route,Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
   
    <Route path="/abaut" element={ <Home />}> </Route> 

      </Routes>
    </div>
  );
};
export default App;
